class Student:
  def __init__(self, name, marks):
    self.name = name
    self.marks = marks

  def display(self):
    print(f"Student name = {self.name} \nStudent marks = {self.marks}")

s = Student("omer", 95.5)
s.display()

class Counter:
  pass

class Car:
  brand = None
  