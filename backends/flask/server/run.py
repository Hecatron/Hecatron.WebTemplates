"""
This script runs the Flask server application using a development server.
"""

from flaskserver import flaskserv

if __name__ == '__main__':

    # Run Flask as a development server
    #flaskserv.get_port()
    flaskserv.Port = 3000
    flaskserv.start_async()
