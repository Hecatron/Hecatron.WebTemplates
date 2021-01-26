import random
from datetime import datetime
from datetime import timedelta
from flaskserver import flaskserv
from models.weather_forecast import WeatherForecast
from flask import jsonify
app = flaskserv.app

Summaries = ['Freezing', 'Bracing', 'Chilly', 'Cool', 'Mild', 'Warm', 'Balmy', 'Hot', 'Sweltering', 'Scorching']

@app.route('/api/SampleData/WeatherForecasts', methods=['GET'])
def sample_data():
    data = []
    for idx in range(1, 5):
        newitem = WeatherForecast()
        newitem.DateFormatted = (datetime.now() + timedelta(days=idx)).strftime("%d/%m/%Y")
        newitem.TemperatureC = random.randrange(-20, 55)
        newitem.Summary = Summaries[random.randrange(len(Summaries))]
        data.append(newitem)
    ret = [e.serialize() for e in data]
    return jsonify(ret)
