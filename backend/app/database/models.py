from app import db

class Users(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    posts_list = db.relationship("Posts", backref="post", lazy=True)


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.Integer, db.ForeignKey("users.id"))
    title = db.Column(db.String(20), nullable=False, unique=True)
    content = db.Column(db.String(1000), nullable=False)
    post_time = db.Column(db.String(), nullable=False)