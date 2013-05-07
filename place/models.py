from django.db import models
from geoposition.fields import GeopositionField

class Place(models.Model):
	name = models.CharField(u'nome', max_length=120)
	address = models.CharField(u'endereco', max_length=120)
	position = GeopositionField()

	def __unicode__(self):
		return self.name