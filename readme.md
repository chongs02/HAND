

## Dependency


**backend**
`django` : 2.2.5
`rest_framework` : 3.10.3
`corsheaders` : 3.1.1


1. folder 구조를 front와 back으로 나눈다

2. `django-admin startproject <project name> `
   - backend project 생성 (MovieInside)
3. `django-admin startapp <app name> `
   - movie app, api app 을 각각 생성한다
   
4. `setting.py`설정

```python

...


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'movie',                                  # 추가
    'api',                                    # 추가
    'rest_framework',                         # 추가
    'corsheaders'                             # 추가
]

### 추가
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ]
}

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',     # 추가
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',            # 추가
    'http://localhost:8000',            # 추가
    ]

...

```

5. movie app `models.py` 작성

```python
from django.db import models

class MovieEmotion(models.Model):

    id = models.AutoField(primary_key=True)
    movie_code = models.CharField(max_length=8)
    movie_title = models.CharField(max_length=128)
    laugh = models.PositiveSmallIntegerField()        # 웃김
    sad = models.PositiveSmallIntegerField()          # 슬픔
    depress = models.PositiveSmallIntegerField()      # 우울함
    fear = models.PositiveSmallIntegerField()         # 공포
    lightness = models.PositiveSmallIntegerField()    # 가벼움
    heaviness = models.PositiveSmallIntegerField()    # 무거움
    gratifying = models.PositiveSmallIntegerField()   # 통쾌함
    immersion = models.PositiveSmallIntegerField()    # 몰입감

    def __str__(self):
        return self.movie_title
```

6. movie app `admin.py` 작성
```python
from django.contrib import admin
from .models import MovieEmotion


admin.site.register(MovieEmotion)
```

7. MovieInside `urls.py` 작성

```python

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]

```

8. api app `urls.py` 작성

```python
from django.urls import path, include
from .views import MovieEmotionView

urlpatterns = [
    path('', MovieEmotionView.as_view(), name = 'movie-emotion')
]
```

9. api app `serializers.py` 작성

```python
from movie.models import MovieEmotion
from rest_framework import serializers

class MovieEmotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieEmotion
        fields = ('id','movie_code','movie_title','laugh',
        'sad','depress','fear','lightness','heaviness','gratifying','immersion')

```


10. api app `views.py` 작성

```python
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from movie.models import MovieEmotion
from .serializers import MovieEmotionSerializer



class MovieEmotionView(generics.ListAPIView):
    queryset = MovieEmotion.objects.all()
    serializer_class = MovieEmotionSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset, many=True)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        return Response(serializer.data)
```







