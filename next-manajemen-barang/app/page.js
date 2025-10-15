"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const [barangs, setBarangs] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState("");
  const searchParams = useSearchParams();
  const successMessage = searchParams.get("success");

  useEffect(() => {
    if (successMessage) {
      setToast(successMessage);
      setTimeout(() => setToast(""), 3000);
    }
  }, [successMessage]);

  const fetchData = async (pageNumber = 1) => {
    const res = await fetch(`/api/barang?page=${pageNumber}`);
    const json = await res.json();
    setBarangs(json.data);
    setPagination(json.pagination);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const deleteBarang = async (id) => {
    if (!confirm("Yakin hapus barang ini?")) return;
    await fetch(`/api/barang/${id}`, { method: "DELETE" });
    setToast("Barang berhasil dihapus!");
    fetchData(page);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div>
      {toast && (
        <div className="toast toast-top toast-end z-50 ">
          <div className="alert alert-success text-white">
            <span>{toast}</span>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-slate-600">Daftar Barang</h2>
        <Link href="/barang/create" className="btn btn-primary">
          + Tambah Barang
        </Link>
      </div>

      <table className="table table-zebra table-compact w-full bg-base-100 shadow-md">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Stok</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="text-slate-600">
          {barangs.length ? (
            barangs.map((b, i) => (
              <tr key={b.id}>
                <td>{(pagination.page - 1) * pagination.perPage + i + 1}</td>
                <td>{b.nama}</td>
                <td>{b.stok}</td>
                <td>Rp {b.harga.toLocaleString("id-ID")}</td>
                <td className="flex gap-2">
                  <Link
                    href={`/barang/edit/${b.id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBarang(b.id)}
                    className="btn btn-sm btn-error"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Belum ada barang
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <div className="join">
            <button
              className="join-item btn"
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
            >
              «
            </button>

            {[...Array(pagination.totalPages)].map((_, i) => (
              <button
                key={i}
                className={`join-item btn ${
                  page === i + 1 ? "btn-active" : ""
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="join-item btn"
              disabled={page >= pagination.totalPages}
              onClick={() => setPage(page + 1)}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
