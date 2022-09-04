from flask_restful import reqparse, abort, Api, Resource
from flask import jsonify
from models import db_session
from models.messages import Messages
from models.users import User

from API.AboutParser import about_parse


class AboutResources(Resource):
    def post(self):
        args = status_parse.parse_args()
        session = db_session.create_session()
        about_msg = args['about_msg']
        session.query(User).update().values(about=about_msg).where(User.username == args['username'])
        session.commit()
        return jsonify({'status': 'True'})