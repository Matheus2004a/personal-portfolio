/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/Matheus2004a.png/**',
      },
      {
        protocol: 'https',
        hostname: 'vskcxxcaqkvcrcscjinc.supabase.co',
        port: '',
        pathname: '/storage/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
