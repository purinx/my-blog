import { css } from "hono/css";

export const editorShellStyle = css`
  --editor-sidebar-width: 360px;
  --editor-gap: 1rem;
  --editor-content-width: 1000px;
  position: relative;
  margin-left: -1rem;
  margin-top: -2rem;
  margin-bottom: -2rem;
  width: calc(100% + 2rem);
  min-height: calc(100vh - 72px);
  @media (max-width: 900px) {
    --editor-sidebar-width: 0px;
    margin-left: 0;
    margin-top: -2rem;
    margin-bottom: -2rem;
    width: 100%;
  }
`;

export const sidebarStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--editor-sidebar-width);
  overflow-y: auto;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border-default);
  padding: 0.75rem 0.75rem 1rem 1rem;
  z-index: 5;
  @media (max-width: 900px) {
    position: static;
    width: auto;
    border-bottom: 1px solid var(--border-default);
    border-right: 0;
    padding: 0 0 0.75rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.5rem;
    max-height: none;
  }
`;

export const editorContentFrameStyle = css`
  margin-left: calc(var(--editor-sidebar-width) + var(--editor-gap));
  width: calc(100% - var(--editor-sidebar-width) - var(--editor-gap));
  @media (max-width: 900px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const editorContentStyle = css`
  width: min(100%, var(--editor-content-width));
  margin: 0 auto;
`;

export const sidebarNavStyle = css`
  margin-top: 1.75rem;
`;

export const tabListStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
`;

export const tabLinkStyle = css`
  display: block;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  text-decoration: none;
  color: var(--text-primary);
  border-radius: 8px;
  padding: 0.45rem 0.6rem;
  border: 1px solid transparent;
  &[data-active="true"] {
    background: var(--accent-soft);
    border-color: var(--accent-border);
    font-weight: 600;
    border-radius: 0;
  }
  &:hover {
    background: var(--bg-surface-soft);
    border-radius: 0;
  }
`;

export const tabTitleStyle = css`
  display: block;
  max-width: 100%;
  font-size: 0.9rem;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const headerRowStyle = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 40px;
  margin-bottom: 0.85rem;
`;

export const saveRowStyle = css`
  position: fixed;
  left: calc(
    50vw + (var(--editor-sidebar-width) + var(--editor-gap) + var(--editor-content-width)) / 2
  );
  bottom: 50px;
  transform: translateX(-100%);
  z-index: 20;
  @media (max-width: 1400px) {
    left: auto;
    right: 1rem;
    transform: none;
  }
  @media (max-width: 640px) {
    left: auto;
    right: 0.75rem;
    bottom: 0.75rem;
    transform: none;
  }
`;

export const titleInputStyle = css`
  display: block;
  border: 0;
  background: transparent;
  color: var(--text-primary);
  font-family:
    -apple-system,
    "Hiragino Sans",
    "Hiragino Kaku Gothic ProN",
    "Yu Gothic",
    "YuGothic",
    sans-serif;
  font-size: clamp(1.35rem, 2.3vw, 2.1rem);
  font-weight: 700;
  line-height: 1.3;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 0;
  resize: none;
  overflow: hidden;
  overflow-wrap: anywhere;
  word-break: break-word;
  white-space: pre-wrap;
  &:focus {
    outline: 2px solid var(--accent-outline);
    outline-offset: 6px;
    border-radius: 6px;
  }
  &[readonly] {
    cursor: text;
  }
`;

export const headingGroupStyle = css`
  display: block;
  flex: 1 1 auto;
  min-width: 0;
`;

export const backButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0;
  background: transparent;
  line-height: 0;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.15rem;
  img {
    width: 32px;
    height: 32px;
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
  border: 1px solid var(--border-default);
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
  background: linear-gradient(135deg, var(--header-grad-start) 0%, var(--header-grad-end) 100%);
  color: var(--header-text);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.18s ease;
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
