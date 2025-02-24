import streamlit as st
import pandas as pd 
import os
from io import BytesIO

if "toast_shown" not in st.session_state:
  st.toast("Welcome to **DataRefine**, where you can clean, convert, and visualize your data.💫", icon="🎊")
  st.session_state.toast_shown = True
  
st.title("Hi There🖐️, Let's Refine Some Data ")
st.markdown("Convert your documents from CSV to Excel or the other way around while cleansing the data.")

files_uploaded = st.file_uploader("Upload Files", type=["csv","xlsx"], accept_multiple_files=True)

if files_uploaded:
  for file in files_uploaded:
    file_extension = os.path.splitext(file.name)[-1].lower()

    print(f"{file} \n{file_extension}")
    if file_extension == ".csv":
      df = pd.read_csv(file)
    elif file_extension == ".xlsx":
      df = pd.read_excel(file)
    else:
      st.warning(f"Unsuported file type {file_extension}")
      continue

    st.markdown("### Preview of Data Head")
    st.dataframe(df.head())

    st.markdown("## <u>_Data Cleaning Options_</u>", unsafe_allow_html=True)
    if st.checkbox(f"Clean data for {file.name}"):
      if st.button("Remove duplicates"):
        df.drop_duplicates(inplace=True)
        st.success("Duplicates removed successfull! Please continue")
    

    st.markdown("### Select columns to Convert")
    cols = st.multiselect(
      f"Choose columns for {file.name}",
      options=df.columns, 
      default=df.columns)
    df = df[cols]
    
    st.markdown("## <u>_Visualization_</u>", unsafe_allow_html=True)
    if st.checkbox("View available charts for data analysis", key=file.name):
      selected_chart = st.selectbox(
        "Choose a Chart",
        options=["Bar Chart","Area Chart", "Line Chart", "Scatter Chart"],)
      if selected_chart == "Bar Chart":
        st.bar_chart(df.select_dtypes(include="number").iloc[:,:2])
      elif selected_chart == "Area Chart":
        st.area_chart(df.select_dtypes(include="number").iloc[:,:2])
      elif selected_chart == "Line Chart":
        st.line_chart(df.select_dtypes(include="number").iloc[:,:2])
      elif selected_chart == "Scatter Chart":
        st.scatter_chart(df.select_dtypes(include="number").iloc[:,:2])

    st.markdown("## <u>_Converion Options_</u>", unsafe_allow_html=True)
    file_type = st.radio("Select",options=["Excel", "CSV"], key=df.keys)
    buffer = BytesIO()
    if file_type == "Excel":
      df.to_excel(buffer, index=False)
      mime_type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      file_name =  file.name.replace(file_extension, ".xlsx")
    elif file_type == "CSV":
      df.to_csv(buffer, index=False)
      mime_type = "text/csv"
      file_name = file.name.replace(file_extension, ".csv")
    buffer.seek(0)
    
    st.download_button(
      f"Downloaded {file.name} as {file_type}",
      data = buffer,
      mime = mime_type,
      file_name = file_name)