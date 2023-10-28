from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser): 
    name = models.CharField(max_length=255)
    USER_TYPE_CHOICES = (
        ('admin', 'Admin'),
        ('customer', 'Customer'),
        ('employee', 'Employee'),
    )
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)
    def __str__(self):
        return self.name
    
    


class department(models.Model):
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=100)
    def __str__(self):
        return self.name
    



    
class positons(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    





class Employee(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    mobile = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    joining_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # image = models.ImageField(upload_to='uploads/', null=True, blank=True)

    def __str__(self):
        self.user.user_type = 'employee'
        return self.name
    
class Customer(models.Model):
    user=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    Company_name=models.CharField(max_length=100)
    mobile=models.CharField(max_length=100)
    address=models.CharField(max_length=100)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self):
        self.user.user_type='customer'
        return self.name
    
class assign_position(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    department=models.ForeignKey(department,on_delete=models.CASCADE)
    position=models.ForeignKey(positons,on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.customer.name



class shades(models.Model):
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=100)
    def __str__(self):
        return self.name

class assign_shade(models.Model):
    Employee=models.ForeignKey(Employee,on_delete=models.CASCADE)
    shade=models.ForeignKey(shades,on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.Employee.name


