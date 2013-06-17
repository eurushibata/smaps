from django.conf.urls import patterns, url

from place import views
from place.views import PlaceDetailView

urlpatterns = patterns('',
    url(r'^json/$', views.index, name='json'),
    url(r'(?P<pk>\d+)/$', PlaceDetailView.as_view()),
)