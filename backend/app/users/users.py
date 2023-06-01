from flask import Blueprint, request

users = Blueprint("users", __name__)

@users.route("/users/createuser", methods=["POST"])
def create_user():
    from app.database.models import Users
    from app import db

    user_info = request.get_json()
    name = user_info["name"]
    email = user_info["email"]

    user = Users(name=name, email=email)
    
    try:
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        print(e)
        db.session.rollback()
        return {
            "message": "user already exists"
        }, 400

    return "success"