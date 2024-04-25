# Use a base image with Python and the required dependencies
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Install the PostgreSQL development libraries
RUN apt-get update && apt-get install -y libpq-dev gcc

# Copy the requirements file to the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask app files to the container
COPY . .

# Expose the port that the Flask app will listen on
EXPOSE 5000

# Set the environment variable
ENV FLASK_APP=wsgi.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the Flask app using Gunicorn as the server
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
