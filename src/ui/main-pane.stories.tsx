import { MainPane } from "./main-pane";
import { renderHonoStory } from "./render-hono-story";

type MainPaneStoryArgs = {
  maxWidth: string;
  heading: string;
  body: string;
};

function renderMainPane(args: MainPaneStoryArgs): string {
  return renderHonoStory(
    <MainPane maxWidth={args.maxWidth}>
      <article>
        <h1>{args.heading}</h1>
        <p>{args.body}</p>
      </article>
    </MainPane>,
  );
}

const meta = {
  title: "UI/MainPane",
  render: renderMainPane,
  args: {
    maxWidth: "800px",
    heading: "Storybook Sample",
    body: "MainPane の余白と幅を Storybook で確認できます。",
  },
  argTypes: {
    maxWidth: {
      control: "text",
    },
    heading: {
      control: "text",
    },
    body: {
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
