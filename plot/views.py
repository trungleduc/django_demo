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
      data, predict_data, date_array = get_data(country)
      return JsonResponse({ "data": list(data), "predict_data" :list(predict_data), "date_array": list(date_array)})