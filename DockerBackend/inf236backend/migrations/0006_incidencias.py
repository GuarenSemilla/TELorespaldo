# Generated by Django 4.2.11 on 2024-06-11 13:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inf236backend', '0005_delete_asignacion_delete_camion_delete_motor_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Incidencias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(default='Desconocido', max_length=256)),
                ('fecha_de_asignacion', models.DateTimeField()),
                ('estado', models.BooleanField(default=False)),
                ('id_camion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inf236backend.camion')),
                ('id_motor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inf236backend.motor')),
            ],
        ),
    ]
