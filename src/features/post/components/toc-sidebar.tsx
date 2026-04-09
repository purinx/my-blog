import { sidebarStyle, tocCardStyle, tocNavStyle, tocTitleStyle } from "./toc-sidebar.css";

export function TocSidebar() {
  return (
    <aside id="toc-sidebar" class={sidebarStyle} style="display:none">
      <div class={tocCardStyle}>
        <p class={tocTitleStyle}>目次</p>
        <ol id="toc-nav" class={tocNavStyle} />
      </div>
    </aside>
  );
}
