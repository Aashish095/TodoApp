from django.urls import path

from . import views

urlpatterns = [
    path('',views.Formlist,name='formlist'),
    path('formcreate/',views.home,name='formcreate'),
    path('formupdate/<str:pk>/',views.updateContact,name='formupdate'),
    path('formdelete/<str:pk>/',views.deleteContact,name='formdelete'),
]
