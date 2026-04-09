import { css } from "hono/css";

type HeaderProps = {
  maxWidth: string;
};

export function Header({ maxWidth }: HeaderProps) {
  const headerStyle = css`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem 0;
  `;
  const navStyle = css`
    max-width: ${maxWidth};
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const logoStyle = css`
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
  `;

  return (
    <header class={headerStyle}>
      <nav class={navStyle}>
        <a href="/" class={logoStyle}>
          My Blog
        </a>
      </nav>
    </header>
  );
}
