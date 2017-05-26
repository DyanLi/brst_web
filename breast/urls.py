#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^tool$', views.tool, name='tool')
]

