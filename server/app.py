from flask import Flask, request, redirect
from config_server import *
from models import db_session
from models.users import User
from API import api

app = Flask(__name__)

app.config["SECRET_KEY"] = global_settings['secret_key']


# Регистрация пользователя
@app.route("/register", methods=['POST'])
def check_register_form():
    if request.method == 'POST':
        # Получаем json с данными
        try:
            db_sess = db_session.create_session()
            req = request.get_json()
            res = req['data']
            user = User(
                username=res['username'],
                email=res['email'],
            )
            user.set_password(res['password'])
            db_sess.add(user)
            db_sess.commit()
            return {'status': 'True'}
        except Exception as Error:
            print(f'Check register form error: {Error}')
            return {'status': 'False'}


# Авторизация пользователя
@app.route('/log', methods=['POST'])
def check_login_form():
    if request.method == 'POST':
        try:
            db_sess = db_session.create_session()
            login_data = request.get_json()['data']
            username = login_data['username']
            hashed_password = login_data['password']
            user = db_sess.query(User).filter(User.username == username).first()
            if user and user.check_password(hashed_password):
                return {'status': 'True'}
            else:
                return {'status': 'False'}
        except Exception as Error:
            print(f'Check login form error: {Error}')
    else:
        print('Handler "/log" (check_login_form) works only with post requests')


if __name__ == "__main__":
    db_session.global_init('db/data_base.db')
    # Подключение API
    try:
        app.register_blueprint(api.blueprint)
        print('API запущен...')
    except Exception as Error:
        print(f'Ошибка при подключении API: {Error}')
    app.run(host="127.0.0.1", port=5000, debug=True)
