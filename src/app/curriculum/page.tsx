export default function CurriculumDevelopmentPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-700">Curriculum Development</h1>
            </div>

            {/* Section: Recent Update */}
            <section id="Activity recent update" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Updates</h2>
                <div className="space-y-3">
                    <div className="bg-white p-4 rounded shadow">Update 1:</div>
                    <div className="bg-white p-4 rounded shadow">Update 2:</div>
                    <div className="bg-white p-4 rounded shadow">Update 3:</div>
                </div>
            </section>

            {/* Section:Projects */}
            <section id="Activity Projects" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
                <div className="w-full bg-gray-50 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow p-6 aspect-square flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-bold mb-4">กล่องที่ 1</h2>
                            <p>รายละเอียดกล่อง 1</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 aspect-square flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-bold mb-4">กล่องที่ 2</h2>
                            <p>รายละเอียดกล่อง 2</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 aspect-square flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-bold mb-4">กล่องที่ 3</h2>
                            <p>รายละเอียดกล่อง 3</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 aspect-square flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-bold mb-4">กล่องที่ 4</h2>
                            <p>รายละเอียดกล่อง 4</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: FeedBack */}
            <section className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">FeedBack</h2>
                <div className="space-y-3">
                    <div className="bg-white p-4 rounded shadow">
                        <a href="https://www.example.com" className="text-blue-500 hover:underline hover:bg-sky-50 transition">
                            Feedback
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}


