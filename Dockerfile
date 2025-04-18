# Base image
FROM node:23

# Working directory
WORKDIR /web2

# Copy Dependencies files and install
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

#  App port
EXPOSE 3333

# Start the application
CMD ["npm", "run", "dev"]
