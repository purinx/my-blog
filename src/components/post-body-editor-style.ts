import { css } from "hono/css";

export const headerRowStyle = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
`;

export const saveRowStyle = css`
  margin-bottom: 1rem;
`;

export const titleInputStyle = css`
  border: 0;
  background: transparent;
  color: #333;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  padding: 0;
  margin: 0;
  width: min(100%, 920px);
  min-width: 0;
  &:focus {
    outline: 2px solid #93c5fd;
    outline-offset: 6px;
    border-radius: 6px;
  }
  &[readonly] {
    cursor: text;
  }
`;

export const titleEditButtonStyle = css`
  border: 1px solid #d0d7de;
  background: #fff;
  color: #111827;
  border-radius: 9999px;
  padding: 0.5rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
`;

export const headingGroupStyle = css`
  display: grid;
  gap: 0.75rem;
  min-width: 0;
`;

export const backButtonStyle = css`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d0d7de;
  border-radius: 9999px;
  color: #111827;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  flex-shrink: 0;
  img {
    width: 15px;
    height: 15px;
    display: block;
  }
`;

export const formStyle = css`
  display: grid;
  gap: 0.75rem;
`;

export const labelStyle = css`
  font-weight: 600;
`;

export const textareaStyle = css`
  width: 100%;
  min-height: 60vh;
  padding: 0.75rem;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  font-family:
    ui-monospace,
    SFMono-Regular,
    SF Mono,
    Menlo,
    monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  tab-size: 4;
`;

export const submitBaseStyle = css`
  width: fit-content;
  border: 0;
  border-radius: 9999px;
  padding: 0.7rem 1.25rem;
  background: #111827;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.18s ease;
  &[data-state="saving"] {
    background: #334155;
    cursor: wait;
  }
  &[data-state="saved"] {
    background: #16a34a;
  }
`;
