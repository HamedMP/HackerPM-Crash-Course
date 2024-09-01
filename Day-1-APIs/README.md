# HackerPM Day 1: REST API Server

This repository contains a simple REST API server implemented in Node.js, demonstrating basic CRUD operations. It's part of the HackerPM course on APIs, designed to help Product Managers understand the fundamentals of API development.

## Features

- Basic HTTP server setup
- Endpoints for GET, POST, PUT, and DELETE operations
- In-memory data storage for demonstration purposes
- Error handling for various scenarios

## Endpoints

1. `/api/hello` (GET): Returns a simple greeting message
2. `/api/echo` (POST): Echoes back the sent data
3. `/api/items` (GET, POST, PUT, DELETE): Performs CRUD operations on items

## Installation

Before running the server, you need to install Node.js. Here are instructions for different operating systems:

### Windows

1. Visit the official Node.js website: https://nodejs.org/
2. Download the Windows Installer (.msi) for the LTS version.
3. Run the installer and follow the installation wizard.

### macOS

1. Using Homebrew (recommended):
   - Open Terminal and run: `brew install node`
2. Using the official installer:
   - Visit https://nodejs.org/
   - Download the macOS Installer (.pkg) for the LTS version.
   - Run the installer and follow the installation wizard.

### Linux (Ubuntu/Debian)

1. Open Terminal and run the following commands:

   ```
   sudo apt update
   sudo apt install nodejs npm
   ```

2. To install the latest version, you can use nvm (Node Version Manager):
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   nvm install node
   ```

After installation, verify Node.js is installed by running: `node --version`

## Usage

1. Ensure you have Node.js installed on your system (see Installation section).
2. Clone this repository.
3. Navigate to the project directory.
4. Run the server:

   ```
   node server.js
   ```

5. Open your browser and navigate to `http://localhost:1000/api/hello` to see the greeting message.

## Contributing

We welcome contributions to this project! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
