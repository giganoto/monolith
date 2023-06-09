from flask import Blueprint, request

blog = Blueprint("blog", __name__)

@blog.route("/blog/create-post", methods=["PUT"])
def create_post():
    from app.database.models import db, Posts, Users

    blog_info = request.get_json()
    
    blog_author = Users.query.filter_by(email=blog_info["userData"]["email"]).first()
    blog_post = Posts(author=blog_author, title=blog_info["postData"]["postTitle"], content=blog_info["postData"]["postContent"], post_time=blog_info["postData"]["postTime"])
    blog_author.posts_list.append(blog_post)
    db.session.add(blog_post)
    db.session.commit()

    return {
        "message": "success"
    }, 201

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