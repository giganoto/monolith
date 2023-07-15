from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from app.blog.blog import blog
from app.users.users import users
import boto3
from botocore.client import Config
import firebase_admin
from firebase_admin import credentials
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
s3_client = boto3.resource(
    "s3",
    endpoint_url=f"https://{os.environ.get('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com",
    aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY"),
    config=Config(signature_version="s3v4"),
)

firebase_cred = credentials.Certificate("app/firebase.json")
firebase_app = firebase_admin.initialize_app(firebase_cred)

app.register_blueprint(blueprint=blog)
app.register_blueprint(blueprint=users)
