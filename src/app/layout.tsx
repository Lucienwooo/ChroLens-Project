import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/variables.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'ChroLens Project - 自動化工具系列',
    description: 'ChroLens 系列自動化工具,包含 Mimic 巨集錄製、Echo 和 Scan 等產品',
    keywords: ['ChroLens', 'Mimic', '自動化', '巨集', '錄製', 'automation'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-TW">
            <head>
                <link rel="icon" href="/ChroLens-Project/favicon.ico" />
            </head>
            <body>
                <Header />
                <main style={{ minHeight: 'calc(100vh - 200px)' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
