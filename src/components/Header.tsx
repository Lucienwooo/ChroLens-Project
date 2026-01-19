'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // 專案列表 (依字母排序)
    const projects = [
        { name: 'ChroLens Clear', path: 'https://github.com/Lucienwooo/ChroLens_Clear', type: 'github' },
        { name: 'ChroLens Echo', path: 'https://github.com/Lucienwooo/ChroLens_Echo', type: 'github' },
        { name: 'ChroLens Magi', path: 'https://github.com/Lucienwooo/ChroLens_Magi', type: 'github' },
        { name: 'ChroLens Mimic', path: '/mimic', type: 'internal' },
        { name: 'ChroLens NorseFarmer', path: 'https://github.com/Lucienwooo/ChroLens-NorseFarmer', type: 'github' },
        { name: 'ChroLens Orbit', path: 'https://github.com/Lucienwooo/ChroLens_Orbit', type: 'github' },
        { name: 'ChroLens Portal', path: 'https://github.com/Lucienwooo/ChroLens_Portal', type: 'github' },
        { name: 'ChroLens Sentinel', path: 'https://github.com/Lucienwooo/ChroLens_Sentinel', type: 'github' },
        { name: 'ChroLens Sorting', path: 'https://github.com/Lucienwooo/ChroLens_Sorting', type: 'github' },
        { name: 'ChroLens Sothoth', path: 'https://github.com/Lucienwooo/ChroLens_Sothoth', type: 'github' },
    ].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🎯</span>
                    <span className={styles.logoText}>ChroLens</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>首頁</Link>

                    <div
                        className={styles.dropdownContainer}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className={styles.navLink}>
                            工具 <span className={styles.arrow}>▾</span>
                        </button>

                        {isDropdownOpen && (
                            <div className={styles.dropdown}>
                                {projects.map((project) => (
                                    project.type === 'internal' ? (
                                        <Link
                                            key={project.name}
                                            href={project.path}
                                            className={styles.dropdownItem}
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            {project.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={project.name}
                                            href={project.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.dropdownItem}
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            {project.name} 🐙
                                        </a>
                                    )
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/#about" className={styles.navLink}>關於</Link>
                </nav>

                <ThemeToggle />
            </div>
        </header>
    );
}
