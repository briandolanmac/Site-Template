"use client";

import { useState, useEffect, useCallback } from "react";
import "./admin.css";

const FONT_OPTIONS = [
  "League Spartan",
  "Inter",
  "Poppins",
  "Montserrat",
  "Raleway",
  "Open Sans",
  "Lato",
  "Roboto",
  "Nunito",
  "Work Sans",
  "Quicksand",
  "Comfortaa",
  "Baloo 2",
  "Fredoka",
  "Chewy",
  "Pacifico",
  "Caveat",
  "Patrick Hand",
];

const SECTION_LABELS: Record<string, string> = {
  "SiteSettings.json": "Site Settings",
  "HomePage.json": "Page Settings",
  "Navigation.json": "Navigation",
  "HeroSection.json": "Hero Section",
  "ServiceCardsSection.json": "Service Cards",
  "TrustBarSection.json": "Trust Bar",
  "PartnersStripSection.json": "Partners Strip",
  "VideoSection.json": "Video Section",
  "ServicesSection.json": "Services Section",
  "WhyChooseSection.json": "Why Choose Us",
  "ImpactSection.json": "Impact / Stats",
  "CaseStudiesSection.json": "Case Studies",
  "HowSection.json": "How It Works",
  "TestimonialsSection.json": "Testimonials",
  "FaqSection.json": "FAQ",
  "AccreditationsSection.json": "Accreditations",
  "FinalCtaSection.json": "Final CTA",
  "Footer.json": "Footer",
  "seo.json": "SEO Settings",
  "pages/AboutPage.json": "About / Who We Are",
  "pages/SolarPanelsPage.json": "Solar Panels Page",
  "pages/BatteryStoragePage.json": "Battery Storage Page",
  "pages/EvChargersPage.json": "EV Chargers Page",
  "pages/CommercialSolarPage.json": "Commercial Solar Page",
  "pages/GrantsPage.json": "Grants Page",
  "pages/FinancePage.json": "Finance Page",
  "pages/FundingOptionsPage.json": "Funding Options Page",
  "pages/ContactPage.json": "Contact Page",
  "pages/TestimonialsPage.json": "Testimonials Page",
  "pages/QuoteBuilderPage.json": "Quote Builder Page",
  "pages/PrivacyPolicyPage.json": "Privacy Policy Page",
  "pages/CookiesPage.json": "Cookies Page",
};

const SECTION_ORDER = [
  "SiteSettings.json",
  "HomePage.json",
  "Navigation.json",
  "HeroSection.json",
  "ServiceCardsSection.json",
  "TrustBarSection.json",
  "PartnersStripSection.json",
  "VideoSection.json",
  "ServicesSection.json",
  "WhyChooseSection.json",
  "ImpactSection.json",
  "CaseStudiesSection.json",
  "HowSection.json",
  "TestimonialsSection.json",
  "FaqSection.json",
  "AccreditationsSection.json",
  "FinalCtaSection.json",
  "Footer.json",
  "seo.json",
  "pages/AboutPage.json",
  "pages/SolarPanelsPage.json",
  "pages/BatteryStoragePage.json",
  "pages/EvChargersPage.json",
  "pages/CommercialSolarPage.json",
  "pages/GrantsPage.json",
  "pages/FinancePage.json",
  "pages/FundingOptionsPage.json",
  "pages/ContactPage.json",
  "pages/TestimonialsPage.json",
  "pages/QuoteBuilderPage.json",
  "pages/PrivacyPolicyPage.json",
  "pages/CookiesPage.json",
];

interface FileData {
  file: string;
  data: Record<string, unknown>;
}

