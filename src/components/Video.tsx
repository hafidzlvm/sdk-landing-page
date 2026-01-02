"use client";

import { Container } from "@/components/Container";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {


  if (!videoId) return null;

  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 bg-gradient-to-tr from-purple-400 to-indigo-700 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white lg:text-5xl drop-shadow-md">
            Coming Soon
          </h3>
          <p className="mt-4 text-lg text-indigo-100 lg:text-xl">
            Stay tuned for our video content
          </p>
        </div>
      </div>
    </Container>
  );
}
