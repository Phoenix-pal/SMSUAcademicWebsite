// src/app/resource/page.tsx

export default function AcademicResourcePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">ACADEMIC RESOURCE</h1>
        <p className="text-gray-600 mt-2">คลังแหล่งเรียนรู้ของนักศึกษาแพทย์</p>
        <p className="text-gray-400 text-sm"># guide, การสร้างชุมชนแห่งการเรียนรู้</p>
      </div>

      {/* Section: Recent Update */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Updates</h2>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded shadow">Update 1: เพิ่มแนวทางกิจกรรม</div>
          <div className="bg-white p-4 rounded shadow">Update 2: ปรับปรุงเอกสารหลักสูตร</div>
          <div className="bg-white p-4 rounded shadow">Update 3: อัปเดตแหล่งเรียนรู้</div>
        </div>
      </section>

      {/* Section: Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow text-center">Library Guidebook</div>
          <div className="bg-white p-6 rounded shadow text-center">Research Matching</div>
          <div className="bg-white p-6 rounded shadow text-center">...</div>
        </div>
      </section>

      {/* Section: Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">NL OSCE</div>
          <div className="bg-white p-4 rounded shadow text-center">รีวิววิชาเรียน ขึ้นวอร์ด</div>
          <div className="bg-white p-4 rounded shadow text-center">Academic Club</div>
          <div className="bg-white p-4 rounded shadow text-center">Textbook</div>
          <div className="bg-white p-4 rounded shadow text-center">...</div>
        </div>
      </section>

      {/* Section: Feedback */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback</h2>
        <textarea
          placeholder="ข้อเสนอแนะ..."
          className="w-full p-3 border rounded shadow"
          rows={4}
        ></textarea>
      </section>
    </div>
  );
}
