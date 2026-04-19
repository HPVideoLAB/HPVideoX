import DOMPurify from "dompurify";

// Sanitize untrusted HTML before rendering with v-html.
// Strips <script>, on* event handlers, javascript: URIs, etc.
export function sanitizeHtml(dirty) {
  if (!dirty) return "";
  return DOMPurify.sanitize(String(dirty), {
    USE_PROFILES: { html: true },
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed"],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
  });
}
