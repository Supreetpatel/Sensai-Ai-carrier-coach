import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="gradient font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {" "}
            Your AI Carrer Coach for
            <br />
            Professional Success.
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button className="px-8" size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="px-8" size="lg" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="her-image-wrapper mt-5 md:mt-6">
          <div>
            <Image
              src="/banner2.jpeg"
              alt="banner"
              height={720}
              width={1280}
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
