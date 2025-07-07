'use client';

import { useEffect, useState } from 'react';

interface ResourceData {
  header: string;
  description: string;
  updates: string[];
  projects: string[];
}

export default function AdminResourcePage() {
  const [data, setData] = useState<ResourceData>({
    header: '',
    description: '',
    updates: [],
    projects: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/resource')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const handleUpdate = (key: 'updates' | 'projects', index: number, value: string) => {
    const newList = [...data[key]];
    newList[index] = value;
    setData({ ...data, [key]: newList });
  };

  const addItem = (key: 'updates' | 'projects') => {
    setData({ ...data, [key]: [...data[key], ''] });
  };

  if (loading) return <p className="text-center py-10">กำลังโหลดข้อมูล...</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">แก้ไขหน้า Academic Resource</h1>

      {/* Header */}
      <div className="mb-4">
        <label className="font-semibold text-gray-700">หัวข้อ:</label>
        <input
          className="w-full border px-3 py-2 rounded mt-1"
          value={data.header}
          onChange={(e) => setData({ ...data, header: e.target.value })}
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="font-semibold text-gray-700">คำอธิบาย:</label>
        <textarea
          className="w-full border px-3 py-2 rounded mt-1"
          rows={3}
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        ></textarea>
      </div>

      {/* Recent Updates */}
      <div className="mb-4">
        <label className="font-semibold text-gray-700">Recent Updates:</label>
        {data.updates.map((item, i) => (
          <input
            key={i}
            className="w-full border px-3 py-2 rounded mt-2"
            value={item}
            onChange={(e) => handleUpdate('updates', i, e.target.value)}
          />
        ))}
        <button
          onClick={() => addItem('updates')}
          className="mt-2 text-blue-600 hover:underline"
        >
          + เพิ่ม Update
        </button>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <label className="font-semibold text-gray-700">Projects:</label>
        {data.projects.map((item, i) => (
          <input
            key={i}
            className="w-full border px-3 py-2 rounded mt-2"
            value={item}
            onChange={(e) => handleUpdate('projects', i, e.target.value)}
          />
        ))}
        <button
          onClick={() => addItem('projects')}
          className="mt-2 text-blue-600 hover:underline"
        >
          + เพิ่ม Project
        </button>
      </div>

      {/* Save Button */}
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={async () => {
          const res = await fetch('/api/resource', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (res.ok) {
            alert('✅ ข้อมูลถูกบันทึกแล้ว!');
          } else {
            alert('❌ บันทึกไม่สำเร็จ');
          }
        }}
      >
        บันทึก
      </button>
    </div>
  );
}
