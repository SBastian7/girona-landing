import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
        // Add PostCSS loader only for client-side JavaScript bundle
        if (!isServer) {
            // Find the rule that handles CSS files
            const cssRule = config.module.rules.find(
                (rule) => rule.test && rule.test.toString() === '/\\.css$/'
            );

            // Add postcss-loader to the existing CSS rule
            if (cssRule) {
                const postcssLoader = {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: ['autoprefixer'],
                        },
                    },
                };

                cssRule.use.push(postcssLoader);
            }
        }

        return config;
    },
};

export default withNextIntl(nextConfig);
