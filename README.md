# 🧮 Aplikasi Manajemen Barang (Multi Framework)

Repositori ini berisi **tiga implementasi aplikasi manajemen barang (CRUD Barang)** menggunakan tiga framework populer:  
**Next.js**, **Laravel**, dan **Django**, semuanya terhubung ke **database MySQL** dan menggunakan **Tailwind CSS** dengan **DaisyUI** untuk tampilan antarmuka yang modern dan responsif.

---

## 🧰 Teknologi yang Digunakan

| Framework | Bahasa | CSS Framework | DaisyUI Versi | Database |
|------------|---------|----------------|----------------|-----------|
| ⚡ Next.js | JavaScript (Node.js) | Tailwind CSS v3 | DaisyUI v4 | MySQL |
| 🐘 Laravel | PHP | Tailwind CSS v3 | DaisyUI v3 | MySQL |
| 🐍 Django | Python | Tailwind CSS v3 | DaisyUI v4 | MySQL |

---

## 📂 Struktur Folder
asesmentTest/
│
├─ next-manajemen-barang/ → Aplikasi Next.js (CRUD Barang + Auth)
│
├─ laravelManajemenBarang/ → Aplikasi Laravel (CRUD Barang + Auth)
│
└─ djangoManajemenBarang/ → Aplikasi Django (CRUD Barang + Auth)

## ⚙️ Cara Clone dan Menjalankan Setiap Proyek

### 1️⃣ Clone Repository
```bash
git clone https://github.com/adhen10/asesmentTest.git
cd asesmentTest


2️⃣ Next.js (Folder: next-manajemen-barang)
Aplikasi berbasis Next.js 14, dengan API Routes dan Prisma ORM.
📦 Instalasi
cd next-manajemen-barang
npm install
⚙️ Konfigurasi Database
Ubah file .env:
DATABASE_URL="mysql://root:@localhost:3306/nama_database"
Lalu migrasi database:
npx prisma migrate dev
▶️ Jalankan Aplikasi
npm run dev
Akses di browser:
👉 http://localhost:3000


3️⃣ Laravel (Folder: laravelManajemenBarang)
Aplikasi berbasis Laravel 11, menggunakan Tailwind + DaisyUI v3 untuk tampilan admin CRUD barang.
📦 Instalasi
cd laravelManajemenBarang
composer install
npm install
⚙️ Konfigurasi Database
Ubah file .env:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=
Lalu jalankan:
php artisan migrate
npm run dev
▶️ Jalankan Aplikasi
php artisan serve
Akses di browser:
👉 http://localhost:8000


4️⃣ Django (Folder: djangoManajemenBarang)
Aplikasi berbasis Django 5, menggunakan Tailwind + DaisyUI v4 dan database MySQL.
📦 Instalasi
Aktifkan virtual environment dan instal dependensi:
cd djangoManajemenBarang
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
⚙️ Konfigurasi Database
Edit file settings.py:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nama_database',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
Lalu jalankan migrasi:
python manage.py migrate
▶️ Jalankan Server
python manage.py runserver
Akses di browser:
👉 http://127.0.0.1:8000


🎯 Tujuan Proyek
Proyek ini dibuat sebagai asesmen dan pembelajaran lintas framework, dengan studi kasus CRUD data barang (Create, Read, Update, Delete).
Tujuannya agar developer dapat memahami perbandingan struktur, arsitektur, dan implementasi dari tiga framework berbeda dengan teknologi modern yang sama (Tailwind + DaisyUI + MySQL).


👨‍💻 Pengembang
Dikembangkan oleh Adhen Firman Firdaus
📚 Mahasiswa Universitas Mercu Buana
💻 Fullstack Web Developer (Laravel, Django, Next.js)