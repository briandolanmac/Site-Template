import siteSettings from "../data/home/SiteSettings.json";

export function getVoltfloUrl(): string {
  return siteSettings.voltfloCalculatorUrl || "https://green-house.comprehensive.voltflo.ie/";
}
