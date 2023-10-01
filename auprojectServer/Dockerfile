# Use an official Node.js runtime (Alpine-based) as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application code into the container
COPY . .

# Expose the port your app is listening on (replace with your app's port if needed)
EXPOSE 5000

# Define the command to run your application (replace with your actual entry point)
CMD [ "node", "index.js" ]