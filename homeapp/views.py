from django.shortcuts import render, get_object_or_404

from place.models import Place

def index(request):
	places = Place.objects.all
	variavel = "blablabla"
	return render(request, 'homeapp/index.html', {'places': places, 'variavel': variavel})