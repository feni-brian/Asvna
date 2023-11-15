import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Asvna",
	description: "Asvna is the easiest way to manage team projects and your individual tasks",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: dark)",
				url: "/images/logo/favicon-dark.svg",
				href: "/images/logo/favicon-dark.svg",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "/images/logo/favicon.svg",
				href: "/images/logo/favicon.svg",
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
