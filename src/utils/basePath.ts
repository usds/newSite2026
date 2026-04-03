const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";

const normalizedBasePath =
  rawBasePath.length > 0
    ? rawBasePath.startsWith("/")
      ? rawBasePath
      : `/${rawBasePath}`
    : "";

export const BASE_PATH = normalizedBasePath.replace(/\/$/, "");

const ABSOLUTE_URL_RE = /^(?:[a-z][a-z\d+.-]*:)?\/\//i;

export function withBasePath(path: string): string {
  if (
    !path ||
    ABSOLUTE_URL_RE.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("blob:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  if (!path.startsWith("/")) {
    return path;
  }

  if (!BASE_PATH) {
    return path;
  }

  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) {
    return path;
  }

  return `${BASE_PATH}${path}`;
}

export function toAbsoluteSiteUrl(path: string, siteUrl: string): string {
  return new URL(withBasePath(path), `${siteUrl.replace(/\/$/, "")}/`).toString();
}
