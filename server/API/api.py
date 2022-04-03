import flask
from flask import request

from models import db_session
from models import users
from config_server import super_user_token

blueprint = flask.Blueprint(
    'api',
    __name__,
    template_folder='templates'
)


# Получить информацию о пользователе по id
@blueprint.route('/api/profile/<int:profile_id>', methods=['GET'])
def get_profile_info(profile_id):
    if request.method == 'GET':
        try:
            db_sess = db_session.create_session()
            news = db_sess.query(users.User).get(profile_id)
            if not news:
                return flask.jsonify({'error': 'Not found'})
            return flask.jsonify(
                {
                    'profile': news.to_dict(only=(
                        'id', 'username', 'about', 'email'))
                }
            )
        except Exception as Error:
            print(f'get_profile_info Error: {Error}')
            return {'status': 'False'}
    else:
        print(f'This API request not available with not "GET" request')
        return {'status': 'False'}


# Удалить пользователя по id
@blueprint.route('/api/profile/delete', methods=['POST'])
def delete_profile():
    if request.method == 'POST':
        if not request.json:
            return flask.jsonify({'error': 'Empty request'})
        elif not all(key in request.json for key in
                     ['token', 'id']):
            return flask.jsonify({'error': 'Bad request'})

        db_sess = db_session.create_session()
        token = request.json['token']
        user_id = request.json['id']
        if token == super_user_token:
            user = db_sess.query(users.User).get(id)
            if not user:
                return flask.jsonify({'error': 'user not found'})
            else:
                db_sess.delete(user)
                db_sess.commit()
                return flask.jsonify({'success': 'OK'})
        else:
            return {'error': 'invalid token'}
    else:
        print(f'This API request not available with not "POST" request')
        return {'status': 'False'}


# Получить всех пользователей
@blueprint.route('/api/get_users', methods=['GET'])
def get_users_api():
    if request.method == 'GET':
        try:
            db_sess = db_session.create_session()
            user_list = db_sess.query(users.User).all()
            return flask.jsonify(
                {
                    'data':
                        [item.to_dict(only=('id', 'username', 'email', 'created_date'))
                         for item in user_list]
                }
            )
        except Exception as Error:
            print(f'get_users_api function error: {Error}')
            return {'status': 'Error'}
    else:
        print(f'This API request not available with not "GET" request')
        return {'status': 'False'}
