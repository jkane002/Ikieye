from rest_framework.decorators import api_view
from rest_framework.response import Response

# Option is GET 
@api_view(['GET'])
def apiOverview(request):
    """Overview of the API"""
    api_urls = {
        'List':'/task-list/',
        'Detail View':'/task-detail/<str:pk>/',
        'Create':'/task-create/',
        'Update':'/task-update/<str:pk>/',
        'Delete':'/task-delete/<str:pk>/',
    }
    # To pass any other JSON-serializable object you must set the safe parameter to False
    return Response(api_urls)