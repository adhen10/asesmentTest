<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'CRUD Barang') }}</title>
    @vite('resources/css/app.css')
</head>

<body class="bg-base-200 min-h-screen">

    <nav class="navbar bg-base-100 shadow mb-6">
        <div class="flex-1 px-2 mx-2 text-xl font-bold">Manajemen Barang</div>
        <div class="flex-none">
            @auth
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button class="btn btn-ghost">Logout</button>
                </form>
            @endauth
        </div>
    </nav>

    <div class="container mx-auto px-4">
        @if (session('success'))
            <div class="alert alert-success mb-4">{{ session('success') }}</div>
        @endif
        @yield('content')
    </div>

</body>

</html>
