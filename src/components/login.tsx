import { Layout } from "../ui/layout";
import { cardStyle, errorStyle, githubButtonStyle, headingStyle, wrapperStyle } from "./login.css";

type LoginPageProps = {
  error?: string;
  next: string;
};

function getErrorMessage(error: string): string {
  if (error === "forbidden") return "アクセスが許可されていません。";
  return "ログインに失敗しました。もう一度お試しください。";
}

export function LoginPage({ error, next }: LoginPageProps) {
  const githubHref = `/login/github?next=${encodeURIComponent(next)}`;

  return (
    <Layout>
      <div class={wrapperStyle}>
        <div class={cardStyle}>
          <p class={headingStyle}>管理画面</p>
          {error ? <p class={errorStyle}>{getErrorMessage(error)}</p> : null}
          <a href={githubHref} class={githubButtonStyle}>
            GitHub でログイン
          </a>
        </div>
      </div>
    </Layout>
  );
}
