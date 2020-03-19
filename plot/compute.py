import csv
import pandas as pd
import numpy as np
import datetime
from astropy import modeling
    # list_country = []
    # for row in data.to_numpy():
    #     if not f"{row[0]}" == "nan":
    #       list_country.append(f'{row[1]}-{row[0]}')
    #     else:
    #       list_country.append(row[1])
    # print(sorted(list_country))

URL_CONFIRMED = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"

URL_DEAD = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv"

URL_RECOVERED = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv"

URL_LIST = {"confirmed" : URL_CONFIRMED,"dead" : URL_DEAD,"recovered" : URL_RECOVERED}


def get_data(country, data_select, predict = True):
  if data_select != "all":
    URL = URL_LIST[data_select]
    data = pd.read_csv(URL, sep=",")

    if "-" in country:
      country_name = country.split("-")[0]
      state_name = country.split("-")[1]
    else:
      country_name = country
      state_name = None

    select_country = data.loc[data["Country/Region"] == country_name].to_numpy()
    country_data = []
    if state_name == None:
      country_data = select_country[0][4:]
    else:
      for row in select_country:
        if row[0] == state_name:
          country_data = row[4:]
    start_index = -1
    for index in range(len(country_data)):
      if country_data[index] > 10:
        start_index = index
        break
    if (start_index < 0):
      return [], [], []

    data = country_data[start_index:]
    x_array = range(len(data))
    if predict:
      try:
        fitter = modeling.fitting.LevMarLSQFitter()
        model = modeling.models.Gaussian1D()  
        fitted_model = fitter(model, x_array, data )
        new_x = range(len(data) + 50)
        predict_data = fitted_model(new_x)
      except:
        predict_data = []
    else:
      predict_data = []
    start_date = datetime.datetime.strptime("22/01/2020", "%d/%m/%Y") + datetime.timedelta(days=start_index)
    date_array = []

    for i in range(0, len(data) + 50, 1):
      newDate = start_date + datetime.timedelta(days=i)
      date_array.append(newDate.strftime("%d/%#m"))
    
    return data, predict_data, date_array


