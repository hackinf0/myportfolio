"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

export default function Home() {
  const [showMore, setShowMore] = useState(false)

  return (
    <main className="flex flex-col items-center min-h-screen bg-background text-foreground">
      <section className="text-center py-16 px-6">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-border shadow-lg">
            <Image
              src="/me.png"
              alt="Henry Joel"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-full"
            />
          </div>
        </div>
 
        <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m Henri 👋</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Full-Stack Developer, Cybersecurity Evangelist.
        </p>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1c3ruUa1vKO3TurUdSpqEey7rPNjD410T/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="px-6 py-3 text-lg cursor-pointer"
            >
              View My CV
            </Button>
          </a>
        </div>
 
        <div className="mt-6 max-w-2xl mx-auto space-y-4 text-muted-foreground text-sm md:text-xl leading-relaxed text-left">
          <p>
            I am a <span className="text-foreground">full-stack developer</span>{" "}
            currently living in <span className="text-foreground">Italy </span>
            with over <span className="text-foreground">five years</span> of
            experience, primarily working with startups.
            <button
              onClick={() => setShowMore(!showMore)}
              className="ml-2 text-muted-foreground hover:text-foreground transition cursor-pointer"
              aria-label="More info"
            >
              <Info size={16} />
            </button>
            {showMore && (
              <span className="text-green-500 transition-opacity duration-300">
                {" "}
                I started coding in 2016 on my Samsung tablet, building small
                web pages for clients. This eventually led to my first part-time
                job while still in high school.
              </span>
            )}
          </p>

          <p>
            You might know me from my YouTube channel,
            <a
              href="https://youtube.com/hackinfo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-400 transition"
            >
              Hackinfo
            </a>
            , where I educate and advocate for ethical hacking.
          </p>

          <p>
            My team and I ranked among the
            <span className="text-foreground">
              {" "}
              top 10 hacking teams in West Africa
            </span>{" "}
            at
            <span className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground ml-1">
              HackerLab Africa 2022
            </span>
            , and we were <span className="text-foreground">runners-up</span> in
            the
            <br />
            <span className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground ml-1">
              CAF CTF Côte d’Ivoire 2023
            </span>
            , securing the title of the{" "}
            <span className="text-foreground">
              second-best team in Ivory Coast
            </span>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
