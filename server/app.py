from flask import Flask, request
from config_server import *
from models import db_session

app = Flask(__name__)

app.config["SECRET_KEY"] = global_settings['secret_key']


# Главная страница
@app.route("/", methods=['GET'])
def index():
    pass


@app.route("/kek", methods=['POST'])
def register():
    print(request.json())


if __name__ == "__main__":
    db_session.global_init('db/data_base.db')
    app.run(host="127.0.0.1", port=5000, debug=True)

