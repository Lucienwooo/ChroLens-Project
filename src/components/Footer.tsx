import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>ChroLens Project</h3>
                    <p>自動化工具系列,讓重複性工作變得簡單</p>
                </div>

                <div className={styles.section}>
                    <h4>產品</h4>
                    <ul>
                        <li><a href="/mimic">ChroLens Mimic</a></li>
                        <li><span className={styles.disabled}>ChroLens Echo (Soon)</span></li>
                        <li><span className={styles.disabled}>ChroLens Scan (Soon)</span></li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>資源</h4>
                    <ul>
                        <li><a href="https://github.com/LucienWooo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://discord.gg/72Kbs4WPPn" target="_blank" rel="noopener noreferrer">Discord</a></li>
                        <li><a href="https://ko-fi.com/B0B51FBVA8" target="_blank" rel="noopener noreferrer">Support</a></li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>聯絡</h4>
                    <ul>
                        <li><a href="https://home.gamer.com.tw/artwork.php?sn=6150515" target="_blank" rel="noopener noreferrer">巴哈姆特</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {currentYear} ChroLens Project. Made with ❤️ by LucienWooo</p>
            </div>
        </footer>
    );
}
