import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: 'ca'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|fr|ca)/:path*']
};