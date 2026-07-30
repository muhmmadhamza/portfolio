export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="animate-float absolute -top-40 left-[10%] size-[500px] rounded-full bg-accent/20 blur-[120px] dark:bg-accent/15" />
      <div
        className="animate-float absolute top-[30%] right-[5%] size-[400px] rounded-full bg-purple-400/15 blur-[120px] dark:bg-purple-500/10"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float absolute bottom-0 left-[30%] size-[450px] rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-500/10"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
