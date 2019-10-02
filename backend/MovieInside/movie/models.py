from django.db import models

# Create your models here.

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

