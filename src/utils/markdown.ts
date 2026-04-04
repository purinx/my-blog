import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface MarkdownResult {
  html: string;
  toc: TocItem[];
}

function extractText(node: unknown): string {
  const n = node as Record<string, unknown>;
  if (n.type === "text") return String(n.value ?? "");
  const children = n.children as unknown[] | undefined;
  if (!children) return "";
  return children.map(extractText).join("");
}

function tocExtractor(toc: TocItem[]) {
  return () => (tree: unknown) => {
    visit(tree as never, "element", (node: Record<string, unknown>) => {
      const tag = node.tagName as string;
      if (!/^h[1-6]$/.test(tag)) return;
      const level = Number(tag[1]);
      const props = node.properties as Record<string, unknown> | undefined;
      const id = (props?.id as string) ?? "";
      const text = extractText(node);
      toc.push({ id, text, level });
    });
  };
}

export async function renderMarkdown(content: string): Promise<MarkdownResult> {
  const toc: TocItem[] = [];

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(tocExtractor(toc))
    .use(rehypeStringify)
    .process(content);

  return { html: String(file), toc };
}
