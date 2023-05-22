from app import app, db

if __name__ == '__main__':
    from app.database.models import Users

    with app.app_context():
        db.create_all()

    app.run(debug=True)