function SmartEditor({
  data,
  onChange,
  path = "",
}: {
  data: unknown;
  onChange: (path: string, value: unknown) => void;
  path?: string;
}) {
  if (data === null || data === undefined) {
    return (
      <input
        type="text"
        value=""
        onChange={(e) => onChange(path, e.target.value || null)}
        className="admin-input"
        placeholder="(empty)"
      />
    );
  }

  if (typeof data === "boolean") {
    return (
      <label className="admin-toggle">
        <input
          type="checkbox"
          checked={data}
          onChange={(e) => onChange(path, e.target.checked)}
        />
        <span className="admin-toggle-label">{data ? "Enabled" : "Disabled"}</span>
      </label>
    );
  }

  if (typeof data === "number") {
    return (
      <input
        type="text"
        inputMode="numeric"
        value={String(data)}
        onChange={(e) => {
          const v = e.target.value;
          if (v === "" || v === "-") { onChange(path, 0); return; }
          const n = Number(v);
          if (!isNaN(n)) onChange(path, n);
        }}
        className="admin-input"
      />
    );
  }

  if (typeof data === "string") {
    if (path === "font" && FONT_OPTIONS.includes(data)) {
      return (
        <select
          value={data}
          onChange={(e) => onChange(path, e.target.value)}
          className="admin-input"
          style={{ fontFamily: `"${data}", sans-serif` }}
        >
          {FONT_OPTIONS.map((f) => (
            <option key={f} value={f} style={{ fontFamily: `"${f}", sans-serif` }}>
              {f}
            </option>
          ))}
        </select>
      );
    }
    if (data.length > 80) {
      return (
        <textarea
          value={data}
          onChange={(e) => onChange(path, e.target.value)}
          className="admin-textarea"
          rows={Math.min(8, Math.ceil(data.length / 60))}
        />
      );
    }
    return (
      <input
        type="text"
        value={data}
        onChange={(e) => onChange(path, e.target.value)}
        className="admin-input"
      />
    );
  }

  if (Array.isArray(data)) {
    return (
      <div className="admin-array">
        {data.map((item, index) => (
          <div key={index} className="admin-array-item">
            <div className="admin-array-header">
              <span className="admin-array-index">#{index + 1}</span>
              <button
                onClick={() => {
                  const newArr = [...data];
                  newArr.splice(index, 1);
                  onChange(path, newArr);
                }}
                className="admin-btn-delete"
                title="Remove item"
              >
                Remove
              </button>
            </div>
            <SmartEditor
              data={item}
              onChange={onChange}
              path={path ? `${path}.${index}` : `${index}`}
            />
          </div>
        ))}
        <button
          onClick={() => {
            const newItem =
              data.length > 0
                ? typeof data[0] === "object"
                  ? JSON.parse(JSON.stringify(data[0]))
                  : ""
                : "";
            onChange(path, [...data, newItem]);
          }}
          className="admin-btn-add"
        >
          + Add Item
        </button>
      </div>
    );
  }

  if (typeof data === "object") {
    const entries = Object.entries(data as Record<string, unknown>);
    return (
      <div className="admin-object">
        {entries.map(([key, value]) => {
          const fieldPath = path ? `${path}.${key}` : key;
          const isNested = typeof value === "object" && value !== null && !Array.isArray(value);
          const isArray = Array.isArray(value);

          return (
            <div
              key={key}
              className={`admin-field ${isNested || isArray ? "admin-field-nested" : ""}`}
            >
              <label className="admin-label">{formatLabel(key)}</label>
              <SmartEditor data={value} onChange={onChange} path={fieldPath} />
            </div>
          );
        })}
      </div>
    );
  }

  return <span>{String(data)}</span>;
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
}

