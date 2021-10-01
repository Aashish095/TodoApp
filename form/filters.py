import django_filters
from django_filters import DateFilter,CharFilter

from .models import * 

class UserFilter(django_filters.FilterSet):
    name = CharFilter(field_name='name', lookup_expr='icontains')
    phone = CharFilter(field_name='phone', lookup_expr='icontains')

    class Meta:
	    model = User1
	    fields = '__all__'
	    exclude = ['name','phone']