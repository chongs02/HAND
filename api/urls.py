
from django.urls import path, include
from rest_framework import routers
from .views import MovieEmotionView
from .api import RegistrationAPI, LoginAPI, UserAPI, NoteViewSet


router = routers.DefaultRouter()
router.register('movie-emotion', MovieEmotionView, 'movie-emotion')
router.register('notes', NoteViewSet, 'notes')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('knox.urls')),
    path('auth/register/', RegistrationAPI.as_view()),
    path('auth/login/', LoginAPI.as_view()),
    path('auth/user/', UserAPI.as_view())
]
