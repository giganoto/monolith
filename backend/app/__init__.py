from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from app.blog.blog import blog
from app.users.users import users
import boto3
from botocore.client import Config

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
s3_client = boto3.resource(
    "s3",
    endpoint_url="https://cea4f9e4f759ff633f4e453ea9aabb85.r2.cloudflarestorage.com",
    aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY"),
    config=Config(signature_version="s3v4"),
)

app.register_blueprint(blueprint=blog)
app.register_blueprint(blueprint=users)
