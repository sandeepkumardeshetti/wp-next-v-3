/** @type {import('next').NextConfig} */
const nextConfig = {
    env: { NEXT_PUBLIC_API_URL: "http://localhost/wpicms/graphql"},
    images : {
        
        remotePatterns :[
            {
                protocol :"http",
                hostname : "localhost"
            }
        ]
    }
};

export default nextConfig;
