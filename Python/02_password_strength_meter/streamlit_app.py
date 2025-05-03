import streamlit as st
import re, secrets, string

st.title('Password Strength Meter')

common_passwords = [
    "123456", "123456789", "qwerty", "password", "12345678", "111111", "123123",
    "12345", "1234567890", "1234567", "qwerty123", "1q2w3e4r", "admin", "qwertyuiop",
    "password1", "123321", "000000", "iloveyou", "1234", "abcd1234", "letmein",
    "welcome", "monkey", "dragon", "football", "sunshine", "princess", "baseball",
    "shadow", "superman", "hello", "freedom", "whatever", "trustno1", "password123"
]

def check_password_strength(password):
  if password:
    # blacklist passwords
    if password.lower() in common_passwords:
      st.error("Avoid Blacklist Common Passwords❗")
      return
  
    score = 0
    
    # Length Check
    if len(password) >= 8:
        score += 1
    else:
        st.warning("❌ Password should be at least 8 characters long.")
    
    # Upper & Lowercase Check
    if re.search(r"[A-Z]", password) and re.search(r"[a-z]", password):
        score += 1
    else:
        st.warning("❌ Include both uppercase and lowercase letters.")
    
    # Digit Check
    if re.search(r"\d", password):
        score += 1
    else:
        st.warning("❌ Add at least one number (0-9).")
    
    # Special Character Check
    if re.search(r"[!@#$%^&*]", password):
        score += 1
    else:
        st.warning("❌ Include at least one special character (!@#$%^&*).")
    
    # Strength Rating
    if score == 4:
        st.success("✅ Strong Password!")
    elif score == 3:
        st.warning("⚠️ Moderate Password - Consider adding more security features.")
    else:
        st.error("❌ Weak Password - Improve it using the suggestions above.")

def generate_password(length=12):
  characters = string.ascii_letters + string.digits + string.punctuation
  return ''.join(secrets.choice(characters) for _ in range(length))


def main():
  # Get user input
  password = st.text_input("Enter your password: ")
  check_password_strength(password)
  
  st.subheader("Genearte a Password")
  col1, col2 = st.columns(2)
  with col1:
    generate = st.button("Generate")
      
  with col2:
    if generate:
      new_password = generate_password()
      st.code(new_password)
  
if __name__ == "__main__":
  main()