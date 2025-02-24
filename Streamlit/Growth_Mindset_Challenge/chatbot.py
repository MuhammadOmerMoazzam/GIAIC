import streamlit as st
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

st.title("🤖 Chatbot")
if "toast_shown" not in st.session_state:
  st.toast("""We use the **Deepseek-R1 Reasoning model** for advanced, thoughtful outputs. Enjoy the conversation! ✨""", icon="🤗")
  st.session_state.toast_shown = True
  
  
# setting openrouter api key and default model
client = OpenAI(
  api_key=os.getenv("OPENROUTER_API_KEY"),
  base_url="https://openrouter.ai/api/v1"
)

if "deepseek_model" not in st.session_state:
  st.session_state["deepseek_model"] = "deepseek/deepseek-r1:free"

# managing chat history
if "messages" not in st.session_state:
  st.session_state.messages = []

for msg in st.session_state.messages:
  st.chat_message(msg["role"]).markdown(msg["content"])

# handling user input and openai response
promt = st.chat_input("How may I assist you?")
if promt:
  st.chat_message("user").markdown(promt)
  st.session_state.messages.append({
    "role":"user", "content": promt
  })

  with st.chat_message("assistant"):
    try:
      stream = client.chat.completions.create(
        model = st.session_state["deepseek_model"],
        messages=[
          {"role": msg["role"], "content":msg["content"]}
          for msg in st.session_state.messages
        ],
        stream=True
      )
    except Exception as e: 
      st.error(e.message) 
    else:
      response = st.write_stream(stream)
      st.session_state.messages.append({"role": "assistant", "content": response})
