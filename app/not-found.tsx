import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-4 text-center">
      <span className="gradient-text text-8xl font-semibold tracking-tight">404</span>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Let&apos;s get you back on track.
      </p>
      <Button asChild size="lg" variant="accent" className="mt-8">
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
