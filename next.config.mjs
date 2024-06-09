/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'game.42sp.org.br',
				port: '',
				pathname: '/static/assets/achievements/**',
			},
		],
	},

};



export default nextConfig;
