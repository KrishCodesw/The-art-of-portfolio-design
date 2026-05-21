import ThemeToggle from "../components/Themetoggle";
import Introduction from "../components/Intro";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <div className="fixed top-6 right-6">
        <ThemeToggle />
      </div>

      <Section />
    </div>
  );
}
