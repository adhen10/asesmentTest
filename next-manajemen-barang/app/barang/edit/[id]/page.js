"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditBarang() {
  const router = useRouter();
  const params = useParams();
  const [form, setForm] = useState({ nama: "", stok: "", harga: "" });

  useEffect(() => {
    fetch(`/api/barang/${params.id}`)
      .then((res) => res.json())
      .then((data) =>
        setForm({
          nama: data.nama,
          stok: data.stok,
          harga: data.harga,
        })
      );
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/barang/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: form.nama,
        stok: parseInt(form.stok),
        harga: parseInt(form.harga),
      }),
    });
    router.push("/?success=Barang berhasil diupdate!");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="card bg-base-100 shadow-lg border border-base-200">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-4 text-center text-slate-600">
              Edit Barang
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Nama Barang</span>
                  </label>
                  <input
                    type="text"
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Stok</span>
                  </label>
                  <input
                    type="number"
                    value={form.stok}
                    onChange={(e) => setForm({ ...form, stok: e.target.value })}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-medium">Harga</span>
                  </label>
                  <input
                    type="number"
                    value={form.harga}
                    onChange={(e) =>
                      setForm({ ...form, harga: e.target.value })
                    }
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button type="submit" className="btn btn-primary px-6">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
