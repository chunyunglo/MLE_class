# 最大概似估計 (MLE) 互動式視覺化工具

## 專案簡介

這個專案提供了一個直觀且互動式的網頁介面，旨在幫助學習者和資料科學家 **視覺化理解最大概似估計 (Maximum Likelihood Estimation, MLE)** 的核心概念。

透過即時調整參數和觀察值，使用者可以親身體驗概似函數 (Likelihood Function) 如何隨著資料和假設的變化而起伏，進而掌握 MLE 的數學直覺。

## 主要功能特色

  * **📈 二項分配概似函數動態顯示：**
    即時繪製二項分配 $\text{Binomial}(n, p)$ 的概似函數 $L(p|\text{data})$。
  * **🖱️ 參數與觀察值互動調整：**
      * **成功次數 ($k$) 與試驗次數 ($n$)：** 透過滑桿或輸入框，即時調整觀察到的數據。
      * **概似參數 ($p$)：** 觀察當 $p$ 值變化時，資料發生的可能性（即概似值）如何改變。
  * **🔍 最大概似估計值 ($p_{MLE}$) 標示：**
    圖表會自動標示出概似函數的最高點，直觀顯示當前觀察數據下的 $\text{MLE}$ 估計值 $p_{MLE}$。
  * **🧠 建立數學直覺：** 透過視覺化的方式，讓使用者深刻理解為何最大概似估計是尋找「最可能產生當前觀測數據」的參數值。

## 線上預覽

點擊下方連結，立即體驗互動式工具：

**[前往網站預覽 (GitHub Pages 部署)](https://www.google.com/search?q=https://chunyunglo.github.io/MLE_class)**

## 本地開發與部署指南

如果您想在本地運行或修改此專案：

### 1\. 取得專案

```bash
# 複製儲存庫
git clone https://github.com/chunyunglo/MLE_class.git
cd MLE_class
```

### 2\. 安裝依賴套件

```bash
npm install
# 或使用 yarn
# yarn install
```

### 3\. 本地啟動

專案將在 `http://localhost:5173` 運行。

```bash
npm run dev
```

### 4\. 部署至 GitHub Pages

此專案已配置使用 `gh-pages` 套件進行自動化部署：

```bash
# 確保您已經在主分支提交了所有程式碼
npm run deploy 
```
