from flask import Flask
from config_server import *
from models import db_session

app = Flask(__name__)

app.config["SECRET_KEY"] = global_settings['secret_key']


# Главная страница
@app.route("/", methods=['GET'])
def index():
    return 'Can you feel my heart'


if __name__ == "__main__":
    db_session.global_init('db/data_base.db')
    app.run(host="127.0.0.1", port=5000, debug=True)
