"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBarang() {
  const router = useRouter();
  const [form, setForm] = useState({ nama: "", stok: "", harga: "" });
  const [toast, setToast] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nama || !form.stok || !form.harga) {
      setToast("Semua field wajib diisi!");
      setTimeout(() => setToast(""), 3000);
      return;
    }
    if (form.stok <= 0 || form.harga <= 0) {
      setToast("Stok dan harga harus lebih dari 0!");
      setTimeout(() => setToast(""), 3000);
      return;
    }

    await fetch("/api/barang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: form.nama,
        stok: parseInt(form.stok),
        harga: parseInt(form.harga),
      }),
    });
    router.push("/?success=Barang berhasil ditambahkan!");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="card bg-base-100 shadow-lg border border-base-200">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-4 text-center text-slate-600">
              Tambah Barang
            </h2>

            {toast && (
              <div className="toast toast-top toast-end z-50">
                <div className="alert alert-error">
                  <span className="text-white">{toast}</span>
                </div>
              </div>
            )}

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
                    placeholder="Masukkan nama barang"
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
                    placeholder="Masukkan stok barang"
                    
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
                    placeholder="Masukkan harga barang"
                    
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button type="submit" className="btn btn-primary px-6">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
