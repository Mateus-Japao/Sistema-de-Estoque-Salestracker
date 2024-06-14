/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"i.ibb.co"
            },

            {
                protocol:"https",
                hostname:"images.pexels.com"
            },
            {
                protocol:"https",
                hostname:"salestracker1.s3.us-east-2.amazonaws.com"
            },
            ]
        
    }
}

module.exports = nextConfig
