from flask_restful import reqparse, abort, Api, Resource
from flask import jsonify
from models import db_session
from models.users import User


def abort_if_news_not_found(user_id):
    session = db_session.create_session()
    news = session.query(User).get(user_id)
    if not news:
        return {'status': 'False', 'message': 'User not found'}


class UserResource(Resource):
    def get(self, user_id):
        abort_if_news_not_found(user_id)
        session = db_session.create_session()
        user = session.query(User).get(user_id)
        return jsonify({'user': user.to_dict(
            only=('id', 'username', 'email', 'created_date'))})


class UsersResources(Resource):
    def get(self):
        session = db_session.create_session()
        users = session.query(User).all()
        return jsonify({'users': [item.to_dict(
            only=('id', 'username', 'email', 'created_date')) for item in users]})
