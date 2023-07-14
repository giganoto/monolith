from flask import Blueprint, request
from app.admins import admins
from firebase_admin.auth import verify_id_token

blog = Blueprint("blog", __name__)

# ADMIN ONLY
@blog.route("/blog/create-post", methods=["POST"])
def create_post():
    from app.database.models import db, Posts, Users
    import json
    from app import s3_client
    import time

    auth_token = request.cookies.get("access_token")
    print('and the token is: ==>')
    print(auth_token)

    return {'message': "hi"}

    decrypted_token_data = (verify_id_token(auth_token))
    print(decrypted_token_data)

    blog_info = json.loads(request.form.get("blogData"))
    blog_image = request.files.getlist("blogImage")

    blog_author = Users.query.filter_by(email=decrypted_token_data["email"]).first()
    print(blog_author)

    if blog_author.email in admins:
        
        for index, image in enumerate(blog_image):
            import io
            file_like = io.BytesIO(image.read())
            s3_client.Bucket("giganoto").upload_fileobj(file_like, f'{image.filename}-{index}')
            url = "need to configured according to the domain name"

        blog_post = Posts(
            author = blog_author.id,
            title = blog_info["postTitle"],
            content = blog_info["postContent"],
            post_time = str(time.time()),
            blog_url = url
        )
        
        db.session.add(blog_post)
        db.session.commit()

        return {
            "message": "success"
        }, 201

    return {
        "message": "not authorized to create blog"
    }, 403

# ADMIN ONLY
@blog.route("/blog/update-post", methods=["POST"])
def update_post():
    
    from app.database.models import Posts, db

    post_to_update_info = request.get_json()

    post_to_update = Posts.query.filter_by(id=post_to_update_info["postId"]).first()
    post_to_update.content = post_to_update_info["content"]

    db.session.commit()

    print(post_to_update)

    return {
        "message": "successfully updated"
    }


# ADMIN ONLY
@blog.route("/blog/delete-post", methods=["DELETE"])
def delete_post():
    from app.database.models import Posts, db

    post_to_delete_info = request.get_json()

    post_to_delete = Posts.query.filter_by(id=post_to_delete_info["postId"]).first()
    db.session.delete(post_to_delete)
    db.session.commit()

    return {
        "message": "successfully deleted"
    }, 200