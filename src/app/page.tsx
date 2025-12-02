import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { Hero } from "@/components/sections/Hero"
import { TechStack } from "@/components/sections/TechStack"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </main>
  )
}
