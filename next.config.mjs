/** @type {import('next').NextConfig} */
const repoName = "2ms_nextjs";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	basePath: isProd ? `/${repoName}` : "",
	assetPrefix: isProd ? `/${repoName}` : "",
};

export default nextConfig;
