from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from movie.models import MovieEmotion
from .serializers import MovieEmotionSerializer



class MovieEmotionView(generics.ListAPIView):
    queryset = MovieEmotion.objects.all()
    serializer_class = MovieEmotionSerializer

    # def list(self, request):
    #     queryset = self.get_queryset()
    #     serializer_class = self.get_serializer_class()
    #     serializer = serializer_class(queryset, many=True)

    #     page = self.paginate_queryset(queryset)
    #     if page is not None:
    #         serializer = self.get_serializer(page, many=True)
    #         return self.get_paginated_response(serializer.data)

    #     return Response(serializer.data)