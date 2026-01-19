
export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, ""); // remove leading slashes
  return `${normalizedBase}${normalizedPath}`;
}
