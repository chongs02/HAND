from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="notes",
                              on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.text
