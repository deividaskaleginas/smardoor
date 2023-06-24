"use client";

import { SIDEBAR, sidebarData } from "@/constants/sideBarData";

export default function Page() {
  const categories = sidebarData.find(
    (category) => category.key === SIDEBAR.PREKES
  )?.subNav;

  console.log(categories);

  return (
    <main className="categoriesPage">
      <div className="categoriesPage__container">
        {categories?.map(({ title }, index) => (
          <p key={index}>{title}</p>
        ))}
      </div>
    </main>
  );
}
