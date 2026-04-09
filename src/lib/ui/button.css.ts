import { css } from "hono/css";

/** 保存・送信などのプライマリアクションボタン */
export const submitButtonStyle = css`
  width: max-content;
  min-width: 6rem;
  border: 0;
  border-radius: 9999px;
  padding: 0.7rem 1.25rem;
  background: linear-gradient(135deg, var(--header-grad-start) 0%, var(--header-grad-end) 100%);
  color: var(--header-text);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s ease;
  &:hover {
    color: var(--header-text);
    background: linear-gradient(135deg, var(--hover-grad-start) 0%, var(--hover-grad-end) 100%);
  }
  [data-role="submit-content"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }
  [data-role="submit-icon"] {
    width: 15px;
    height: 15px;
    display: none;
    align-items: center;
    justify-content: center;
  }
  &[data-state="saved"] [data-role="submit-icon"] {
    display: inline-flex;
  }
  &[data-state="saving"] {
    background: var(--button-saving);
    cursor: wait;
  }
`;

/** ヘッダーやページ内に置くピル型のリンクボタン */
export const linkButtonPillStyle = css`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: var(--header-text);
  background: var(--accent-strong);
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover {
    color: var(--header-text);
    background: linear-gradient(135deg, var(--hover-grad-start) 0%, var(--hover-grad-end) 100%);
  }
`;

/** サイドバーに置くブロック型のリンクボタン */
export const linkButtonBlockStyle = css`
  display: block;
  width: 100%;
  text-decoration: none;
  color: var(--header-text);
  background: var(--accent-strong);
  border-radius: 8px;
  padding: 0.45rem 0.6rem;
  border: 1px solid transparent;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--header-text);
    background: linear-gradient(135deg, var(--hover-grad-start) 0%, var(--hover-grad-end) 100%);
  }
`;
