"use client";

import { useState, useEffect, useCallback } from "react";

const SECTION_LABELS: Record<string, string> = {
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
};

const SECTION_ORDER = [
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
];

interface FileData {
  file: string;
  data: Record<string, unknown>;
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
        className="sb-input"
        placeholder="(empty)"
      />
    );
  }

  if (typeof data === "boolean") {
    return (
      <label className="sb-toggle">
        <input
          type="checkbox"
          checked={data}
          onChange={(e) => onChange(path, e.target.checked)}
        />
        <span className="sb-toggle-text">{data ? "Enabled" : "Disabled"}</span>
      </label>
    );
  }

  if (typeof data === "number") {
    return (
      <input
        type="number"
        value={data}
        onChange={(e) => onChange(path, Number(e.target.value))}
        className="sb-input"
      />
    );
  }

  if (typeof data === "string") {
    if (data.length > 60) {
      return (
        <textarea
          value={data}
          onChange={(e) => onChange(path, e.target.value)}
          className="sb-textarea"
          rows={Math.min(6, Math.ceil(data.length / 40))}
        />
      );
    }
    return (
      <input
        type="text"
        value={data}
        onChange={(e) => onChange(path, e.target.value)}
        className="sb-input"
      />
    );
  }

  if (Array.isArray(data)) {
    return (
      <div className="sb-array">
        {data.map((item, index) => (
          <div key={index} className="sb-array-item">
            <div className="sb-array-head">
              <span className="sb-array-idx">#{index + 1}</span>
              <button
                onClick={() => {
                  const newArr = [...data];
                  newArr.splice(index, 1);
                  onChange(path, newArr);
                }}
                className="sb-btn-remove"
              >
                x
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
          className="sb-btn-add"
        >
          + Add
        </button>
      </div>
    );
  }

  if (typeof data === "object") {
    const entries = Object.entries(data as Record<string, unknown>);
    return (
      <div className="sb-object">
        {entries.map(([key, value]) => {
          const fieldPath = path ? `${path}.${key}` : key;
          return (
            <div key={key} className="sb-field">
              <label className="sb-label">{formatLabel(key)}</label>
              <SmartEditor data={value} onChange={onChange} path={fieldPath} />
            </div>
          );
        })}
      </div>
    );
  }

  return <span>{String(data)}</span>;
}

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [files, setFiles] = useState<FileData[]>([]);
  const [activeFile, setActiveFile] = useState("HeroSection.json");
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [modified, setModified] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

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
    const wasOpen = sessionStorage.getItem("admin_sidebar_open");
    const storedFile = sessionStorage.getItem("admin_sidebar_file");
    if (wasOpen === "true") {
      setOpen(true);
      if (storedFile) setActiveFile(storedFile);
    }
  }, []);

  useEffect(() => {
    if (open) {
      sessionStorage.setItem("admin_sidebar_open", "true");
    } else {
      sessionStorage.removeItem("admin_sidebar_open");
    }
  }, [open]);

  useEffect(() => {
    sessionStorage.setItem("admin_sidebar_file", activeFile);
  }, [activeFile]);

  useEffect(() => {
    if (!open) return;
    const stored = sessionStorage.getItem("admin_password");
    if (stored) {
      setPasswordInput(stored);
    }
  }, [open]);

  useEffect(() => {
    if (!open || !passwordInput) return;
    if (files.length === 0 && !authenticated) {
      loadData();
    }
  }, [open, passwordInput, files.length, authenticated, loadData]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("admin_password", passwordInput);
    await loadData();
  };

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
    if (!fileData) {
      setSaving(false);
      return;
    }

    try {
      const res = await fetch("/api/admin/data", {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify({ file: fileName, data: fileData.data }),
      });

      if (res.ok) {
        setSaveStatus("Saved! Refreshing...");
        setModified((prev) => {
          const next = new Set(prev);
          next.delete(fileName);
          return next;
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        setSaveStatus("Error saving");
      }
    } catch {
      setSaveStatus("Error saving");
    }
    setSaving(false);
  };

  const activeData = files.find((f) => f.file === activeFile);

  return (
    <>
      <button
        className="sb-toggle-btn"
        onClick={() => {
          setOpen(!open);
          if (!open && !authenticated) {
            const stored = sessionStorage.getItem("admin_password");
            if (stored) {
              setPasswordInput(stored);
            }
          }
        }}
        title={open ? "Close editor" : "Open editor"}
      >
        {open ? "✕" : "✎"}
      </button>

      {open && (
        <div className="sb-overlay" onClick={() => setOpen(false)} />
      )}

      <div className={`sb-panel ${open ? "sb-panel-open" : ""}`}>
        {!authenticated ? (
          <div className="sb-auth">
            <h3 className="sb-auth-title">Admin Login</h3>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password"
                className="sb-input"
                autoFocus
              />
              {authError && <p className="sb-error">{authError}</p>}
              <button type="submit" className="sb-btn-login">
                Sign In
              </button>
            </form>
          </div>
        ) : loading ? (
          <div className="sb-auth">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className="sb-header">
              <select
                value={activeFile}
                onChange={(e) => setActiveFile(e.target.value)}
                className="sb-select"
              >
                {SECTION_ORDER.map((f) => (
                  <option key={f} value={f}>
                    {SECTION_LABELS[f]}{modified.has(f) ? " *" : ""}
                  </option>
                ))}
              </select>
              <div className="sb-header-actions">
                {saveStatus && (
                  <span className={`sb-status ${saveStatus.includes("Error") ? "sb-status-err" : "sb-status-ok"}`}>
                    {saveStatus}
                  </span>
                )}
                <button
                  onClick={() => handleSave(activeFile)}
                  disabled={saving || !modified.has(activeFile)}
                  className="sb-btn-save"
                >
                  {saving ? "..." : "Save"}
                </button>
              </div>
            </div>

            <div className="sb-body">
              {activeData && (
                <SmartEditor
                  data={activeData.data}
                  onChange={(fieldPath, value) =>
                    handleFieldChange(activeFile, fieldPath, value)
                  }
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
