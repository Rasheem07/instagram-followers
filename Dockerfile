# Step 1: Use a Node.js base image
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --legacy-peer-deps

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the port the app runs on (usually 3000 for Node.js)
EXPOSE 3000

# Step 7: Start the application
CMD ["npm", "start"]
