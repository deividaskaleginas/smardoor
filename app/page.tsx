import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";
import { LogosSection } from "@/components/sections/logos/LogosSection";
import { ServisesSection } from "@/components/sections/servises/ServisesSection";

export default function Home() {
  return (
    <main>
      <Main />
      <ServisesSection />
      <LogosSection />
    </main>
  );
}
