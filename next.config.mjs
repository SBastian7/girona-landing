/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'eu', 'es'],
        localeDetection: false,
        defaultLocale: 'es',
    },
};

export default nextConfig;
