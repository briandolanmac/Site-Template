import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src/app/data/home");

const VALID_FILES = [
  "HeroSection.json",
  "Navigation.json",
  "Footer.json",
  "ServiceCardsSection.json",
  "ServicesSection.json",
  "TestimonialsSection.json",
  "FaqSection.json",
  "ImpactSection.json",
  "FinalCtaSection.json",
  "HomePage.json",
  "VideoSection.json",
  "CaseStudiesSection.json",
  "HowSection.json",
  "WhyChooseSection.json",
  "TrustBarSection.json",
  "PartnersStripSection.json",
  "AccreditationsSection.json",
];

function checkAuth(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  const envPassword = process.env.ADMIN_PASSWORD;
  if (!envPassword) return true;
  return password === envPassword;
}

function readJsonFile(filePath: string): { data: unknown; error?: string } {
  try {
    if (!fs.existsSync(filePath)) {
      return { data: null, error: "File not found" };
    }
    const content = fs.readFileSync(filePath, "utf-8");
    return { data: JSON.parse(content) };
  } catch (e) {
    return { data: null, error: `Failed to read file: ${(e as Error).message}` };
  }
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  try {
    if (file) {
      if (!VALID_FILES.includes(file)) {
        return NextResponse.json({ error: "Invalid file" }, { status: 400 });
      }
      const filePath = path.join(DATA_DIR, file);
      const result = readJsonFile(filePath);
      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 500 });
      }
      return NextResponse.json({ file, data: result.data });
    }

    const files = [];
    for (const f of VALID_FILES) {
      const filePath = path.join(DATA_DIR, f);
      const result = readJsonFile(filePath);
      if (result.error) {
        files.push({ file: f, data: {}, error: result.error });
      } else {
        files.push({ file: f, data: result.data });
      }
    }

    return NextResponse.json({ files });
  } catch (e) {
    return NextResponse.json({ error: `Server error: ${(e as Error).message}` }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { file, data } = body;

    if (!file || !VALID_FILES.includes(file)) {
      return NextResponse.json({ error: "Invalid file" }, { status: 400 });
    }

    if (data === undefined) {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }

    const filePath = path.join(DATA_DIR, file);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");

    return NextResponse.json({ success: true, file });
  } catch (e) {
    return NextResponse.json({ error: `Save failed: ${(e as Error).message}` }, { status: 500 });
  }
}
