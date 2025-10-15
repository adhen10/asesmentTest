"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [toast, setToast] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setToast("Akun berhasil dibuat!");
      setTimeout(() => router.push("/login"), 1500);
    } else {
      setToast(data.error || "Terjadi kesalahan");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-info text-white">
            <span>{toast}</span>
          </div>
        </div>
      )}
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body text-slate-600">
          <h2 className="text-center text-2xl font-bold mb-4">Daftar Akun</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                className="input input-bordered w-full"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            <button className="btn btn-primary w-full">Daftar</button>
          </form>
          <p className="text-center mt-3">
            Sudah punya akun?{" "}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
