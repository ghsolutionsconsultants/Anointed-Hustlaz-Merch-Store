// Runs synchronously during HTML parsing on hard loads (before first paint),
// and is inert (text/plain) after hydration — silencing React's script warning.
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
