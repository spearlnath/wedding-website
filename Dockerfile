# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Puppeteer-core dependencies
RUN apt-get update \
    && apt-get install -yq \
        gconf-service \
        libasound2 \
        libatk1.0-0 \
        libcups2 \
        libdbus-1-3 \
        libfontconfig1 \
        libgconf-2-4 \
        libgtk-3-0 \
        libnspr4 \
        libnss3 \
        libx11-xcb1 \
        libxcomposite1 \
        libxcursor1 \
        libxdamage1 \
        libxrandr2 \
        libxss1 \
        libxtst6 \
        fonts-ipafont-gothic \
        xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Install Puppeteer-core
RUN npm install puppeteer-core

# Install Lighthouse dependencies
RUN apt-get update \
    && apt-get install -yq \
        chromium \
        git \
    && rm -rf /var/lib/apt/lists/*

# Clone Lighthouse repository
RUN git clone https://github.com/GoogleChrome/lighthouse.git

# Install Lighthouse CLI
RUN npm install lighthouse

# Define an environment variable for the Chrome executable path
ENV CHROME_PATH /usr/bin/google-chrome-stable

# Copy the rest of your application code to the working directory
COPY . .

# Expose any necessary ports
# EXPOSE ...

# Command to run your Puppeteer script
CMD ["node", "tests/lighthouse-test.js"]
