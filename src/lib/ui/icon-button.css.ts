import { css } from "hono/css";

export const iconButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-button-size, 2.25rem);
  height: var(--icon-button-size, 2.25rem);
  padding: 0;
  color: var(--text-primary);
  text-decoration: none;
  border: 0;
  border-radius: 9999px;
  background: transparent;
  line-height: 0;
  flex-shrink: 0;
  transform: scale(1);
  box-shadow: none;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgb(15 23 42 / 24%);
  }
  &:focus-visible {
    outline: 2px solid var(--accent-outline);
    outline-offset: 4px;
    border-radius: 6px;
  }
  img,
  svg {
    width: var(--icon-button-icon-size, 22px);
    height: var(--icon-button-icon-size, 22px);
    display: block;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;
