'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { versionData } from '@/data/versions';
import VideoPreview from '@/components/VideoPreview';

export default function MimicPage() {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>ChroLens Mimic</h1>
        <p className={styles.subtitle}>輕量級 Windows 巨集錄製與回放工具</p>

        <div className={styles.tabs}>
          <button
            className={activeTab === 'intro' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('intro')}
          >✨ 產品介紹</button>
          <button
            className={activeTab === 'tutorial' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('tutorial')}
          >📚 使用教學</button>
          <button
            className={activeTab === 'changelog' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('changelog')}
          >📋 更新日誌</button>
        </div>
      </div>

      {activeTab === 'intro' && (
        <section className={styles.contentSection}>
          <h2>核心功能</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>🎮 錄製與回放</h3>
              <VideoPreview youtubeId="waHPYnjPwbM" title="錄製與回放" />
              <ul>
                <li>錄製滑鼠和鍵盤操作</li>
                <li>多種回放速度設定（1x-10x）</li>
                <li>智能視窗定位</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <h3>📝 腳本編輯器</h3>
              <ul>
                <li>文字指令式編輯器</li>
                <li>圖片辨識與 OCR</li>
                <li>變數系統與邏輯跳轉</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <h3>🤖 AI 物件偵測</h3>
              <ul>
                <li>整合 YOLOv8s AI 偵測</li>
                <li>支援 80 種物件類別</li>
                <li>自動目標瞄準與點擊</li>
              </ul>
            </div>
          </div>

          <div className={styles.downloadBox}>
            <h2>立即下載</h2>
            <div className={styles.ctaButtons}>
              <a href="https://github.com/Lucienwooo/ChroLens-Mimic/releases" className={styles.primaryButton}>📥 GitHub 下載最新版</a>
              <a href="https://discord.gg/72Kbs4WPPn" className={styles.secondaryButton}>💬 加入 Discord</a>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'tutorial' && (
        <section className={styles.contentSection}>
          <h2>快速上手指南</h2>
          <div className={styles.stepList}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div>
                <h3>下載與執行</h3>
                <p>解壓縮檔案後，以管理員身份執行 <code>ChroLens_Mimic.exe</code>。</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div>
                <h3>錄製動作</h3>
                <p>按下 <kbd>F10</kbd> 開始錄製你的滑鼠與鍵盤動作，完成後按 <kbd>F9</kbd> 停止。</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div>
                <h3>執行腳本</h3>
                <p>按下 <kbd>F12</kbd> 即可重播剛才錄製的動作。</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'changelog' && (
        <section className={styles.contentSection}>
          <h2>更新日誌</h2>
          <div className={styles.versionList}>
            {versionData.slice(0, 5).map(v => (
              <div key={v.version} className={styles.versionItem}>
                <h3>📦 {v.version} <small>({v.date})</small></h3>
                <ul>
                  {v.changes.map((change, i) => (
                    <li key={i}>{change.replace('__', '：')}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
