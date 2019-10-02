from movie.models import MovieEmotion
from rest_framework import serializers

class MovieEmotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieEmotion
        fields = ('id','movie_code','movie_title','laugh',
        'sad','depress','fear','lightness','heaviness','gratifying','immersion')
