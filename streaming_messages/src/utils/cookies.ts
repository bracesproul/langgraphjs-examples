import Cookies from "../../node_modules/@types/js-cookie";

export function getCookie(key: string) {
  if (typeof window === "undefined") return null;
  return Cookies.get(key) ?? null;
}

export function setCookie(key: string, value: string) {
  if (typeof window === "undefined") return null;
  Cookies.set(key, value);
}
