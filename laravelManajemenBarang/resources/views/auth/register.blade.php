@extends('layouts.app')
@section('content')
    <div class="card w-full max-w-sm mx-auto shadow bg-base-100">
        <div class="card-body">
            <h2 class="card-title">Register</h2>
            <form action="{{ route('register.post') }}" method="POST">
                @csrf
                <div class="form-control">
                    <label>Nama</label>
                    <input type="text" name="name" class="input input-bordered" required>
                </div>
                <div class="form-control mt-2">
                    <label>Email</label>
                    <input type="email" name="email" class="input input-bordered" required>
                </div>
                <div class="form-control mt-2">
                    <label>Password</label>
                    <input type="password" name="password" class="input input-bordered" required>
                </div>
                <div class="form-control mt-2">
                    <label>Konfirmasi Password</label>
                    <input type="password" name="password_confirmation" class="input input-bordered" required>
                </div>
                <button class="btn btn-primary mt-4 w-full">Register</button>
                <p class="text-sm mt-2">Sudah punya akun? <a href="{{ route('login') }}" class="link link-primary">Login</a>
                </p>
            </form>
        </div>
    </div>
@endsection
