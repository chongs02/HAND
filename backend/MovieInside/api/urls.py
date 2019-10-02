
from django.urls import path, include
from .views import MovieEmotionView

urlpatterns = [
    path('', MovieEmotionView.as_view(), name = 'movie-emotion')
]