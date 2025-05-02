def menu():
  print("""\nWelcome to your Personal Library Manager!  
1. Add a book  
2. Remove a book  
3. Search for a book  
4. Display all books
5. Display statistics  
6. Exit  """)

books = []

def add_book(title, author, pub_year, genre,  have_read):
  books.append({
    "title":title,
    "author":author,
    "pub_year":pub_year,
    "genre":genre,
    "have_read": have_read
  })
    
  print("\nBook added successfully!")

def remove_book(title):
  for i, book in enumerate(books):
    if book["title"] == title:
      books.pop(i)
      print("\nBook removed successfully!")
      return
  print("\nBook not found in the library!")


def search_book():
    print("\nSearch by:")
    print("1. Title")
    print("2. Author")
    try:
      choice = int(input("Enter your choice: "))
      if choice == 1:
          title = input("Enter the title: ")
          found_books = [book for book in books if book["title"].lower() == title.lower()]
      elif choice == 2:
          author = input("Enter the author: ")
          found_books = [book for book in books if book["author"].lower() == author.lower()]
      else:
          print("Invalid Search Choice❗ Select (1 or 2) ")
          return

      if found_books:
          print("\nFound books:")
          count = 0
          for book in found_books:
              count += 1
              print(f"{count}. {book['title']} by {book['author']} ({book['pub_year']}) - {book['genre']} - {book['have_read']}")
      else:
          print("\nNo books found matching your search criteria.") 

    except ValueError:
      print("Invalid value type for choice, choose an integer")
    except Exception as e:
      print(e)

def display_all_books():
  print("\nYour Library: ")
  if books == []:
    print("Empty! No books found")
    return
  for i in range(len(books)):
    print(f"{i+1}. {books[i].get("title")} by {books[i].get("author")} ({books[i].get("pub_year")}) - {books[i].get("genre")} - {books[i].get("have_read")}")

def display_statistics():
  print(f"Total books: {len(books)}")
  try:
    print(f"Percentage read: {len([b for b in books if b.get("have_read") == "Read"]) / len(books) *100.0}%")
  except ZeroDivisionError:
    print("Percentage read: Unable to determine, no books found.")

def main():
  try:
    while True:
      menu()
      choice = int(input("Enter your choice: "))
      if choice == 1:
        title = input("Enter the book title: ")
        author = input("Enter the author: ")
        pub_year = input("Enter the publication year: ")
        genre = input("Enter the genre: ")
        have_read = input("Have you read this book? (yes/no): ")
        have_read = "Read" if have_read == "yes" or have_read == "y" else "Unread"

        add_book(title, author, pub_year, genre, have_read)

      elif choice == 2:
        title = input("Enter the title of the book to remove: ")

        remove_book(title)

      elif choice == 3:
        search_book()

      elif choice == 4:
        display_all_books()

      elif choice == 5:
        display_statistics()

      elif choice == 6:
        print("Library saved to file. Goodbye!")
        break

      else:
        print("Invalid Choice❗ Select from (1 to 6)")
          
  # to handle exceptions
  except ValueError as ve:
    print("Invalid value type for choice, choose an integer")
  except Exception as e:
    print(e)

if __name__ == "__main__":
  main()