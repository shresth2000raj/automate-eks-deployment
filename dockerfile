
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json from the host to the container
COPY package.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
