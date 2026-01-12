'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';
import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { label: '基本介紹', path: '/mimic' },
        { label: '腳本編輯器', path: '/mimic/script-editor' },
        { label: '使用教學', path: '/mimic/tutorial' },
        { label: '更新日誌', path: '/mimic/changelog' },
    ];

    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className={styles.themeToggleContainer}>
                <ThemeToggle />
            </div>
        </aside>
    );
}
