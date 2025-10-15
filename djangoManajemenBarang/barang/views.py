from django.shortcuts import render, redirect, get_object_or_404
from django.core.paginator import Paginator
from .models import Barang
from django.contrib import messages
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    barangs_list = Barang.objects.all().order_by('-id')  # urut terbaru
    paginator = Paginator(barangs_list, 3)  # tampil 3 data per halaman
    page_number = request.GET.get('page')
    barangs = paginator.get_page(page_number)
    
    return render(request, 'barang/index.html', {'barangs': barangs})

@login_required
def create(request):
    return render(request, 'barang/create.html')

@login_required
def store(request):
    if request.method == 'POST':
        nama = request.POST.get('nama')
        stok = request.POST.get('stok')
        harga = request.POST.get('harga')
        Barang.objects.create(nama=nama, stok=stok, harga=harga)
        messages.success(request, "Barang berhasil ditambahkan.")
        return redirect('barang_index')

@login_required
def edit(request, id):
    barang = get_object_or_404(Barang, id=id)
    return render(request, 'barang/edit.html', {'barang': barang})

@login_required
def update(request, id):
    barang = get_object_or_404(Barang, id=id)
    barang.nama = request.POST.get('nama')
    barang.stok = request.POST.get('stok')
    barang.harga = request.POST.get('harga')
    barang.save()
    messages.success(request, "Barang berhasil diperbarui.")
    return redirect('barang_index')

@login_required
def delete(request, id):
    barang = get_object_or_404(Barang, id=id)
    barang.delete()
    messages.success(request, "Barang berhasil dihapus.")
    return redirect('barang_index')
