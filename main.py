from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

PORT = 8000
DIRECTORY = os.path.dirname(__file__)

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == '__main__':
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, Handler)
    print(f'Serving AOA calculator at http://localhost:{PORT}')
    print('Open this URL in your browser to use the app.')
    httpd.serve_forever()
