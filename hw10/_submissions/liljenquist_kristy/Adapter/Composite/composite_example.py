#Create a composite handling individual employees and manager employees (in charge of a set of employees) and add functionality to "pay" them on payday
import datetime
class Employee:

    def salary(self):
        return 12.50

    def name(self):
        return 'Jeff Green'
    
    def address(self):
        return '123 E 321 S'

class CompositeEmployee(Employee):
    def __init__(self):
        self.employees = []

    def add(self, employee):
        self.employees.append(employee)

    def remove(self, employee):
        self.employees.remove(employee)


class Managers(Employee):
    def __init__(self):
        self.employees = []

    def employeesManaged(self):
        for employee in self.employees:
            print(employee)

    def payEmployee(self, employee):
        today = datetime.datetime.now()
        payday = '3-12-20'
        if today == payday:
            amount = Employee(employee).salary

    def sendCheck(self, employee, amount):
        address = Employee(employee).address
        '''mail check'''

