from main import db, ma
from enum import Enum
from marshmallow_enum import EnumField
from sqlalchemy.dialects.postgresql import JSON

# - Product name (text)
# - Product ID (number)
# - Product description (text area)
# - Product colour (text)
# - Product size (small, medium or large)

# Define Size enumeration
class Size(Enum):
    SMALL = 'small'
    MEDIUM = 'medium'
    LARGE = 'large'

# Product Class/Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, unique=True)
    name = db.Column(db.String(100))
    description = db.Column(db.Text)
    colour = db.Column(db.String(200))
    size = db.Column(db.Enum(Size))

    def __init__(self, name, description, colour, size, product_id):
        self.name = name
        self.description = description
        self.colour = colour
        self.size = size
        self.product_id = product_id

# Init Schema
class ProductSchema(ma.Schema):
    size = EnumField(Size, by_value=True)

    class Meta:
        fields = ('id', 'name', 'description', 'colour', 'size', 'product_id')

# Init Schema
product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

product_update_schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "description": {"type": "string"},
        "colour": {"type": "string"},
        "size": {"type": "string"},
        "product_id": {"type": "number"}
    },
    "required": ["name", "description", "colour", "size", "product_id"]
}

# User Class/Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def __init__(self, username, password):
        self.username = username
        self.password = password

# Init Schema
class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'password')

# Init Schema
user_schema = UserSchema()
users_schema = UserSchema(many=True)

user_update_schema = {
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"}
    },
    "required": ["username", "password"]
}

# Image Class/Model
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    info = db.Column(JSON)

    def __init__(self, name, info):
        self.name = name
        self.info = info

# Init Schema
class ImageSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'info')

# Init Schema
image_schema = ImageSchema()
images_schema = ImageSchema(many=True)

image_update_schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "info": {"type": "object"}
    },
    "required": ["name", "info"]
}


if __name__ == "_main_":
    print("conected to db")
