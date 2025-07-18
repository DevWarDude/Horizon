export function handleSupabaseError(
  error,
  fallbackMessage = "Something went wrong"
) {
  if (!error) return;

  const networkRelated = [
    "Network request failed",
    "Failed to fetch",
    "TypeError: Failed to fetch",
  ];

  const isNetworkError = networkRelated.some((msg) =>
    error.message?.includes(msg)
  );

  const message = isNetworkError
    ? "You're offline. Please check your connection."
    : error.message || fallbackMessage;

  throw new Error(message);
}
