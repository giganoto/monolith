from app import app, db

if __name__ == '__main__':
    from app import s3_client
    from app.database.models import Users, Posts

    with app.app_context():
        print(s3_client)
        db.create_all()

    app.run(debug=True, host="0.0.0.0")