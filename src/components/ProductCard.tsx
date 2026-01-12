import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    status: 'released' | 'coming-soon';
    link?: string;
    icon: string;
}

export default function ProductCard({
    title,
    subtitle,
    description,
    features,
    status,
    link,
    icon,
}: ProductCardProps) {
    const CardContent = () => (
        <>
            <div className={styles.header}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.titleSection}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <span className={`${styles.badge} ${styles[status]}`}>
                    {status === 'released' ? '✓ Released' : '🚧 Coming Soon'}
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

            {status === 'released' && link && (
                <div className={styles.actions}>
                    <span className={styles.button}>
                        了解更多 →
                    </span>
                </div>
            )}
        </>
    );

    if (status === 'released' && link) {
        return (
            <Link href={link} className={styles.card}>
                <CardContent />
            </Link>
        );
    }

    return (
        <div className={`${styles.card} ${styles.disabled}`}>
            <CardContent />
        </div>
    );
}
