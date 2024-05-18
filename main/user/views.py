from . import product
from flask import jsonify, request
from main.product.middleware import validate_req_body
from main.models import user_update_schema, User
from flask_cors import cross_origin

# Create Product
@product.route('/user_login', methods=['POST'])
@cross_origin()
@validate_req_body(user_update_schema)
def user_login():
    username = request.json.get('username', '')
    password = request.json.get('password', '')

    # Check if username exists in the database
    user = User.query.filter_by(username=username).first()
    if user:
        # If the username exists, check if the password matches
        if user.password == password:
            # Authentication successful
            return jsonify({'status': True, 'message': 'Login successful!'})
        else:
            # Password doesn't match
            return jsonify({'status': False,'error': 'Incorrect password!'}), 401
    else:
        # Username doesn't exist
        return jsonify({'status': False, 'error': 'User not found!'}), 404