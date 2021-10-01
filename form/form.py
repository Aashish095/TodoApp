from django import forms
from .models import User1

class ContactForm(forms.ModelForm):
    class Meta:
        model = User1
        fields = ['name','phone']
        