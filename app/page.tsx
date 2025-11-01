"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("/api/devices")
      .then(res => res.json())
      .then(data => setDevices(data));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Quản lý thiết bị</h1>

      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border p-2">Tên thiết bị</th>
            <th className="border p-2">Loại</th>
            <th className="border p-2">Số lượng gốc</th>
            <th className="border p-2">Số lượng hiện tại</th>
            <th className="border p-2">Ngày mượn</th>
            <th className="border p-2">Ngày trả</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((d: any) => (
            <tr key={d.id}>
              <td className="border p-2">{d.name}</td>
              <td className="border p-2">{d.type}</td>
              <td className="border p-2">{d.totalQuantity}</td>
              <td className="border p-2">{d.currentQty}</td>
              <td className="border p-2">{d.borrowDate?.slice(0,10) || "-"}</td>
              <td className="border p-2">{d.returnDate?.slice(0,10) || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
