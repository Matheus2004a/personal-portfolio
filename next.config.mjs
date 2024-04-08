/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['github-automated-repos'],
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
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
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
