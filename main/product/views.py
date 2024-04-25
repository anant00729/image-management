from . import product
from flask import jsonify, request, url_for
from main.product.middleware import validate_req_body
from main.models import db, product_schema, products_schema, product_update_schema, Product, Size, Image, image_schema, images_schema, User, user_schema
from sqlalchemy.exc import IntegrityError
from flask_cors import cross_origin
import json
import os

# Create Product
@product.route('/product', methods=['POST'])
@cross_origin()
@validate_req_body(product_update_schema)
def add_product():
    product_id = request.json.get('product_id', '')
    name = request.json.get('name', '')
    description = request.json.get('description', '')
    colour = request.json.get('colour', '')
    size = request.json.get('size', '')

    # Convert the string value to Size enumeration if provided
    size_enum = None
    if size:
        try:
            size_enum = Size[size.upper()]
        except KeyError:
            return jsonify({"message": "Invalid size value"}), 400

    try:
        new_product = Product(name, description, colour, size_enum, product_id)
        db.session.add(new_product)
        db.session.commit()
        return jsonify({"message": "Product added successfully!"}), 200
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Duplicate product_id. Failed to add the product."}), 400
    except Exception as e:
        return jsonify({"message": "Error adding the product"}), 500

    return product_schema.jsonify(new_product)

# Get all products
@product.route('/product', methods=['GET'])
@cross_origin()
def get_product():
    all_products = Product.query.all()
    result = products_schema.dump(all_products)

    if not result:
        return jsonify({"message": "No products have been added."}), 404

    return jsonify(result)

# Get product by product id
@product.route('/product/<id>', methods=['GET'])
@cross_origin()
def get_single_product(id):
    product = Product.query.get(id)

    if not product:
        return jsonify({"message": "Product not found"}), 404

    return product_schema.jsonify(product)

# Update product by product id
@product.route('/product/<id>', methods=['PUT'])
@cross_origin()
def update_product(id):
    product = Product.query.get(id)

    if not product:
        return jsonify({"message": "Product with the specified ID not found"}), 404

    name = request.json.get('name', product.name)
    description = request.json.get('description', product.description)
    colour = request.json.get('colour', product.colour)
    size = request.json.get('size', product.size)
    product_id = request.json.get('product_id', product.product_id)


    # Convert the string value to Size enumeration if provided
    size_enum = None
    if size:
        try:
            size_enum = Size[size.upper()]
        except KeyError:
            return jsonify({"message": "Invalid size value"}), 400

    product.name = name
    product.description = description
    product.colour = colour
    product.size = size_enum
    product.product_id = product_id
    try:
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Duplicate product_id. Failed to add the product."}), 400
    except Exception as e:
        return jsonify({"message": "Error updating the product"}), 500

    return product_schema.jsonify(product)

# Delete product by product id
@product.route('/product/<id>', methods=['DELETE'])
@cross_origin()
def delete_product(id):
    product = Product.query.get(id)

    if not product:
        return jsonify({'message': 'Product not found'}), 404

    db.session.delete(product)
    db.session.commit()

    return jsonify({'message': 'Product deleted successfully'}), 200

@product.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']

    if image.filename == '':
        return jsonify({'error': 'No image selected'}), 400

    name = image.filename  # Assuming the name is sent as form data
    # Convert JSON string to Python dictionary
    json_img_info = json.loads(request.form.get('info'))

    # Save image info to the database
    new_image = Image(name=name, info=json_img_info)
    db.session.add(new_image)
    db.session.commit()

    image_path = os.path.join(os.getcwd(), 'client', 'build', 'uploads', image.filename)
    image.save(image_path)

    return jsonify({'message': 'Image uploaded successfully'}), 200

# Get product by image id
@product.route('/image/<id>', methods=['GET'])
@cross_origin()
def get_single_image(id):
    image = Image.query.get(id)

    if not image:
        return jsonify({"message": "Product not found"}), 404

    return image_schema.jsonify(image)

# Get all images
@product.route('/image', methods=['GET'])
@cross_origin()
def get_image():
    all_images = Image.query.all()
    result = images_schema.dump(all_images)

    if not result:
        return jsonify({"message": "No images have been added."}), 404

    return jsonify(result)

@product.route('/create_user', methods=['GET'] )
@cross_origin()
def create_user():
    new_user = User(username='asa404', password='123123123')
    db.session.add(new_user)
    db.session.commit()
    return {"message": "created"}


@product.route('/login', methods=['POST'])
@cross_origin()
def login():
    # Get the JSON data from the request body
    data = request.get_json()

    # Check if the 'username' and 'password' fields are present in the request
    if 'username' in data and 'password' in data:
        username = data['username']
        password = data['password']

        # Query the User table to get the record with the provided username
        user = User.query.filter_by(username=username).first()

        if not user:
            return jsonify({"status": False, "message": "User not found"}), 404
        # Check if a user with the provided username exists and if the password matches
        if user and user.password == password:
            return jsonify({"status": True, "message": "User found", "username": username}), 200
        else:
            return jsonify({"status": False, "message": "User not found"}), 404

    return {"status": False, "message": "something went wrong!"}




