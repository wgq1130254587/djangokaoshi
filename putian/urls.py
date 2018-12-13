from django.conf.urls import url

from putian import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^index/$', views.index, name='index'),
    url(r'^regsiter/$', views.regsiter, name='regsiter'),
    url(r'^login/$', views.login, name='login'),
    url(r'^chaincart/$', views.chaincart, name='chaincart'),
    url(r'^introduce/$', views.introduce, name='introduce'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^checkemail/$', views.checkemail, name=
    'checkemail'),
    url(r'^addcart/$', views.addcart, name='addcart'),
]





