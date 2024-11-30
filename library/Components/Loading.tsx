import Lottie from "lottie-react";
import React from "react";
import groovyWalkAnimation from "@/public/Lottie/Walking.json";

function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
      <Lottie className="size-60" animationData={groovyWalkAnimation} />
      <span className="mt-4 animate-pulse text-sm font-semibold text-gray-400">
        Loading....
      </span>
    </div>
  );
}

export default Loading;
