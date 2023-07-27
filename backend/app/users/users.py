from flask import Blueprint, request

users = Blueprint("users", __name__)

@users.route("/users/login", methods=["POST"])
def create_user():
    from app.database.models import Users
    from app import db
    from flask import make_response

    user_info = request.get_json()
    print(user_info)
    name = user_info["name"]
    email = user_info["email"]
    token = request.headers.get("Authorization")
    print(request.headers)


    check_user = Users.query.filter_by(email=email).first()

    if check_user:
        resp = make_response()
        resp.set_cookie('access_token', token, httponly= True, secure= True, samesite= 'None')
        resp.access_control_allow_origin = request.origin
        resp.headers.set("Access-Control-Allow-Credentials", 'true')

        return resp, 200

    user = Users(name=name, email=email)
    
    try:
        db.session.add(user)
        db.session.commit()

        resp = make_response()
        resp.set_cookie('access_token', token, httponly= True, secure= True, samesite= 'None')
        return resp

    except Exception as e:
        print(e)
        db.session.rollback()
        return {
            "error": e
        }, 400