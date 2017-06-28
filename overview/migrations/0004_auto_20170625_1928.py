# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-25 23:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('overview', '0003_candidate_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='candidate',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
    ]