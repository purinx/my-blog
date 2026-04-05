type ServerErrorLogInput = {
  route: string;
  method: string;
  statusCode: number;
  cause: unknown;
};

function hashTextToHex(text: string): string {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

function serializeCause(cause: unknown): string {
  if (cause instanceof Error) {
    return cause.stack ?? cause.message;
  }
  return String(cause);
}

export function logServerError(input: ServerErrorLogInput): string {
  const timestamp = new Date().toISOString();
  const entropy = `${timestamp}:${input.method}:${input.route}:${input.statusCode}:${crypto.randomUUID()}`;
  const errorId = hashTextToHex(entropy);

  console.error(
    JSON.stringify({
      level: "error",
      timestamp,
      errorId,
      route: input.route,
      method: input.method,
      statusCode: input.statusCode,
      cause: serializeCause(input.cause),
    }),
  );

  return errorId;
}
