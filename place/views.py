from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from place.models import Place

def index(request):
	places = Place.objects.all()
	data = serializers.serialize("json", places)
	return HttpResponse(data)
