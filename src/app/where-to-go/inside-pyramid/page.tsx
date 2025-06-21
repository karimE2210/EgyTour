"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Import aframe only on client side
let aframe: any;
if (typeof window !== "undefined") {
  aframe = require("aframe");
}

export default function InsidePyramidPage() {
  // Initialize A-Frame on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
    }
  }, []);

  return (
    <div className="pb-12">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] bg-black/90 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Step Inside the Pyramid
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Experience the ancient wonders of Egypt's pyramids through immersive virtual reality
          </p>
        </div>
      </section>

      {/* VR Scene */}
      <section className="w-full">
        <a-scene embedded className="w-full h-[60vh]">
          <a-sky 
            src="https://cdn.glitch.global/b8e5e3c7-b2a8-4d0c-8c08-f0935abf3b3c/pyramid-temp.jpg?v=1689524899145" 
            rotation="0 -90 0"
          />
          <a-camera>
            <a-cursor color="#FFFFFF" />
          </a-camera>
        </a-scene>
      </section>

      {/* Callout Section */}
      <section className="container mx-auto px-4 md:px-8 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-8">
            Explore the Great Pyramid's inner chambers in immersive 360°. Use your mouse or touch to look around and discover the ancient architecture that has captivated visitors for millennia.
          </p>
          <Button asChild className="btn-primary">
            <Link href="/where-to-go/wild-side">
              Back to Wild Side
            </Link>
          </Button>
        </div>
      </section>

      {/* Instructions */}
      <section className="container mx-auto px-4 md:px-8 py-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">How to Navigate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">Desktop</h3>
              <ul className="space-y-2">
                <li>• Click and drag to look around</li>
                <li>• Use scroll wheel to zoom in/out</li>
                <li>• Use arrow keys for fine control</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">Mobile</h3>
              <ul className="space-y-2">
                <li>• Touch and drag to look around</li>
                <li>• Pinch to zoom in/out</li>
                <li>• Use device motion for immersion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 