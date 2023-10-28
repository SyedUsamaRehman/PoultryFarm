from django.contrib import admin
from django.urls import path ,include
from app_api import views

from rest_framework.routers import DefaultRouter
from app_api import views


router = DefaultRouter()
router.register(r'CustomUser', views.CustomUserViewSet)
router.register(r'department', views.departmentViewSet)
router.register(r'positions', views.positonsViewSet)
router.register(r'employee', views.EmployeeViewSet)
router.register(r'customer', views.CustomerViewSet)
router.register(r'assign_position', views.assign_positionViewSet)
router.register(r'shades', views.shadesViewSet)
router.register(r'assign_shade', views.assign_shadeViewSet)





# router.register(r'CustomUser', views.CustomUserViewSet,basename="CustomUser")

urlpatterns = [
 
    path('', include(router.urls)),
]
