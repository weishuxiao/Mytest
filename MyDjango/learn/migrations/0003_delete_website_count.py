# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0002_flux_speed_website_count'),
    ]

    operations = [
        migrations.DeleteModel(
            name='website_count',
        ),
    ]
