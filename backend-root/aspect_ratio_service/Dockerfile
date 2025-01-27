FROM python:3.11

# Set the working directory inside the container
WORKDIR /app

# Copy the application code to the container
COPY . /app

# Install dependencies from requirements.txt
# Update pip and install Python dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0

# Expose the port the service will run on
EXPOSE 8001

# Command to start the microservice
CMD ["uvicorn", "aspect_ratio:app", "--host", "0.0.0.0", "--port", "8001"]
