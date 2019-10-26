from django.urls import path

from .views import Index, plot_data

urlpatterns = [
    path('', Index.as_view(), name='home'),
    path('ajax/plot_data/', plot_data, name='plot_data')
]

