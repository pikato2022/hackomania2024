from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
def create_engine():
    engine = create_engine('sqlite:///test.db')
    Base.metadata.create_all(bind=engine)

# def create_session(engine)
# Session = sessionmaker(bind=engine)
# session = Session()