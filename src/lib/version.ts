// ChroLens Project 版本資訊
export const VERSION = "1.0.0";
export const PROJECT_NAME = "ChroLens Project";
export const GITHUB_REPO = "Lucienwooo/ChroLens_Project";

export async function checkForUpdates() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`
    );
    
    if (!response.ok) {
      throw new Error('無法獲取版本資訊');
    }
    
    const data = await response.json();
    const latestVersion = data.tag_name.replace('v', '');
    
    return {
      currentVersion: VERSION,
      latestVersion,
      hasUpdate: compareVersions(latestVersion, VERSION) > 0,
      releaseUrl: data.html_url,
      publishedAt: data.published_at
    };
  } catch (error) {
    console.error('檢查更新失敗:', error);
    return null;
  }
}

function compareVersions(v1: string, v2: string): number {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);
  
  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const num1 = parts1[i] || 0;
    const num2 = parts2[i] || 0;
    
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  
  return 0;
}
