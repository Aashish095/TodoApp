from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from form.models import User1
from api.serializer import TaskSerializer

# Create your views here.

@api_view(['GET'])
def taskList(request):
    user = User1.objects.all()
    serializer = TaskSerializer(user,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request,pk):
    user = User1.objects.get(id=pk)
    serializer = TaskSerializer(user,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):

    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request,pk):
    user = User1.objects.get(id=pk)
    serializer = TaskSerializer(user,many=False)
    data=request.data
    
    user.name = data['name']
    user.phone = data['phone']

    user.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def taskDelete(request,pk):
    user = User1.objects.get(id=pk)
    user.delete()

    return Response('item successfully delete')
    
