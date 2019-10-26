from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.edit import FormView
from django.http import JsonResponse
# Create your views here.
import random
import numpy as np



class Index(FormView):
  def get(self, request):
    
    return render(request, 'plot/index.html')

  def post(self, request):
    pass


def plot_data(request):
  if request.is_ajax() :
    if request.method == 'GET':    
      data_size_raw = request.GET.get('data_size', 10)
      try:
        data_size = int(data_size_raw)
      except:
        data_size = 10

      data = np.random.rand(data_size)
      label = ["Label_{}".format(x) for x in range(int(data_size))]

      return JsonResponse({'array' : data.tolist(), "label": label})