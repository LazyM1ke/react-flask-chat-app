import flask
from flask import request

from server.models import db_session
from server.models import users

blueprint = flask.Blueprint(
    'api',
    __name__,
    template_folder='templates'
)


@blueprint.route('/api/profile/<int:profile_id>', methods=['GET'])
def get_one_news(profile_id):
    if request.method == 'GET':
        db_sess = db_session.create_session()
        # news = db_sess.query(users.User).get(profile_id)
        # if not news:
        #     return flask.jsonify({'error': 'Not found'})
        # return flask.jsonify(
        #     {
        #         'profile': news.to_dict(only=(
        #             'id', 'username', 'about', 'email'))
        #     }
        # )
        return {'status': 'ok'}
    else:
        print(f'This API request not available with not "GET" request')
        return {'status': 'False'}
