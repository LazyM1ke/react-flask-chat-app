import datetime

import flask
from flask_restful import reqparse, abort, Api, Resource
from flask import jsonify
from models import db_session
from models.messages import Messages
from models.users import User

from API.GetMessagesParser import get_msg_parser


class GetMessagesResource(Resource):
    def post(self):
        args = get_msg_parser.parse_args()
        session = db_session.create_session()
        from_user = session.query(User).filter(User.username == args['from']).first()
        to_user = session.query(User).filter(User.username == args['to']).first()

        from_id = from_user.id
        to_id = to_user.id

        messages = session.query(Messages).all()

        main_json = {'messages': []}
        '''
        {
            fromSelf: True
            message: message
        }
        {
            fromSelf: False
            message: message 2
        }
        '''
        dialog_list = []

        # Список сообщений в диалоге
        for message in messages:
            if (message.from_id == from_id and message.to_id == to_id) or (
                    message.from_id == to_id and message.to_id == from_id):
                dialog_list.append(message)

        for msg in dialog_list:
            if msg.from_id == from_id:
                main_json['messages'].append({
                    'fromself': 'True',
                    'content': msg.content,
                    'created_date': msg.created_date
                })
            else:
                main_json['messages'].append({
                    'fromself': 'False',
                    'content': msg.content,
                    'created_date': msg.created_date
                })
        return jsonify(main_json)
