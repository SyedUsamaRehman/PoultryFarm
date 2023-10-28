
from rest_framework import serializers
from .models import CustomUser, department, positons, Employee, Customer, assign_position, shades, assign_shade




class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
      permission = serializers.HyperlinkedRelatedField(view_name='permission-detail',read_only=True)

      class Meta:
        model=CustomUser
        fields='__all__'
class departmentSerializer(serializers.HyperlinkedModelSerializer):
      class Meta:
        model=department
        fields='__all__'
class positonsSerializer(serializers.HyperlinkedModelSerializer):
      class Meta:
        model=positons
        fields='__all__'

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model=Employee
            fields='__all__'

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model=Customer
            fields='__all__'

class assign_positionSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model=assign_position
            fields='__all__'

class shadesSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model=shades
            fields='__all__'

class assign_shadeSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
            model=assign_shade
            fields='__all__'
