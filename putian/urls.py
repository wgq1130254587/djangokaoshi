from django.conf.urls import url

from putian import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^index/$', views.index, name='index'),
]





