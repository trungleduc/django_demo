from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.edit import FormView
from django.http import JsonResponse
# Create your views here.
import random
import numpy as np
from .compute import get_data

class Index(FormView):
  def get(self, request):
    
    return render(request, 'plot/index.html')

  def post(self, request):
    pass


def plot_data(request):
  if request.is_ajax() :
    if request.method == 'GET':    
      country = request.GET.get('country', "France")
      data_select = request.GET.get('data_select', "all")
      if data_select != "all":
        ret = {}
        data, predict_data, date_array = get_data(country, data_select)
        ret[data_select] = {"data": list(data), "predict_data": list(predict_data), "date_array": list(date_array)}
      else:
        ret = {}
        for select in ["confirmed", "dead", "recovered"]:
          data, predict_data, date_array = get_data(country, select, False)
          data_length = len(data)
          ret[select] = {"data": list(data), "predict_data": predict_data, "date_array": list(date_array)}
        # confirmed_data = ret["confirmed"]["data"]
        # confirmed_date = ret["confirmed"]["date_array"]
        # dead_data = ret["dead"]["data"]
        # dead_date = ret["dead"]["date_array"]
        # rev_data = ret["recovered"]["data"]
        # rev_date = ret["recovered"]["date_array"]
        # remaining = []
        # for i in range(len(confirmed_data)):
        #   date = confirmed_date[i]
        #   try:
        #     dead_index = dead_date.index(date)
        #     dead = dead_data[dead_index]
        #   except:
        #     dead = 0
        #   try:
        #     rev_index = rev_date.index(date)
        #     rev = rev_data[rev_index]
        #   except:
        #     rev = 0
        #   remaining.append(confirmed_data[i] - dead- rev)
        # ret["remaining"] = remaining
      return JsonResponse(ret)