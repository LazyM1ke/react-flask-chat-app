from flask_restful import reqparse

addmsg_parse = reqparse.RequestParser()
addmsg_parse.add_argument('from', required=True)
addmsg_parse.add_argument('to', required=True)
addmsg_parse.add_argument('message', required=True)