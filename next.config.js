/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Tambahkan array remotePatterns
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com', // Tetap dipertahankan untuk fallback
            },
        ],
    },
};

module.exports = nextConfig;