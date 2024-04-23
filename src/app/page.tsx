import type { Metadata } from "next";
import Home from "@/features/home/components";

function HomePage() {
  return <Home />;
}

export const metadata: Metadata = {
  title: "Tastebites",
  description: "Tastebites home Page description"
};

export default HomePage;
