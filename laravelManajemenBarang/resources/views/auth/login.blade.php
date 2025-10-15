@extends('layouts.app')
@section('content')
    <div class="card w-full max-w-sm mx-auto shadow bg-base-100">
        <div class="card-body">
            <h2 class="card-title">Login</h2>
            <form action="{{ route('login.post') }}" method="POST">
                @csrf
                <div class="form-control">
                    <label>Email</label>
                    <input type="email" name="email" class="input input-bordered" required>
                </div>
                <div class="form-control mt-2">
                    <label>Password</label>
                    <input type="password" name="password" class="input input-bordered" required>
                </div>
                <button class="btn btn-primary mt-4 w-full">Login</button>
                <p class="text-sm mt-2">Belum punya akun? <a href="{{ route('register') }}"
                        class="link link-primary">Daftar</a></p>
            </form>
        </div>
    </div>
@endsection
