# 最大概似估計視覺化工具

一個互動式網頁應用，用於探索和理解二項分配的最大概似估計（MLE）。

## 在本機運行

1.  **安裝依賴**
    ```bash
    npm install
    ```

2.  **啟動開發伺服器**
    ```bash
    npm run dev
    ```

## 部署到 GitHub Pages

1.  **修改設定**
    - 在 `package.json` 中，將 `homepage` 的 URL 修改為你的 GitHub Pages URL。
    - 在 `vite.config.ts` 中，將 `base` 的值修改為你的 repository 名稱。

2.  **執行部署命令**
    ```bash
    npm run deploy
    ```
