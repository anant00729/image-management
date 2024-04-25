import json
from functools import wraps
from flask import request, jsonify
from sqlalchemy.exc import SQLAlchemyError
from jsonschema import validate, ValidationError

def validate_req_body(schema):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            # Validate the JSON request body against the schema
            try:
                validate(request.json, schema)
            except ValidationError as e:
                return jsonify({'error': e.message}), 400

            # Call the decorated function with the validated data
            return f(*args, **kwargs)
        return wrapper
    return decorator
