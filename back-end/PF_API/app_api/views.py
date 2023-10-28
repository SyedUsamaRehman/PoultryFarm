from django.shortcuts import render
from django.http import HttpResponse 
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
# from django.contrib.auth import authenticate

from rest_framework import viewsets
from .models import CustomUser, department, positons, Employee, Customer, assign_position, shades, assign_shade
from .apis import CustomUserSerializer , departmentSerializer, positonsSerializer, EmployeeSerializer, CustomerSerializer, assign_positionSerializer, shadesSerializer, assign_shadeSerializer

# Create your views here.
class CustomUserViewSet(viewsets.ModelViewSet):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer
    # permission_classes = [IsAuthenticated]



class departmentViewSet(viewsets.ModelViewSet):
    queryset=department.objects.all()
    serializer_class=departmentSerializer
    # permission_classes = [IsAuthenticated]

class positonsViewSet(viewsets.ModelViewSet):
    queryset=positons.objects.all()
    serializer_class=positonsSerializer
    # permission_classes = [IsAuthenticated]

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
    # permission_classes = [IsAuthenticated]

class CustomerViewSet(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer
    # permission_classes = [IsAuthenticated]


class assign_positionViewSet(viewsets.ModelViewSet):

    queryset=assign_position.objects.all()
    serializer_class=assign_positionSerializer
    # permission_classes = [IsAuthenticated]

class shadesViewSet(viewsets.ModelViewSet):
    queryset=shades.objects.all()
    serializer_class=shadesSerializer
    # permission_classes = [IsAuthenticated]

class assign_shadeViewSet(viewsets.ModelViewSet):
    queryset=assign_shade.objects.all()
    serializer_class=assign_shadeSerializer
    # permission_classes = [IsAuthenticated]



