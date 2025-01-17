/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.googleusercontent.com',
          port: '',
          pathname: '/**', 
        },
        {
          protocol: 'https',
          hostname: '*.ggpht.com',
          port: '',
          pathname: '/**', 
        }
      ],
    },
  };;

export default nextConfig;
