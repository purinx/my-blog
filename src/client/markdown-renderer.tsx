import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

function setupScrollSpy() {
  const tocLinks = document.querySelectorAll<HTMLAnchorElement>("#toc-nav [data-toc-link]");
  if (!tocLinks.length) return;
  const headings = Array.from(tocLinks)
    .map((a) => {
      const id = decodeURIComponent(a.getAttribute("href")!.slice(1));
      return document.getElementById(id);
    })
    .filter((el): el is HTMLElement => el !== null);
  if (!headings.length) return;

  let activeLink: HTMLAnchorElement | null = null;
  function setActive(link: HTMLAnchorElement) {
    if (activeLink) activeLink.classList.remove("is-active");
    activeLink = link;
    link.classList.add("is-active");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const link = document.querySelector<HTMLAnchorElement>(
            `#toc-nav a[href="#${entry.target.id}"]`,
          );
          if (link) setActive(link);
        }
      }
    },
    { rootMargin: "-5% 0px -80% 0px" },
  );
  headings.forEach((h) => observer.observe(h));
}

function App({ content }: { content: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const headings = Array.from(
      ref.current.querySelectorAll<HTMLElement>("h1, h2, h3, h4, h5, h6"),
    );
    if (!headings.length) return;

    const tocNavEl = document.getElementById("toc-nav");
    const tocSidebar = document.getElementById("toc-sidebar");

    if (tocNavEl) {
      tocNavEl.innerHTML = headings
        .map((h) => {
          const level = parseInt(h.tagName[1]);
          return `<li style="padding-left:${(level - 1) * 0.75}rem"><a data-toc-link href="#${h.id}">${h.textContent}</a></li>`;
        })
        .join("");
    }

    if (tocSidebar) {
      tocSidebar.removeAttribute("style");
      const wrapper = document.getElementById("post-wrapper");
      if (wrapper) {
        wrapper.style.display = "grid";
        wrapper.style.gridTemplateColumns = "1fr 260px";
        wrapper.style.gap = "3rem";
        wrapper.style.alignItems = "start";
        wrapper.style.maxWidth = "none";
      }
    }

    setupScrollSpy();
  }, []);

  return (
    <div ref={ref}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

const rawEl = document.getElementById("markdown-raw");
const contentEl = document.getElementById("post-content");

if (rawEl && contentEl) {
  const content: string = JSON.parse(rawEl.textContent ?? '""');
  const root = createRoot(contentEl);
  root.render(<App content={content} />);
}
