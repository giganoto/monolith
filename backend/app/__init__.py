from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from app.blog.blog import blog
from app.users.users import users

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

app.register_blueprint(blueprint=blog)
app.register_blueprint(blueprint=users)