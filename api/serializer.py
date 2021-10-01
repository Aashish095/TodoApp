from rest_framework import serializers
from form.models import User1

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = User1
        fields = "__all__"