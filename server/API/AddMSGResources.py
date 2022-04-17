import datetime

from flask_restful import reqparse, abort, Api, Resource
from flask import jsonify
from models import db_session
from models.messages import Messages
from models.users import User

from API.AddMSGParser import addmsg_parse


class AddMSGResource(Resource):
    def post(self):
        args = addmsg_parse.parse_args()
        session = db_session.create_session()
        from_user = session.query(User).filter(User.username == args['from']).first()
        to_user = session.query(User).filter(User.username == args['to']).first()
        message = Messages(
            to_id=to_user.id,
            from_id=from_user.id,
            message=args['message'],
            created_date=datetime.datetime.now()
        )
        session.add(message)
        session.commit()
        return jsonify({'status': 'True'})
