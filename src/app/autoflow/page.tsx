'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { autoflowVersionData } from '@/data/autoflow-versions';

export default function AutoFlowPage() {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>ChroLens AutoFlow</h1>
        <p className={styles.subtitle}>智能影片自動分類與管理工具</p>

        <div className={styles.tabs}>
          <button
            className={activeTab === 'intro' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('intro')}
          >🌸 產品介紹</button>
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
              <h3>🤖 AI 自動分類</h3>
              <ul>
                <li>自動辨識影片編號與姓名</li>
                <li>串接 av-wiki 資料庫精準分類</li>
                <li>自定義分類路徑與邏輯</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <h3>👁️ 滑鼠懸停預覽</h3>
              <ul>
                <li>清單項目懸停即時動態預覽</li>
                <li>高效 OpenCV 縮圖生成技術</li>
                <li>獨立內置簡易播放器</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <h3>📺 九宮格多窗播放</h3>
              <ul>
                <li>支援同步開啟 9 組播放視窗</li>
                <li>拖拽式交互載入影片</li>
                <li>延遲加載 (Lazy Loading) 效能優化</li>
              </ul>
            </div>
          </div>

          <div className={styles.downloadBox}>
            <h2>立即下載</h2>
            <p>本專案目前為內部測試階段，不對外公開下載。</p>
            <div className={styles.ctaButtons}>
              <a href="#" className={styles.primaryButton} onClick={(e) => e.preventDefault()}>📥 GitHub (未開放)</a>
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
                <h3>選取影片目錄</h3>
                <p>點擊左側「瀏覽」按鈕，選擇包含影片檔案的資料夾。程式會自動記憶路徑，下次開啟無需重複選取。</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div>
                <h3>開始自動整理</h3>
                <p>點擊「開始」按鈕，AutoFlow 將自動分析影片並移動至對應的女優資料夾中。</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div>
                <h3>多窗同步瀏覽</h3>
                <p>開啟「多窗瀏覽」，將左側清單的影片直接拖入視窗格子中即可載入。右鍵點擊視窗可清除內容。</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'changelog' && (
        <section className={styles.contentSection}>
          <h2>更新日誌</h2>
          <div className={styles.versionList}>
            {autoflowVersionData.map(v => (
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
