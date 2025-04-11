import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'PESU EC Campus IEEE Conference 2025',
	description: 'PES University EC Campus IEEE Conference 2025',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className + ' antialiased'}>{children}</body>
		</html>
	);
}
