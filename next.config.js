/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.tgi5925rh9.execute-api.us-east-1.amazonaws.com/prod/search?searchString=awsome',
      },
    ]
  }
}


module.exports = nextConfig
