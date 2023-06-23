"use client";

import { SIDEBAR, sidebarData } from "@/constants/sideBarData";

export default function Page() {
  const categories = sidebarData
    .filter((category) => category.key === SIDEBAR.PREKES)
    .map((subNav) => subNav.subNav);

  console.log(categories);

  return (
    <main className="categoriesPage">
      <div className="categoriesPage__container">
        {/* {categories.map(({ title, image, alt }, index) => (
          <div key={index}></div>
        ))} */}
      </div>
    </main>
  );
}
