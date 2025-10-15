from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required

def login_view(request):
    if request.user.is_authenticated:
        return redirect('barang_index')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Berhasil login.')
            return redirect('barang_index')
        else:
            messages.error(request, 'Username atau password salah.')
    return render(request, 'akun/login.html')

def register_view(request):
    if request.user.is_authenticated:
        return redirect('barang_index')

    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username sudah digunakan.')
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'Email sudah digunakan.')
        else:
            user = User.objects.create_user(username=username, password=password)
            messages.success(request, 'Registrasi berhasil! Silakan login.')
            return redirect('login')
    return render(request, 'akun/register.html')

def logout_view(request):
    logout(request)
    messages.success(request, 'Anda telah logout.')
    return redirect('login')
