/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		domains: [
			'via.placeholder.com',
			'pes.edu',
			'storage.googleapis.com',
			'placehold.co',
		],
	},
};

export default nextConfig;
