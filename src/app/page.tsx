import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
    const products = [
        {
            title: 'ChroLens Mimic',
            subtitle: '巨集錄製與播放工具',
            description: '強大的 Windows 自動化工具,支援錄製滑鼠/鍵盤操作、圖片辨識、AI 物件偵測、OCR 文字辨識等功能。',
            features: [
                '一鍵錄製滑鼠/鍵盤操作',
                '圖片辨識與 YOLO AI 偵測',
                'OCR 文字辨識',
                '觸發器系統(定時、條件、優先)',
                '變數系統與狀態機',
                '圖形化流程編輯器',
            ],
            status: 'released' as const,
            link: '/mimic',
            icon: '🎬',
        },
        {
            title: 'ChroLens Echo',
            subtitle: '智能回應系統',
            description: '即將推出的智能回應工具,讓您的自動化更加智能。',
            features: [
                '智能對話回應',
                '多平台支援',
                '自訂回應規則',
                '學習模式',
            ],
            status: 'coming-soon' as const,
            icon: '🔊',
        },
        {
            title: 'ChroLens Scan',
            subtitle: '螢幕監控工具',
            description: '即將推出的螢幕監控與分析工具。',
            features: [
                '即時螢幕監控',
                '自動截圖',
                '變化偵測',
                '報表生成',
            ],
            status: 'coming-soon' as const,
            icon: '📊',
        },
    ];

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>
                    <span className={styles.gradient}>ChroLens</span> 系列
                </h1>
                <p className={styles.subtitle}>
                    讓重複性工作變得簡單的自動化工具系列
                </p>
                <p className={styles.description}>
                    ChroLens 是一系列專為提升工作效率而設計的自動化工具。
                    從巨集錄製到智能回應,從螢幕監控到數據分析,
                    我們致力於為您提供最完整的自動化解決方案。
                </p>
            </section>

            <section className={styles.products}>
                <h2 className={styles.sectionTitle}>我們的產品</h2>
                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            <section className={styles.cta}>
                <h2>開始使用 ChroLens</h2>
                <p>選擇適合您的工具,立即開始自動化之旅</p>
                <div className={styles.ctaButtons}>
                    <a href="/mimic" className={styles.primaryButton}>
                        探索 Mimic
                    </a>
                    <a
                        href="https://github.com/LucienWooo/ChroLens_Mimic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}
                    >
                        查看 GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}
