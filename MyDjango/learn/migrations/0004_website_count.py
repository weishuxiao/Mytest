# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0003_delete_website_count'),
    ]

    operations = [
        migrations.CreateModel(
            name='website_count',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('website', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('countnum', models.IntegerField()),
                ('flux', models.FloatField()),
            ],
        ),
    ]
