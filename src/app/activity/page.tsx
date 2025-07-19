  "use client";
  
     import React, { useState,useEffect } from 'react';
     import Calendar from 'react-calendar';
     import 'react-calendar/dist/Calendar.css';
     import { Value } from 'react-calendar/dist/shared/types.js';

    export default function ActivityPage() {

       
    const [date, setDate] = useState<Value | null>(null);

useEffect(() => {
  setDate(new Date()); // เซ็ตหลังจาก component ถูกโหลดจริง
}, []);
        const handleChange = (newDate:Value) => {
        setDate(newDate); 
    };

     const renderDate = (date: Value) => {
    if (Array.isArray(date)) {
      // ถ้าเลือกหลายวัน, ให้แสดงวันที่เริ่มต้นและวันสิ้นสุด
      return `${date[0]?.toLocaleDateString()} - ${date[1]?.toLocaleDateString()}`;
    } else if (date instanceof Date) {
      // ถ้าเป็นวันที่เดียว
      return date.toLocaleDateString();
    } else {
      return 'ยังไม่ได้เลือก'; // กรณีที่เป็น null
    }
  };

        return (
            <div className="min-h-screen bg-gray-50 pt-24 px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-blue-700">ACADEMIC ACTIVITY</h1>
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

                {/* Section: Activity Timeline */}
                <section id="Activity timeline" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activity Timeline</h2>
                       <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">เลือกวันที่จากปฏิทิน</h2>
          <Calendar
            onChange={handleChange} 
            value={date} 
            className="w-full max-w-xl text-lg"
          />
          <p className="mt-4">
            วันที่เลือก:  วันที่เลือก: {renderDate(date)} {/* แสดงวันที่ที่เลือก */}
          </p>
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
        </div>)
    }