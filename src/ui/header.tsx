import { css } from "hono/css";

type HeaderProps = {
  maxWidth: string;
};

export function Header({ maxWidth }: HeaderProps) {
  const headerStyle = css`
    background: linear-gradient(135deg, var(--header-grad-start) 0%, var(--header-grad-end) 100%);
    color: var(--header-text);
    height: 72px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--header-border);
  `;
  const navStyle = css`
    width: 100%;
    max-width: ${maxWidth};
    margin: 0;
    padding: 0 0 0 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;
  const logoStyle = css`
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--header-text);
  `;

  return (
    <header class={headerStyle}>
      <nav class={navStyle}>
        <a href="/" class={logoStyle}>
          Purin's Blog
        </a>
      </nav>
    </header>
  );
}
