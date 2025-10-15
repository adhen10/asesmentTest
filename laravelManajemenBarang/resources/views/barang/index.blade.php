@extends('layouts.app')
@section('content')
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">Daftar Barang</h2>
        <a href="{{ route('barang.create') }}" class="btn btn-primary">+ Tambah Barang</a>
    </div>

    <table class="table table-zebra table-compact w-full bg-base-100 shadow-md">
        <thead>
            <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Stok</th>
                <th>Harga</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($barangs as $barang)
                <tr>
                    <td>{{ $barangs->firstItem() + $loop->index }}</td>
                    <td>{{ $barang->nama }}</td>
                    <td>{{ $barang->stok }}</td>
                    <td>Rp {{ number_format($barang->harga) }}</td>
                    <td class="flex gap-2">
                        <a href="{{ route('barang.edit', $barang->id) }}" class="btn btn-sm btn-warning">Edit</a>
                        <form action="{{ route('barang.destroy', $barang->id) }}" method="POST"
                            onsubmit="return confirm('Yakin hapus?')">
                            @csrf @method('DELETE')
                            <button class="btn btn-sm btn-error">Hapus</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <div class="mt-6 flex justify-center">
        {{ $barangs->links('pagination::tailwind') }}
    </div>
@endsection
