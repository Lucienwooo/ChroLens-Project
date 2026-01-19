'use client';

import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    status: 'released' | 'coming-soon';
    link?: string;
    githubLink?: string;
    icon: string;
}

const CardContent = ({ title, subtitle, description, features, icon, status, link, githubLink }: ProductCardProps) => (
    <>
        <div className={styles.header}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.titleSection}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <span className={`${styles.badge} ${styles[status]}`}>
                {status === 'released' ? '✓ 已發布' : '🚧 開發中'}
            </span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.features}>
            <h4>主要功能</h4>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>

        {status === 'released' && (
            <div className={styles.actions}>
                {link && (
                    <Link href={link} className={styles.button}>
                        了解更多 →
                    </Link>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubButton}
                        onClick={(e) => e.stopPropagation()}
                    >
                        🐙 GitHub
                    </a>
                )}
            </div>
        )}
    </>
);

export default function ProductCard(props: ProductCardProps) {
    const { status } = props;

    return (
        <div className={`${styles.card} ${status === 'coming-soon' ? styles.disabled : ''}`}>
            <CardContent {...props} />
        </div>
    );
}
