from flaskserver import flaskserv
from flask import render_template
app = flaskserv.app

@app.route('/', defaults={'path': '/'})
@app.route("/<path:path>")
def home(path):
    return render_template(
        'home.html',
        title='Flask Bootstrap Template'
    )

@app.errorhandler(404)
def send_index(path):
    return render_template(
        'home.html',
        title='Flask Bootstrap Template'
    )
