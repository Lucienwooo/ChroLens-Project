# ChroLens Project

<div align="center">

![ChroLens Logo](./public/images/logo.png)

**🎯 ChroLens 系列自動化工具統一入口**

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=flat-square)](https://lucienwooo.github.io/ChroLens-Project/)
[![License](https://img.shields.io/github/license/LucienWooo/ChroLens-Project?style=flat-square)](./LICENSE)

[🌐 訪問網站](https://lucienwooo.github.io/ChroLens-Project/) | [📖 文檔](https://lucienwooo.github.io/ChroLens-Project/mimic/) | [💬 Discord](https://discord.gg/72Kbs4WPPn)

</div>

---

## 📚 關於 ChroLens

ChroLens 是一系列專為提升工作效率而設計的自動化工具。從巨集錄製到智能回應,從螢幕監控到數據分析,我們致力於為您提供最完整的自動化解決方案。

### 🎯 產品系列

#### ✅ ChroLens Mimic - 已發布
強大的 Windows 自動化工具,支援:
- 🎬 一鍵錄製滑鼠/鍵盤操作
- 🖼️ 圖片辨識與 YOLO AI 偵測
- 📝 OCR 文字辨識
- ⚡ 觸發器系統(定時、條件、優先)
- 🔢 變數系統與狀態機
- 🎨 圖形化流程編輯器

[📖 查看文檔](https://lucienwooo.github.io/ChroLens-Project/mimic/) | [💾 下載](https://github.com/LucienWooo/ChroLens_Mimic/releases)

#### 🚧 ChroLens Echo - 即將推出
智能回應系統,讓您的自動化更加智能

#### 🚧 ChroLens Scan - 即將推出
螢幕監控與分析工具

---

## 🚀 本地開發

### 前置需求
- Node.js 18+ 
- npm 或 yarn

### 安裝與執行

```bash
# 1. Clone 專案
git clone https://github.com/LucienWooo/ChroLens-Project.git
cd ChroLens-Project

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev

# 4. 在瀏覽器開啟
# http://localhost:3000/ChroLens-Project/
```

### 建置與部署

```bash
# 建置靜態檔案
npm run build

# 預覽建置結果
npx serve out
```

---

## 📁 專案結構

```
ChroLens_Project/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 根佈局
│   │   ├── page.tsx            # 首頁
│   │   └── mimic/              # Mimic 子應用
│   ├── components/             # React 組件
│   │   ├── Header.tsx          # 導航欄
│   │   ├── Footer.tsx          # 頁尾
│   │   ├── ProductCard.tsx     # 產品卡片
│   │   └── ThemeToggle.tsx     # 主題切換
│   └── styles/                 # 樣式檔案
│       ├── globals.css
│       └── variables.css
├── public/                     # 靜態資源
│   └── images/
├── next.config.js              # Next.js 配置
├── tsconfig.json              # TypeScript 配置
└── package.json               # 專案依賴
```

---

## 🛠️ 技術棧

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages (Static Export)
- **Theme**: Light/Dark mode with localStorage

---

## 🤝 貢獻

歡迎貢獻! 請遵循以下步驟:

1. Fork 本專案
2. 建立你的分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

---

## 📞 聯絡與支援

- 💬 **Discord**: [加入 ChroLens Discord](https://discord.gg/72Kbs4WPPn)
- 🐛 **回報問題**: [GitHub Issues](https://github.com/LucienWooo/ChroLens-Project/issues)
- 🌐 **官方網站**: [ChroLens Project](https://lucienwooo.github.io/ChroLens-Project/)
- 💰 **支持作者**: [Ko-fi](https://ko-fi.com/B0B51FBVA8)

---

## 📜 授權

本專案採用 MIT License 授權 - 詳見 [LICENSE](LICENSE) 檔案

---

<div align="center">

**⭐ 如果這個專案對你有幫助,請給個 Star! ⭐**

Made with ❤️ by [LucienWooo](https://github.com/LucienWooo)

</div>
