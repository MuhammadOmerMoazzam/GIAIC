print("\nTask 1")
class Student:
  def __init__(self, name, marks):
    self.name = name
    self.marks = marks

  def display(self):
    print(f"Student name = {self.name} \nStudent marks = {self.marks}")

s = Student("omer", 95.5)
s.display()

print("\nTask 2")
class Counter:
  pass

print("\nTask 3")
class Car:
  def __init__(self, brand) -> None:
    self.brand = brand
    
  def start(self):
    return f"Starting..."
  
c = Car('Toyota')
print(f"The {c.brand} car is {c.start()}")
  
print("\nTask 4")
class Bank:
  pass

print("\nTask 5")
class MathUtils:
  def add(self, a, b):
    return a +b

m = MathUtils()
print(f"Sum = {m.add(1,2)}")

print("\nTask 6")
class Logger:
  def __init__(self) -> None:
    print("object created")
  
  def __del__(self):
    print("object deleted")

l = Logger()
print(l)
del(l)
# print(l) # NameError

print("\nTask 7")
class Employee:
  def __init__(self, ) -> None:
    self.name = 'Omer Moazzam'
    self._salary = 1900000
    self.__ssn = 84
  
  def __str__(self) -> str:
    return f'Employee name: {self.name} \nEmployee SSN: {self.__ssn} \nSalary: {self._salary}'
  
e = Employee()
print(f"public value (Employee Name): {e.name}")
print(f"protected value (_salary): {e._salary}")
# print(f"private value (__ssn): {e.__ssn}") # AttributeError: 'Employee' object has no attribute '__ssn'

print("\nTask 8")
class Person:
  def __init__(self, name) -> None:
    self.name = name
  
  def __str__(self) -> str:
    return f"Name: {self.name}"
  
class Teacher(Person):
  def __init__(self, name, subject) -> None:
    super().__init__(name)
    self.subject = subject
    
  def __str__(self) -> str:
    return super().__str__() + f"\nSubject: {self.subject}"
  
teacher = Teacher("Omer Moazzam", "Object Oriented Programming")
print(teacher)

print("\nTask 10")
class Dog:
  def __init__(self, name, breed) -> None:
    self.name = name
    self.breed = breed
  
  def bark(self):
    print(f"The dog having name {self.name}, and breed {self.breed} barks every morning.")

d = Dog('Mufasa', 'Labrador')
d.bark()

print("\nTask 11")
class Book:
  total_books = 10
  
  @classmethod
  def increment_book_count(self):
    self.total_books += 1
    
book = Book()
print(f"Total books before increment: {book.total_books}") 
for i in range(10):
  book.increment_book_count()
print(f"Total books after increment: {book.total_books}") 

print("\nTask 15")
class A:
  def show(self):
    print('class A')

class B(A):
  def show(self):
    print('class B')
    
class C(A):
  def show(self):
    print('class C')

class D(B,C):
  pass

d = D()
d.show()

print("\nTask 20")
class InvalidAgeError(Exception):
  def check_age(self, age):
    try:
      if age < 18:
        raise InvalidAgeError("InvalidAgeError: age less than 18")
    except InvalidAgeError as e:
      print(e)
    
invalid_age = InvalidAgeError()
invalid_age.check_age(15)