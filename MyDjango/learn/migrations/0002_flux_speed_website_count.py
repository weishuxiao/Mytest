# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='flux_speed',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('date', models.DateField()),
                ('up_speed', models.FloatField()),
                ('down_speed', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='website_count',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('website', models.CharField(max_length=200)),
                ('countnum', models.IntegerField()),
                ('flux', models.FloatField()),
            ],
        ),
    ]
