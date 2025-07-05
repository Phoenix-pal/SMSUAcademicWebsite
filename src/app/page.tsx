// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
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
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Activity</h3>
            <p className="text-gray-600 text-sm">คลิกแล้วจะไปหน้า Activity หรือแสดง Content บางส่วน</p>
          </div>
          <Link href="/resource" className="bg-white rounded-lg shadow p-6 text-center hover:bg-sky-50 transition">
            <h3 className="text-xl font-semibold mb-2">Resource</h3>
            <p className="text-gray-600 text-sm">Resource of Siriraj</p>
          </Link>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Cur Dev</h3>
            <p className="text-gray-600 text-sm">คลิกเพื่อเข้าสู่เนื้อหาเกี่ยวกับหลักสูตร</p>
          </div>
        </div>

        {/* CTA Button */}
        
      </main>
    </div>
  );
}