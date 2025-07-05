'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


interface ResourceData {
  header: string;
  description: string;
  updates: string[];
}

const defaultData: ResourceData = {
  header: 'ACADEMIC RESOURCE',
  description: 'คลังแหล่งเรียนรู้ของนักเรียน ครูและบุคลากร',
  updates: ['เพิ่มแนวทางกิจกรรม', 'ปรับปรุงเอกสารหลักสูตร', 'อัปเดตแหล่งเรียนรู้'],
};

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<ResourceData>(defaultData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const identity = (window as any).netlifyIdentity;
      if (!identity) {
        setTimeout(checkAuth, 200);
        return;
      }

      identity.on('init', (user: any) => {
        if (!user) {
          router.replace('/cms'); // ❌ ไม่ได้ login → redirect ไปหน้า CMS login
        } else {
          setIsAuthenticated(true); // ✅ ได้ login แล้ว
          localStorage.setItem('admin-token', 'valid');
        }
      });

      identity.init();
    };

    checkAuth();
  }, [router]);

  const handleUpdate = (index: number, value: string) => {
    const newUpdates = [...data.updates];
    newUpdates[index] = value;
    setData({ ...data, updates: newUpdates });
  };

  if (!isAuthenticated) return null; // 🕒 รอ login

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">แก้ไขหน้า Academic Resource</h1>

      <div className="mb-4">
        <label className="font-semibold text-gray-700">หัวข้อ:</label>
        <input
          className="w-full border px-3 py-2 rounded mt-1"
          value={data.header}
          onChange={(e) => setData({ ...data, header: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="font-semibold text-gray-700">คำอธิบาย:</label>
        <textarea
          className="w-full border px-3 py-2 rounded mt-1"
          rows={3}
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="font-semibold text-gray-700">Recent Updates:</label>
        {data.updates.map((item, i) => (
          <input
            key={i}
            className="w-full border px-3 py-2 rounded mt-2"
            value={item}
            onChange={(e) => handleUpdate(i, e.target.value)}
          />
        ))}
      </div>

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => alert('ข้อมูลถูกบันทึก (จำลอง)')}
      >
        บันทึก
      </button>
    </div>
  );
}
