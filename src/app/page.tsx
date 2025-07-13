// src/app/page.tsx
"use client";
import Link from "next/link";
import { useState } from 'react';



export default function HomePage() {
  const [openMenu, setOpenMenu] = useState<"activity" | "resource" | null>(null);

  const Activitycategories = [
    { name: 'recent update', targetId: 'Activity recent update' },
    { name: 'projects', targetId: 'Activity projects' },
    { name: 'timeline', targetId: 'Activity timeline' },
  ];
  const Resourcecategories = [
    { name: 'recent update', targetId: 'Resource recent update' },
    { name: 'projects', targetId: 'Resource projects' },
    { name: 'resources', targetId: 'Resource resources' },
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-24 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-sky-900">SMSU</h1>
          <h2 className="text-5xl font-bold text-blue-700 mt-2">ACADEMIC</h2>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="relative bg-white rounded-lg shadow p-6 text-center hover:bg-sky-50 transition"
            onMouseEnter={() => setOpenMenu("activity")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/activity" className="block">
              <h3 className="text-xl font-semibold mb-2">Activity</h3>
              <p className="text-gray-600 text-sm">คลิกแล้วจะไปหน้า Activity หรือแสดง Content บางส่วน</p>
            </Link>
            {openMenu === "activity" && (
              <ul className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl bg-white shadow-xl border border-gray-200 z-20 animate-fade-in">
                {Activitycategories.map((cat) => (
                  <li
                    key={cat.name}
                    className="px-5 py-3 hover:bg-sky-100 text-gray-700 rounded-lg cursor-pointer transition mb-1 last:mb-0"
                  >
                    <Link href={`/activity#${cat.targetId}`}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className="relative bg-white rounded-lg shadow p-6 text-center hover:bg-sky-50 transition"
            onMouseEnter={() => setOpenMenu("resource")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/resource" className="block">
              <h3 className="text-xl font-semibold mb-2">Resource</h3>
              <p className="text-gray-600 text-sm">Resource of Siriraj</p>
            </Link>
            {openMenu === "resource" && (
              <ul className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl bg-white shadow-xl border border-gray-200 z-20 animate-fade-in">
                {Resourcecategories.map((cat) => (
                  <li
                    key={cat.name}
                    className="px-5 py-3 hover:bg-sky-100 text-gray-700 rounded-lg cursor-pointer transition mb-1 last:mb-0"
                  >
                    <Link href={`/resource#${cat.targetId}`}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/Curriculum" className="block">
            <h3 className="text-xl font-semibold mb-2">Cur Dev</h3>
            <p className="text-gray-600 text-sm">คลิกเพื่อเข้าสู่เนื้อหาเกี่ยวกับหลักสูตร</p>
        </Link>
</div>
        {/* CTA Button */}

      </main>
    </div>
  );
}