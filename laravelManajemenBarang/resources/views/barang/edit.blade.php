@extends('layouts.app')
@section('content')
    <div class="container mx-auto">
        <div class="bg-base-100 shadow-md rounded-xl p-6 max-w-2xl mx-auto">
            <h2 class="text-2xl font-bold mb-6 border-b pb-2">Edit Barang</h2>

            <form action="{{ route('barang.update', $barang->id) }}" method="POST" class="space-y-3">
                @csrf
                @method('PUT')
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-medium">Nama Barang</span>
                        </label>
                        <input type="text" name="nama" value="{{ $barang->nama }}" class="input input-bordered w-full"
                            required>
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-medium">Stok</span>
                        </label>
                        <input type="number" name="stok" value="{{ $barang->stok }}" class="input input-bordered w-full"
                            required>
                    </div>

                    <div class="form-control md:col-span-2">
                        <label class="label">
                            <span class="label-text font-medium">Harga</span>
                        </label>
                        <input type="number" name="harga" value="{{ $barang->harga }}"
                            class="input input-bordered w-full" required>
                    </div>
                </div>

                <div class="flex justify-end mt-6">
                    <button type="submit" class="btn btn-primary px-6">Update</button>
                </div>
            </form>

        </div>
    </div>
@endsection
