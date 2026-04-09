export const designTokens = {
  color: {
    bgPage: "#e6e7ea",
    bgSurface: "#eef0f3",
    bgSurfaceSoft: "#f3f4f6",
    bgSidebar: "#ffffff",
    borderDefault: "#c9cfd8",
    borderStrong: "#aeb8c6",
    textPrimary: "#0f172a",
    textSecondary: "#253047",
    textMuted: "#4b5a74",
    link: "#4e6187",
    linkHover: "#3c4e70",
    headerGradStart: "#6f7f98",
    headerGradEnd: "#62728b",
    headerText: "#f8fafc",
    accentSoft: "#dfe5f0",
    accentBorder: "#b9c5d9",
    accentStrong: "#6078a3",
    accentOutline: "#8fa2bf",
    buttonSaving: "#55657f",
    codeInlineBg: "#d9dde5",
    codeBlockBg: "#2e3340",
    codeBlockText: "#d7deeb",
    quoteBg: "#e3e8f0",
    shadowSoft: "rgba(32, 41, 56, 0.08)",
    shadowHeaderBorder: "rgba(255, 255, 255, 0.18)",
  },
} as const;

export const rootCssVariables = `
  :root {
    --bg-page: ${designTokens.color.bgPage};
    --bg-surface: ${designTokens.color.bgSurface};
    --bg-surface-soft: ${designTokens.color.bgSurfaceSoft};
    --bg-sidebar: ${designTokens.color.bgSidebar};
    --border-default: ${designTokens.color.borderDefault};
    --border-strong: ${designTokens.color.borderStrong};
    --text-primary: ${designTokens.color.textPrimary};
    --text-secondary: ${designTokens.color.textSecondary};
    --text-muted: ${designTokens.color.textMuted};
    --link-color: ${designTokens.color.link};
    --link-hover: ${designTokens.color.linkHover};
    --header-grad-start: ${designTokens.color.headerGradStart};
    --header-grad-end: ${designTokens.color.headerGradEnd};
    --header-text: ${designTokens.color.headerText};
    --header-border: ${designTokens.color.shadowHeaderBorder};
    --accent-soft: ${designTokens.color.accentSoft};
    --accent-border: ${designTokens.color.accentBorder};
    --accent-strong: ${designTokens.color.accentStrong};
    --accent-outline: ${designTokens.color.accentOutline};
    --button-saving: ${designTokens.color.buttonSaving};
    --code-inline-bg: ${designTokens.color.codeInlineBg};
    --code-block-bg: ${designTokens.color.codeBlockBg};
    --code-block-text: ${designTokens.color.codeBlockText};
    --quote-bg: ${designTokens.color.quoteBg};
    --shadow-soft: ${designTokens.color.shadowSoft};
  }
`;
