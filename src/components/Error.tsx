import { Layout } from "../ui/layout";

type ErrorPageProps = {
  statusCode: number;
  description?: string;
  showHomeLink?: boolean;
  errorId?: string;
};

function getErrorTitle(statusCode: number): string {
  if (statusCode === 404) {
    return "404 - Not Found";
  }
  if (statusCode === 500) {
    return "500 - Internal Server Error";
  }
  return `${statusCode} - Error`;
}

export function ErrorPage({ statusCode, description, showHomeLink, errorId }: ErrorPageProps) {
  return (
    <Layout>
      <h1>{getErrorTitle(statusCode)}</h1>
      {description ? <p>{description}</p> : null}
      {errorId ? <p>Error ID: {errorId}</p> : null}
      {showHomeLink ? (
        <p>
          <a href="/">ホームに戻る</a>
        </p>
      ) : null}
    </Layout>
  );
}
