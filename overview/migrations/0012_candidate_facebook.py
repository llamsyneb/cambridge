# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-04 02:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('overview', '0011_auto_20170629_2213'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='facebook',
            field=models.URLField(blank=True, default='', help_text='Candidate facebook page'),
        ),
    ]
