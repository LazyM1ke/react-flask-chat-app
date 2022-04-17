from flask_restful import reqparse

get_msg_parser = reqparse.RequestParser()
get_msg_parser.add_argument('from', required=True)
get_msg_parser.add_argument('to', required=True)