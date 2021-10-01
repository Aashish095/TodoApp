from django.shortcuts import render,redirect
from .models import User1
from .form import ContactForm
from .filters import UserFilter
# Create your views here.
def home(request):
    form = ContactForm(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            form = form.save()
            return redirect('formlist')
            
    context = {'form':form}
    return render(request,'home.html',context)

def Formlist(request):
    user = User1.objects.all().order_by('name')
    total_user = user.count()
    myFilter = UserFilter(request.GET,queryset=user)
    user = myFilter.qs

    context = {
        'user':user,
        'total_user':total_user,
        'myFilter':myFilter
    }

    return render(request,'contact.html',context)

def updateContact(request,pk):
    user = User1.objects.get(id=pk)
    form = ContactForm(instance=user)
    print('user:',user)
    if request.method == 'POST':
        form = ContactForm(request.POST,instance=user)
        if form.is_valid():
            form.save()
            return redirect('formlist')


    context = {'form':form}
    return render(request,'home.html',context)

def deleteContact(request,pk):
    user = User1.objects.get(id=pk)
    if request.method == "POST":
        user.delete()
        return redirect('formlist')
    context = {
        'user':user
    }
    return render(request,'delete.html',context)