from flask_restful import reqparse

status_parse = reqparse.RequestParser()
status_parse.add_argument('username', required=True)
status_parse.add_argument('status_msg', required=True)
