import { headerLinkStyle, headerStyle, logoStyle, navStyle } from "./header.css";

type HeaderProps = {
  maxWidth: string;
};

export function Header({ maxWidth }: HeaderProps) {
  return (
    <header class={headerStyle}>
      <nav class={navStyle} style={`max-width: ${maxWidth}`}>
        <a href="/" class={headerLinkStyle} aria-label="Go to home">
          <span class={logoStyle}>Purin's Blog</span>
        </a>
      </nav>
    </header>
  );
}
