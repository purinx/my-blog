import { css } from "hono/css";

export function TocSidebar() {
  const sidebarStyle = css`
    position: sticky;
    top: 2rem;
    @media (max-width: 900px) {
      position: static;
      order: -1;
    }
  `;

  const tocCardStyle = css`
    border: 1px solid var(--border-default);
    border-radius: 10px;
    padding: 1.25rem;
    background: var(--bg-surface);
  `;

  const tocTitleStyle = css`
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.875rem;
  `;

  const tocNavStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  return (
    <aside id="toc-sidebar" class={sidebarStyle} style="display:none">
      <div class={tocCardStyle}>
        <p class={tocTitleStyle}>目次</p>
        <ol id="toc-nav" class={tocNavStyle} />
      </div>
    </aside>
  );
}
