import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "it"],
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales.
    "/": "/",
    "/about": {
      en: "/about",
      it: "/chi-siamo",
    },
  },
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
