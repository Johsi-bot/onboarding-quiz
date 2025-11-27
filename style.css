/* 全域設定：字型、排版、基底背景 */
* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Noto Sans TC", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background:
    radial-gradient(circle at top left, #fed7aa 0, transparent 50%),
    radial-gradient(circle at bottom right, #fecaca 0, transparent 55%),
    #fff7ed;
}

/* 最外層卡片容器 */
.app {
  width: 100%;
  max-width: 720px;
  padding: 32px 28px 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.15);
  border: 1px solid rgba(248, 250, 252, 0.9);
}

/* 標題區域 */
h1 {
  margin: 0;
  text-align: center;
  font-size: 28px;
  letter-spacing: 0.06em;
  font-weight: 800;
  background: linear-gradient(135deg, #ea580c, #f97316, #f59e0b);
  -webkit-background-clip: text;
  color: transparent;
}

/* 開場說明文字 */
#description {
  margin: 10px auto 20px;
  max-width: 540px;
  text-align: center;
  font-size: 15px;
  line-height: 1.7;
  color: #6b7280;
}

/* 區塊共用設定 */
#start-screen,
#quiz-screen,
#end-screen {
  margin-top: 12px;
}

/* 隱藏用的 class */
.hidden {
  display: none;
}

/* 開始畫面 */
#start-screen p {
  text-align: center;
  margin-bottom: 16px;
  color: #4b5563;
}

/* 問題區塊 */
#question-container {
  padding: 16px 18px;
  border-radius: 18px;
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  border: 1px solid #fed7aa;
}

#question {
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  color: #43302a;
}

/* 答案按鈕區 */
.btn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 18px 0 10px;
}

@media (max-width: 640px) {
  .btn-grid {
    grid-template-columns: 1fr;
  }
}

/* 按鈕樣式（共用） */
button {
  border: none;
  cursor: pointer;
  border-radius: 999px;
  padding: 11px 18px;
  font-size: 15px;
  font-weight: 600;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease,
    background 0.15s ease,
    color 0.15s ease;
}

/* 主要行動按鈕：開始 / 再玩一次 / 下一題 */
#start-btn,
#restart-btn,
#next-btn {
  width: 100%;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff7ed;
  box-shadow: 0 10px 22px rgba(234, 88, 12, 0.35);
}

#start-btn:hover,
#restart-btn:hover,
#next-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(234, 88, 12, 0.42);
}

/* 選項按鈕 */
.answer-btn {
  border-radius: 16px;
  background: #f9fafb;
  color: #374151;
  text-align: left;
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
}

.answer-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
  background: #fff7ed;
}

/* 答對 / 答錯狀態 */
.answer-btn.correct {
  background: #bbf7d0;
  border-color: #22c55e;
  color: #14532d;
}

.answer-btn.wrong {
  background: #fee2e2;
  border-color: #ef4444;
  color: #7f1d1d;
}

.answer-btn:disabled {
  cursor: default;
}

/* 底部資訊列：題號 + 分數 + 下一題 */
#bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 6px;
}

#question-number,
#score {
  font-size: 13px;
  color: #6b7280;
  padding: 5px 10px;
  border-radius: 999px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
}

/* 結束畫面 */
#end-screen h2 {
  margin-top: 4px;
  text-align: center;
  font-size: 22px;
  color: #ea580c;
}

#final-score {
  text-align: center;
  margin: 8px 0 18px;
  font-size: 15px;
  color: #4b5563;
}

/* 小螢幕優化 */
@media (max-width: 480px) {
  .app {
    margin: 16px;
    padding: 22px 18px 20px;
  }

  h1 {
    font-size: 22px;
  }

  #description {
    font-size: 14px;
  }

  #question {
    font-size: 16px;
  }
}

