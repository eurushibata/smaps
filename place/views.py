from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from django.views.generic import DetailView
from place.models import Place

def index(request):
	places = Place.objects.all()
	data = serializers.serialize("json", places)
	return HttpResponse(data)

class PlaceDetailView(DetailView):
	
	context_object_name = "place"
	model = Place

	def get_context_data(self, **kwargs):
		context = super(PlaceDetailView, self).get_context_data(**kwargs)

		return context
