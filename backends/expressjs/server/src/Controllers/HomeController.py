from ServerApp.FlaskServer import flaskserv
from flask import render_template
app = flaskserv.app

@app.route('/')
def home():
    return render_template(
        'home.html',
        title='PythonFlask.Vue.Vuetify2 Template'
    )
