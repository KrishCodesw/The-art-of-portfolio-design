import ThemeToggle from "../components/Themetoggle";
import Introduction from "../components/Intro";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <div className="fixed bottom-6 right-7">
        <ThemeToggle />
      </div>

      <Section />
    </div>
  );
}
