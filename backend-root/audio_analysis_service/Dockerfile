FROM python:3.11

# Set the working directory inside the container
WORKDIR /app

# Copy the application code to the container
COPY . /app

# Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the service will run on
EXPOSE 8002

# Command to start the microservice
CMD ["uvicorn", "audio_analysis:app", "--host", "0.0.0.0", "--port", "8002"]
