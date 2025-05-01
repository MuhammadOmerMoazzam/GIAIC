import streamlit as st

st.title('Unit Convertor')

# dict of options 
options = {
  "Area": {
    "units":[
      "Square kilometer", "Square meter", "Square mile", "Square yard", "Square foot", "Square inch", "Hectare", "Acre"
    ], "siunit": "Square meter"
  },
  "Data Transfer Rate": {
    "units":[
      "Bit per second", "Kilobit per second", "Megabit per second", "Gigabit per second", "Terabit per second", "Byte per second", "Kilobyte per second", "Megabyte per second", "Gigabyte per second", "Terabyte per second"
    ], "siunit": "Bit per second"
  },
  "Digital Storage": {
    "units":[
      "Bit", "Kilobit", "Megabit", "Gigabit", "Terabit", "Byte", "Kilobyte", "Megabyte", "Gigabyte", "Terabyte"
    ], "siunit": "Byte"
  },
  "Energy": {
    "units":[
      "Joule", "Kilojoule", "Calorie", "Kilocalorie", "Watt hour", "Kilowatt hour", "Electron volt", "British thermal unit", "US therm", "Foot-pound"
    ], "siunit": "Joule"
  },
  "Frequency": {
    "units":[
      "Hertz", "Kilohertz", "Megahertz", "Gigahertz"
    ], "siunit": "Hertz"
  },
  "Fuel Economy": {
    "units":[
      "Mile per US gallon", "Mile per gallon", "Kilometer per liter", "Liter per 100 kilometers"
    ], "siunit": "Kilometer per liter"
  },
  "Length": {
    "units":[
      "Kilometer", "Meter", "Centimeter", "Millimeter", "Micrometer", "Nanometer", "Mile", "Yard", "Foot", "Inch", "Nautical mile"
    ], "siunit": "Meter"
  },
  "Mass": {
    "units":[
      "Kilogram", "Gram", "Milligram", "Microgram", "Nanogram", "Picogram", "Pound", "Ounce", "Stone", "Ton", "Long Ton", "Short Ton"
    ], "siunit": "Kilogram"
  },
  "Plane Angle": {
    "units":[
      "Degree", "Radian", "Gradian", "Arcminute", "Arcsecond", "Milliradian"
    ], "siunit": "Degree"
  },
  "Pressure": {
    "units":[
      "Pascal", "Kilopascal", "Bar", "Pound per square inch", "Atmosphere", "Millimeter of mercury", "Inch of mercury", "Torr"
    ], "siunit": "Pascal"
  },
  "Speed": {
    "units":[
      "Kilometer per hour", "Meter per second", "Mile per hour", "Knot"
    ], "siunit": "Meter per second"
  },
  "Temperature": {
    "units":[
      "Degree Celsius", "Degree Fahrenheit", "Kelvin"
    ], "siunit": "Degree Celsius"
  },
  "Time": {
    "units":[
      "Nanosecond", "Microsecond", "Millisecond", "Second", "Minute", "Hour", "Day", "Week", "Month", "Calendar Year", "Decade", "Century"
    ], "siunit": "Second"
  },
  "Volume": {
    "units":[
      "US liquid gallon", "US liquid quart", "US liquid pint", "US legal cup", "US fluid ounce", "US tablespoon", "US teaspoon", "Liter", "Milliliter", "Imperial gallon", "Imperial quart", "Imperial pint", "Imperial cup", "Imperial fluid ounce"
    ], "siunit": "Liter"
  },
}

# selecting main_quantity and fuctions to provide unit-options and SI unit relevant to it
main_quantity = st.selectbox("**Select the main unit**", options.keys(), index=6)

def get_unit_options(main_quantity):
  return options[main_quantity].get("units")

unit_options = get_unit_options(main_quantity)

def get_siunit(main_quantity):
  return options[main_quantity].get("siunit") 
  
siunit = get_siunit(main_quantity)

# if "calculated_value2" not in st.session_state:
#   st.session_state.calculated_value2 = 0

# if "calculated_value1" not in st.session_state:
#   st.session_state.calculated_value1 = 0
def set_calculated_values():
  global calculated_value1, calculated_value2
  calculated_value1 = calculated_value2 = 0

set_calculated_values()

col1, col2 = st.columns(2)
with col1:
  unit1 = st.selectbox(
    label=".", 
    options=unit_options, 
    key="unit1", 
    index=unit_options.index(siunit), 
    label_visibility="hidden")
  value1 = st.text_input(
    label=".", 
    value=eval(str(calculated_value1)), 
    key="value1", 
    label_visibility="hidden")

with col2:
  unit2 = st.selectbox(
    label=".", 
    options=unit_options, 
    key="unit2", 
    index=unit_options.index(siunit),
    label_visibility="hidden")
  value2 = st.text_input(
    label=".", 
    value=eval(str(calculated_value2)), 
    key="value2", 
    label_visibility="hidden")

print("------------",calculated_value2)

# formula and conversion
match main_quantity:
  case "Length":
    match unit1:
      case "Meter":
        match unit2:
          case "Centimeter":
            calculated_value2 = (value1 * 100)
            print("centimeter ", calculated_value2 )
          case "Kilometer":
            calculated_value2 = float(value1 / 1000)
            print("kilometer ", calculated_value2 )

  case "Area":
    match unit1:
      case "Square meter":
        match unit2:
          case "Square kilometer":
            print("test case2 area and break ")         
    