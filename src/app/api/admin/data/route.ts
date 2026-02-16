import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_BASE = path.join(process.cwd(), "src/app/data");

const VALID_FILES = [
  "home/HeroSection.json",
  "home/Navigation.json",
  "home/Footer.json",
  "home/ServiceCardsSection.json",
  "home/ServicesSection.json",
  "home/TestimonialsSection.json",
  "home/FaqSection.json",
  "home/ImpactSection.json",
  "home/FinalCtaSection.json",
  "home/HomePage.json",
  "home/VideoSection.json",
  "home/CaseStudiesSection.json",
  "home/HowSection.json",
  "home/WhyChooseSection.json",
  "home/TrustBarSection.json",
  "home/PartnersStripSection.json",
  "home/AccreditationsSection.json",
  "pages/AboutPage.json",
  "pages/SolarPanelsPage.json",
  "pages/BatteryStoragePage.json",
  "pages/EvChargersPage.json",
];

function toApiKey(fullPath: string): string {
  if (fullPath.startsWith("home/")) return fullPath.replace("home/", "");
  return fullPath;
}

function toFullPath(apiKey: string): string | null {
  if (VALID_FILES.includes(apiKey)) return apiKey;
  const homePath = "home/" + apiKey;
  if (VALID_FILES.includes(homePath)) return homePath;
  return null;
}

function checkAuth(_request: NextRequest): boolean {
  return true;
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
      const fullPath = toFullPath(file);
      if (!fullPath) {
        return NextResponse.json({ error: "Invalid file" }, { status: 400 });
      }
      const filePath = path.join(DATA_BASE, fullPath);
      const result = readJsonFile(filePath);
      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 500 });
      }
      return NextResponse.json({ file, data: result.data });
    }

    const files = [];
    for (const f of VALID_FILES) {
      const filePath = path.join(DATA_BASE, f);
      const result = readJsonFile(filePath);
      const key = toApiKey(f);
      if (result.error) {
        files.push({ file: key, data: {}, error: result.error });
      } else {
        files.push({ file: key, data: result.data });
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

    const fullPath = toFullPath(file);
    if (!file || !fullPath) {
      return NextResponse.json({ error: "Invalid file" }, { status: 400 });
    }

    if (data === undefined) {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }

    const filePath = path.join(DATA_BASE, fullPath);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");

    return NextResponse.json({ success: true, file });
  } catch (e) {
    return NextResponse.json({ error: `Save failed: ${(e as Error).message}` }, { status: 500 });
  }
}
