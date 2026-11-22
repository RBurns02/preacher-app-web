import type { Metadata } from "next";
import { MotionMockup } from "./motion-mockup";

export const metadata: Metadata = {
  title: "The Preacher — Motion mockup",
  description: "An interactive concept for preparing, preaching, and remembering every sermon.",
};

export default function MockupPage() {
  return <MotionMockup />;
}

