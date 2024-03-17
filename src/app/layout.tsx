import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.css'

const notoSans = Noto_Sans({
	subsets: ['latin', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: 'normal',
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Best One for planning',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={notoSans.className}>{children}</body>
		</html>
	)
}
