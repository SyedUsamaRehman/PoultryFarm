from django.contrib import admin
from .models import CustomUser, department, positons, Employee


admin.site.register(CustomUser)
admin.site.register(department)
admin.site.register(positons)
admin.site.register(Employee)

# Register your models here.
