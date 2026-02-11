import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to the LMS Project</h1>
      <ThemeToggle />
    </div>
  );
}
