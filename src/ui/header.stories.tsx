import { Header } from "./header";
import { renderHonoStory } from "./render-hono-story";

type HeaderStoryArgs = {
  maxWidth: string;
};

function renderHeader(args: HeaderStoryArgs): string {
  return renderHonoStory(<Header maxWidth={args.maxWidth} />);
}

const meta = {
  title: "UI/Header",
  render: renderHeader,
  args: {
    maxWidth: "800px",
  },
  argTypes: {
    maxWidth: {
      control: "text",
    },
  },
};

export default meta;

export const Default = {};

export const Wide = {
  args: {
    maxWidth: "1100px",
  },
};
