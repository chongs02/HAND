from django.shortcuts import render
from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from movie.models import MovieEmotion
from .serializers import MovieEmotionSerializer


class MovieEmotionView(viewsets.ModelViewSet):
    # serializer_class = MovieEmotionSerializer
    # queryset = MovieEmotion.objects.all()

    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = MovieEmotionSerializer

    def get_queryset(self):
        return self.request.user.notes.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
