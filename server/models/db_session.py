import sqlalchemy as sa
import sqlalchemy.orm as orm
import sqlalchemy.ext.declarative as dec

from sqlalchemy.orm import Session

SqlAlchemyBase = dec.declarative_base()

__factory = None


def global_init(db_file):
    global __factory

    if __factory is not None:
        return

    if not db_file or db_file.strip() == "":
        raise Exception("Не указан файл базы данных.")

    conn_str = f"sqlite:///{db_file.strip()}?check_same_thread=False"

    print("Подключаемся к базе данных", conn_str)

    engine = sa.create_engine(conn_str, echo=False)

    __factory = orm.sessionmaker(bind=engine)

    from . import __all_models

    SqlAlchemyBase.metadata.create_all(engine)


def create_session() -> Session:
    global __factory
    return __factory()
