'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
    const products = [
        {
            title: 'ChroLens Mimic',
            subtitle: 'Windows 自動化工具',
            description: '強大的 Windows 自動化工具，支援錄製滑鼠/鍵盤操作、圖片辨識、AI 物件偵測、OCR 文字辨識等功能。',
            features: [
                '一鍵錄製滑鼠/鍵盤操作',
                '圖片辨識與 YOLO AI 偵測',
                'OCR 文字辨識',
                '觸發器系統（定時、條件、優先）',
                '變數系統與狀態機',
            ],
            status: 'released' as const,
            link: '/mimic',
            githubLink: 'https://github.com/Lucienwooo/ChroLens-Mimic',
            icon: '🎬',
        },
        {
            title: 'ChroLens Clear',
            subtitle: '視窗自動關閉工具',
            description: '批次關閉指定視窗，支援模糊匹配、延遲執行、重複執行。',
            features: [
                '批次關閉視窗',
                '模糊匹配視窗標題',
                '多語言支援',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Clear',
            icon: '🧹',
        },
        {
            title: 'ChroLens Magi',
            subtitle: '瑪奇貿易計算器',
            description: '瑪奇線上遊戲的貿易利潤計算工具，支援 AI 圖片辨識。',
            features: [
                'Gemini AI 圖片辨識',
                '多維度利潤分析',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Magi',
            icon: '🎴',
        },
        {
            title: 'ChroLens Sothoth',
            subtitle: '進階自動化工具',
            description: '支援複雜邏輯、狀態機、隨機化行為模擬。',
            features: [
                '複雜自動化流程',
                '隨機化行為模擬',
                '狀態機邏輯',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Sothoth',
            icon: '🌀',
        }
    ];

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>
                    <span className={styles.gradient}>ChroLens</span> 專案生態系統
                </h1>
                <p className={styles.subtitle}>
                    讓重複性工作變得簡單的自動化工具系列
                </p>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>10</div>
                        <div className={styles.statLabel}>個專案</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>開源</div>
                    </div>
                </div>
            </section>

            <section className={styles.products}>
                <h2 className={styles.sectionTitle}>我們的專案</h2>
                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            <section className={styles.cta}>
                <h2>開始使用 ChroLens</h2>
                <div className={styles.ctaButtons}>
                    <Link href="/mimic" className={styles.primaryButton}>
                        探索 Mimic
                    </Link>
                    <a href="https://github.com/Lucienwooo" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                        查看 GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}
