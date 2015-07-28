# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0004_website_count'),
    ]

    operations = [
        migrations.CreateModel(
            name='apptype_count',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('apptype', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('countnum', models.IntegerField()),
            ],
        ),
    ]
