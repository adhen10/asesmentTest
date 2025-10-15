from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='barang_index'),
    path('create/', views.create, name='barang_create'),
    path('store/', views.store, name='barang_store'),
    path('edit/<int:id>/', views.edit, name='barang_edit'),
    path('update/<int:id>/', views.update, name='barang_update'),
    path('delete/<int:id>/', views.delete, name='barang_delete'),
]
