from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def placemarks(request):
    message = {"message": "Hello, World!"}
    return JsonResponse(message)
    return HttpResponse("Hello, World!")