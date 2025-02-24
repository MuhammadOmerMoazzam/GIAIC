import streamlit as st
st.logo(
    image="images/logo.svg",
    icon_image="images/logo.svg",
  )

def home():
  st.balloons()
  st.title("All-in-One AI Assistant")
  st.write("Hello World")

try:
  pg = st.navigation([
    st.Page(home, title="Home"), 
    st.Page("chatbot.py", title="Chatbot"),
    st.Page("data_visualization.py", title="Data Visualization")
  ])
  pg.run()
except Exception as e:
  st.error(e)



