from django.conf.urls import patterns, url

from homeapp import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index')
)