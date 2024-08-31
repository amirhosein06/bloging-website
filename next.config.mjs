/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.stockcake.com'
            }
        ]
    }
};

export default nextConfig;
