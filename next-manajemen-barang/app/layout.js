import "./globals.css";
import LogoutButton from "./components/LogoutButton";

export const metadata = {
  title: "CRUD Barang - Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="light">
      <body className="bg-base-200 min-h-screen">
        <nav className="navbar bg-base-100 shadow mb-6 text-slate-600">
          <div className="flex-1 px-4 text-xl font-bold">CRUD Barang</div>
          <div className="flex-none">
            <LogoutButton />
          </div>
        </nav>
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
