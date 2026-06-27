import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/syllabus-notes/$code/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/syllabus-notes/$code/$name"!</div>
}
