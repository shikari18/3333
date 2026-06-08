import { createFileRoute, redirect } from "@tanstack/react-router";

// This route is a legacy stub — redirect to the Biology syllabus
export const Route = createFileRoute("/topic")({
  beforeLoad: () => {
    throw redirect({ to: "/syllabus/biology-0610" });
  },
  component: () => null,
});
