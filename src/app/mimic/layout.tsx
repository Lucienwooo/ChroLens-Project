'use client';

import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import './globals.css';
import styles from './layout.module.css';

export default function MimicLayout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
