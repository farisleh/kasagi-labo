# Kasagi Labo System

## Steps to Run

Run the following commands in sequence:

```bash
node src/generate_data.js  # Generate the random data file
docker build --no-cache -t kasagi-labo .  # Build the Docker image
docker run --rm -v "$(pwd)/data.txt:/app/data.txt" kasagi-labo  # Process the data inside Docker
