from flask import Flask, request, redirect
from config_server import *
from models import db_session
from models.users import User

app = Flask(__name__)

app.config["SECRET_KEY"] = global_settings['secret_key']


@app.route("/register", methods=['POST'])
def register():
    if request.method == 'POST':
        # Получаем json с данными
        try:
            db_sess = db_session.create_session()
            req = request.get_json()
            res = req['data']
            user = User(
                name=res['username'],
                email=res['email'],
            )
            user.set_password(res['password'])
            db_sess.add(user)
            db_sess.commit()
            return {'status': 'True'}
        except Exception as Error:
            print(f'Register error: {Error}')
            return {'status': 'False'}



if __name__ == "__main__":
    db_session.global_init('db/data_base.db')
    app.run(host="127.0.0.1", port=5000, debug=True)
