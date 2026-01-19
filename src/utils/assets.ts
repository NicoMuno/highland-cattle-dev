export function assetUrl(path: string) {
  // ensures exactly one slash between base and path
  return new URL(path.replace(/^\/+/, ""), import.meta.env.BASE_URL).toString();
}
