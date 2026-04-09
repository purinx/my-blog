import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ["../public"],
};

export default config;
