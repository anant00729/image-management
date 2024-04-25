from flask import Flask, send_from_directory, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from decouple import config
from flask import jsonify
from flask_cors import CORS, cross_origin
# from main.models import User

import os

basedir = os.getcwd()

if config("SQLALCHEMY_DATABASE_URI", default='') != '':
    SQLALCHEMY_DATABASE_URI = config('SQLALCHEMY_DATABASE_URI', default='')
else:
    SQLALCHEMY_DATABASE_URI = os.environ['SQLALCHEMY_DATABASE_URI']


basedir = os.getcwd()

app = Flask(__name__, static_folder='../client/build', static_url_path='')
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['UPLOAD_FOLDER'] = 'uploads'  # Path to the uploads folder


db = SQLAlchemy(app)
ma = Marshmallow(app)

V1 = "/v1"

# Handle all types of exceptions and returns error in json format
@app.errorhandler(Exception)
@cross_origin()
def handle_all_exceptions(error):
    error_code = getattr(error, 'code', 500)
    error_message = "An error occurred."

    if error_code == 404:
        error_message = "Resource not found."
    elif error_code == 405:
        error_message = "Method not allowed for the requested URL."
    elif error_code == 500:
        error_message = "Internal server error."

    response = {
        "status": False,
        "http_error": error_code,
        "message": error_message
    }
    return jsonify(response), error_code


# import and register Product
from main.product import product
app.register_blueprint(product, url_prefix=f"{V1}/")

# Setup database and creates all the tables using the models classes that extends SQLAlchemy
def create_app():
    with app.app_context():
        # db.drop_all()
        db.create_all()


create_app()

@app.route('/uploads/<filename>')
@cross_origin()
def get_file(filename):
    return send_from_directory(app.static_folder + "/uploads/", filename)


# Serves React App
@app.route('/')
@cross_origin()
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

