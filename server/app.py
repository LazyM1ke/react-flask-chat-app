from flask import Flask, request
from config_server import *
from models import db_session

app = Flask(__name__)

app.config["SECRET_KEY"] = global_settings['secret_key']


# Главная страница
@app.route("/reg", methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return {'hui': 'hui'}
    if request.method == 'POST':
        return {'post': 'post'}


if __name__ == "__main__":
    db_session.global_init('db/data_base.db')
    app.run(debug=True)
