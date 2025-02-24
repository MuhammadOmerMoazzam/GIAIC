import streamlit as st
import os

st.logo(
    image=os.path.join(os.getcwd(), "images", "logo.svg"),
    icon_image=os.path.join(os.getcwd(), "images", "logo.svg"),
  )

def home():
  st.balloons()
  st.title("All-in-One Assistant")
  st.subheader("Explore AI-Powered Chat, Data Visualization & More")

  c1, c2 = st.columns(2)
  column_data = {
     "col1":{
        "heading":"🤖 Smart Chat", 
        "text":"Achieve optimal results through engagement with open-source high reasoning models by asking questions and receiving AI-powered answers",
        "page_link":"chatbot.py",
        "button":{"label":"Try Chatbot →", "id":"chatbot_btn"}
      },
     "col2":{
        "heading":"📊 Data Refiner", 
        "text":"Enhance your analysis by changing and cleaning the data to meet your requirement, then bring it to life with stunning charts and visuals.",
        "page_link":"data_refine.py",
        "button":{"label":"Upload & Visualize →", "id":"visualization_btn"}
      },
    }
  def show_column_data(column, col: dict):
    try:
      with column:
        st.markdown(f"""
        <div style="padding: 20px; border-radius: 10px; background: #F4F6F6; color: #0E1117; margin-bottom: 10px">
        <h2>{col.get("heading")}</h2>
        <p>{col.get("text")}</p>
        </div>
        """, unsafe_allow_html=True)
        if st.button(col.get("button").get("label"), key={col.get("button").get("id")}):
            st.switch_page(col.get("page_link"))
    except Exception as e:
      st.error(e)

  show_column_data(c1, column_data["col1"])
  show_column_data(c2, column_data["col2"])


try:
  pg = st.navigation([
    st.Page(home, title="Home"), 
    st.Page("chatbot.py", title="Chatbot"),
    st.Page("data_refine.py", title="DataRefine")
  ])
  pg.run()
except Exception as e:
  st.error(e)
