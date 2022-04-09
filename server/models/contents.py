import datetime
import sqlalchemy
from sqlalchemy import orm
from sqlalchemy_serializer import SerializerMixin
from .db_session import SqlAlchemyBase
from flask_login import UserMixin


class Contents(SqlAlchemyBase, UserMixin, SerializerMixin):
    __tablename__ = 'contents'
    id = sqlalchemy.Column(sqlalchemy.Integer,
                           sqlalchemy.ForeignKey("messages.id"), primary_key=True)
    content = sqlalchemy.Column(sqlalchemy.String, nullable=True)
