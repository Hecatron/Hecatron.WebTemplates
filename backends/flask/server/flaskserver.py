"""
The flask server.
"""

import threading
from os import environ
from flask import Flask
from os import path

class FlaskServer(object):

    def __init__(self):
        """Class Initializer"""

        # Server host to listen on
        self.HostName = environ.get('SERVER_HOST', 'localhost')
        # Port to listen on
        self.Port = 0
        # thread used for running async
        self.flaskthread = None
        # Flask Application
        self.app = Flask(
                        __name__,
                        template_folder="views",
                        static_folder=path.abspath('wwwroot'),
                        static_url_path='/')

    def get_port(self):
        """Get a free port to host on"""
        try:
            serverport = environ.get('HTTP_SERVER_PORT', 'None')
            if serverport == 'None':
                self.Port = 0
            else:
                self.Port = int(serverport)
        except ValueError:
            self.Port = 0

    def start(self):
        """Start the Flask server, this blocks the thread"""
        self.app.run(self.HostName, self.Port)

    def start_async(self):
        """Start the Flask server async, non blocking"""
        self.flaskthread = threading.Thread(target=self.start)
        self.flaskthread.start()


# Declare a singleton class
flaskserv = FlaskServer()


import controllers
