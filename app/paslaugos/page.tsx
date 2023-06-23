import { ServisesSection } from "@/components/sections/servises/ServisesSection";

import "./paslaugos.scss";

export default function Page() {
  return (
    <main className="servisesPage">
      <div className="servisesPage__container">
        <h1 className="servisesPage__container__title">Paslaugos</h1>
        <ServisesSection />
      </div>
    </main>
  );
}
