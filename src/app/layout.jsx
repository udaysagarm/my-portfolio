import './globals.css';
import { Syne, JetBrains_Mono } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import AzureAnalytics from '../components/AzureAnalytics';

const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
    title: 'Uday Meka - Portfolio',
    description: 'Portfolio of Uday Meka, a Master\'s in Computer Science student specializing in AI and Agentic Design.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${syne.variable} ${mono.variable} font-sans bg-[var(--background)] text-white`}>
                <AzureAnalytics />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
