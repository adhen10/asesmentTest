from django.db import models

# Create your models here.
class Barang(models.Model):
    nama = models.CharField(max_length=100)
    stok = models.IntegerField()
    harga = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return self.nama