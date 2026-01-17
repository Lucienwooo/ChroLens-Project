# ChroLens_Project 版本管理整合指南

## 已完成的步驟

✅ 1. 已複製 LICENSE 檔案

## Web 專案版本管理

對於 Web 專案，建議使用以下方式管理版本：

### 1. 在 HTML 中添加版本資訊

```html
<meta name="version" content="1.0.0">
```

### 2. 在頁面中顯示版本號

```html
<footer>
    <p>ChroLens_Project v1.0.0</p>
    <p>© 2025 Lucienwooo</p>
</footer>
```

### 3. 使用 JavaScript 檢查更新

```javascript
const CURRENT_VERSION = "1.0.0";
const GITHUB_REPO = "Lucienwooo/ChroLens_Project";

async function checkForUpdates() {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`
        );
        const data = await response.json();
        const latestVersion = data.tag_name.replace('v', '');
        
        if (latestVersion > CURRENT_VERSION) {
            alert(`發現新版本: ${latestVersion}\n當前版本: ${CURRENT_VERSION}`);
        }
    } catch (error) {
        console.error('檢查更新失敗:', error);
    }
}
```

## GitHub Pages 部署

確保專案已設定 GitHub Pages：
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
