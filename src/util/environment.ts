export function getEnv(property: string, defaultValue?: string): string {
  const value = process.env[property];

  if (value !== undefined) {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  throw new Error(
    `Configuration error: environment variable ${property} is not defined!`
  );
}
