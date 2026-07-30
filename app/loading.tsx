export default function Loading() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="size-8 animate-spin rounded-full border-2 border-border border-t-accent" />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}