function setNestedValue(obj: unknown, path: string, value: unknown): unknown {
  if (!path) return value;
  const keys = path.split(".");
  const result = JSON.parse(JSON.stringify(obj));
  let current: Record<string, unknown> = result;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const numKey = Number(key);
    if (!isNaN(numKey) && Array.isArray(current)) {
      current = current[numKey] as Record<string, unknown>;
    } else {
      current = current[key] as Record<string, unknown>;
    }
  }

  const lastKey = keys[keys.length - 1];
  const numLastKey = Number(lastKey);
  if (!isNaN(numLastKey) && Array.isArray(current)) {
    (current as unknown[])[numLastKey] = value;
  } else {
    current[lastKey] = value;
  }

  return result;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [files, setFiles] = useState<FileData[]>([]);
  const [activeFile, setActiveFile] = useState<string>("HomePage.json");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [modified, setModified] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const getHeaders = useCallback(() => {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (passwordInput) headers["x-admin-password"] = passwordInput;
    return headers;
  }, [passwordInput]);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/data", { headers: getHeaders() });
      if (res.status === 401) {
        setAuthenticated(false);
        setAuthError("Invalid password");
        setLoading(false);
        return;
      }
      const json = await res.json();
      setFiles(json.files);
      setAuthenticated(true);
      setAuthError("");
    } catch {
      setAuthError("Failed to load data");
    }
    setLoading(false);
  }, [getHeaders]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleFieldChange = (filePath: string, fieldPath: string, value: unknown) => {
    setFiles((prev) =>
      prev.map((f) => {
        if (f.file !== filePath) return f;
        const newData = setNestedValue(f.data, fieldPath, value);
        return { ...f, data: newData as Record<string, unknown> };
      })
    );
    setModified((prev) => new Set([...prev, filePath]));
    setSaveStatus("");
  };

  const handleSave = async (fileName: string) => {
    setSaving(true);
    setSaveStatus("");
    const fileData = files.find((f) => f.file === fileName);
    if (!fileData) return;

    try {
      const res = await fetch("/api/admin/data", {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify({ file: fileName, data: fileData.data }),
      });

      if (res.ok) {
        setSaveStatus(`${SECTION_LABELS[fileName]} saved successfully`);
        setModified((prev) => {
          const next = new Set(prev);
          next.delete(fileName);
          return next;
        });
      } else {
        setSaveStatus("Error saving changes");
      }
    } catch {
      setSaveStatus("Error saving changes");
    }
    setSaving(false);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    const modifiedFiles = files.filter((f) => modified.has(f.file));
    let allOk = true;

    for (const fileData of modifiedFiles) {
      try {
        const res = await fetch("/api/admin/data", {
          method: "PUT",
          headers: getHeaders(),
          body: JSON.stringify({ file: fileData.file, data: fileData.data }),
        });
        if (!res.ok) allOk = false;
      } catch {
        allOk = false;
      }
    }

    if (allOk) {
      setSaveStatus(`All ${modifiedFiles.length} section(s) saved`);
      setModified(new Set());
    } else {
      setSaveStatus("Some sections failed to save");
    }
    setSaving(false);
  };

  const activeData = files.find((f) => f.file === activeFile);

  const filteredSections = SECTION_ORDER.filter((f) =>
    SECTION_LABELS[f]?.toLowerCase().includes(searchQuery.toLowerCase())
  );


  if (loading) {
    return (
      <div className="admin-login-page">
        <div className="admin-loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
          <a href="/" className="admin-back-link">View Site</a>
        </div>
        <div className="admin-sidebar-search">
          <input
            type="text"
            placeholder="Search sections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="admin-search-input"
          />
        </div>
        <nav className="admin-nav">
          {filteredSections.map((file) => (
            <button
              key={file}
              onClick={() => setActiveFile(file)}
              className={`admin-nav-item ${activeFile === file ? "active" : ""} ${modified.has(file) ? "modified" : ""}`}
            >
              <span>{SECTION_LABELS[file]}</span>
              {modified.has(file) && <span className="admin-modified-dot" />}
            </button>
          ))}
        </nav>
        {modified.size > 0 && (
          <div className="admin-sidebar-footer">
            <button onClick={handleSaveAll} disabled={saving} className="admin-btn-save-all">
              {saving ? "Saving..." : `Save All (${modified.size})`}
            </button>
          </div>
        )}
      </aside>

      <main className="admin-main">
        <div className="admin-toolbar">
          <div>
            <h1 className="admin-page-title">{SECTION_LABELS[activeFile]}</h1>
            <p className="admin-file-path">src/app/data/home/{activeFile}</p>
          </div>
          <div className="admin-toolbar-actions">
            {saveStatus && (
              <span className={`admin-save-status ${saveStatus.includes("Error") ? "error" : "success"}`}>
                {saveStatus}
              </span>
            )}
            <button
              onClick={() => handleSave(activeFile)}
              disabled={saving || !modified.has(activeFile)}
              className="admin-btn-save"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        <div className="admin-content">
          {activeData && (
            <SmartEditor
              data={activeData.data}
              onChange={(fieldPath, value) => handleFieldChange(activeFile, fieldPath, value)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
