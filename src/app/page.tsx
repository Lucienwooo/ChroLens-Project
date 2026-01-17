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
                '圖形化流程編輯器',
            ],
            status: 'released' as const,
            link: '/mimic',
            githubLink: 'https://github.com/Lucienwooo/ChroLens-Mimic',
            icon: '🎬',
        },
        {
            title: 'ChroLens Clear',
            subtitle: '視窗自動關閉工具',
            description: '批次關閉指定視窗，支援模糊匹配、延遲執行、重複執行，多語言介面（繁中/英文/日文）。',
            features: [
                '批次關閉視窗',
                '模糊匹配視窗標題',
                '延遲執行與重複執行',
                '多語言支援',
                '拖曳式視窗選擇',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Clear',
            icon: '🧹',
        },
        {
            title: 'ChroLens Magi',
            subtitle: '瑪奇貿易計算器',
            description: '瑪奇線上遊戲的貿易利潤計算工具，支援 AI 圖片辨識、多維度分析（杜卡特/信用度/經驗值/分數）。',
            features: [
                'Gemini AI 圖片辨識',
                '多維度利潤分析',
                '完整貿易公式計算',
                '手動輸入快速模式',
                '最佳路線推薦',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Magi',
            icon: '🎴',
        },
        {
            title: 'ChroLens NorseFarmer',
            subtitle: '北歐農場遊戲工具',
            description: '專為北歐農場遊戲設計的輔助工具，提供資源計算、地圖規劃、效率分析等功能。',
            features: [
                '資源最佳配置計算',
                '農場佈局規劃',
                '效率分析工具',
                '遊戲策略建議',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens-NorseFarmer',
            icon: '🌾',
        },
        {
            title: 'ChroLens Orbit',
            subtitle: '視窗管理工具',
            description: '強大的多視窗管理工具，支援視窗自動排列、佈局儲存、多螢幕支援。',
            features: [
                '自動排列多個視窗',
                '快速定位視窗',
                '佈局儲存與載入',
                '多螢幕支援',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Orbit',
            icon: '🌌',
        },
        {
            title: 'ChroLens Portal',
            subtitle: '快速啟動工具',
            description: '提升工作效率的快速啟動工具，集中管理常用程式、檔案和網址。',
            features: [
                '快速啟動常用程式',
                '檔案管理',
                '網址收藏',
                '自訂快捷鍵',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Portal',
            icon: '🌐',
        },
        {
            title: 'ChroLens Sentinel',
            subtitle: '系統監控工具',
            description: '即時監控系統資源使用狀況，支援警報通知、歷史記錄、程序管理。',
            features: [
                'CPU/記憶體/磁碟監控',
                '超過閾值警報',
                '歷史記錄追蹤',
                '程序管理',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Sentinel',
            icon: '🛡️',
        },
        {
            title: 'ChroLens Sorting',
            subtitle: '檔案整理工具',
            description: '智能檔案整理工具，支援自動分類、批次重新命名、重複檔案清理。',
            features: [
                '依檔案類型自動分類',
                '批次重新命名',
                '重複檔案偵測',
                '日期分類整理',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Sorting',
            icon: '📊',
        },
        {
            title: 'ChroLens Sothoth',
            subtitle: '進階自動化工具',
            description: '進階自動化工具，支援複雜邏輯、狀態機、隨機化行為模擬。',
            features: [
                '複雜自動化流程',
                '隨機化行為模擬',
                '模組化元件',
                '狀態機邏輯',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Sothoth',
            icon: '🌀',
        },
        {
            title: 'ChroLens Echo',
            subtitle: '語音助手工具',
            description: '語音辨識與文字轉語音工具，支援語音控制、智能回應、快捷指令。',
            features: [
                '語音辨識',
                '文字轉語音',
                'AI 智能回應',
                '語音控制電腦',
            ],
            status: 'released' as const,
            githubLink: 'https://github.com/Lucienwooo/ChroLens_Echo',
            icon: '🔊',
        },
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
                <p className={styles.description}>
                    ChroLens 是一系列專為提升工作效率而設計的開源工具。
                    從自動化操作到系統管理，從遊戲輔助到檔案整理，
                    我們致力於為您提供最完整的效率提升解決方案。
                </p>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>11</div>
                        <div className={styles.statLabel}>個專案</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>開源</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>GPL v3</div>
                        <div className={styles.statLabel}>授權</div>
                    </div>
                </div>
            </section>

            <section className={styles.products}>
                <h2 className={styles.sectionTitle}>我們的專案</h2>
                <p className={styles.sectionDescription}>
                    探索 ChroLens 生態系統中的所有工具，找到最適合您需求的解決方案
                </p>
                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>

            <section className={styles.community}>
                <h2>加入 ChroLens 社群</h2>
                <p>與其他使用者交流經驗，獲取最新資訊和技術支援</p>
                <div className={styles.communityLinks}>
                    <a
                        href="https://discord.gg/72Kbs4WPPn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.communityButton}
                    >
                        💬 加入 Discord
                    </a>
                    <a
                        href="https://github.com/Lucienwooo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.communityButton}
                    >
                        🐙 GitHub
                    </a>
                    <a
                        href="https://ko-fi.com/B0B51FBVA8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.communityButton}
                    >
                        ☕ 支持作者
                    </a>
                </div>
            </section>

            <section className={styles.cta}>
                <h2>開始使用 ChroLens</h2>
                <p>選擇適合您的工具，立即開始提升效率之旅</p>
                <div className={styles.ctaButtons}>
                    <Link href="/mimic" className={styles.primaryButton}>
                        探索 Mimic
                    </Link>
                    <a
                        href="https://github.com/LucienWooo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}
                    >
                        查看所有專案
                    </a>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>Made with ❤️ by <a href="https://github.com/Lucienwooo" target="_blank" rel="noopener noreferrer">Lucienwooo</a></p>
                <p>© 2025 ChroLens Project. Licensed under GPL v3.</p>
            </footer>
        </div>
    );
}
