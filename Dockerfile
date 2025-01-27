# Use official Node.js image from the Docker Hub
FROM node:16

# Copy the package.json and package-lock.json (if available)
# These files are required to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
