from django.db import models

# Create your models here.

# Model creation with its fields
# Add as many models/fields as necessary.

class Tag(models.Model):
    tipo = models.CharField(max_length=256, default='Desconocido')
    estado = models.BooleanField(default=False)

class Post(models.Model):
    tipo = models.CharField(max_length=256, default='Desconocido')
    fecha_subida = models.DateTimeField()
    id_tags = models.ForeignKey(Tag, on_delete=models.CASCADE)  # Clave foránea a Motor

class User(models.Model):
    email = models.CharField(
    max_length=40, 
    unique=True, 
    error_messages={
    'unique': "Ya existe un Usario con este correo"
    })
    name = models.CharField(max_length=40)
    password = models.CharField(max_length=40)

class Link(models.Model):
    nombre = models.CharField(max_length=256, default='Desconocido')
    estado = models.BooleanField(default=False)  
    tipo = models.CharField(max_length=256, default='Desconocido')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  # Clave foránea a Motor

