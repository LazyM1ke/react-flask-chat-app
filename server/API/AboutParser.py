from flask_restful import reqparse

about_parse = reqparse.RequestParser()
about_parse.add_argument('username', required=True)
about_parse.add_argument('about_msg', required=True)