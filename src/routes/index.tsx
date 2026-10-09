import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/stou/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <AppShell />;
}
