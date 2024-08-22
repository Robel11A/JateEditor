# JateEditor

# Text Editor Starter Code

## Description

Just Another Text Editor (JATE) is a Progressive Web Application (PWA) that functions as a versatile text editor. The application is designed to work seamlessly both online and offline, making it a reliable tool for creating and saving notes, code snippets, or any other text content. JATE utilizes multiple data persistence methods, ensuring that your content is saved even if one storage option is not supported by the browser.

The application leverages modern web technologies, including IndexedDB for client-side storage, service workers for offline functionality, and Webpack for bundling assets. It can be installed directly on your device, allowing you to access it as a native application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

To install and run the application locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone <https://github.com/Robel11A/JateEditor>
    cd JATE
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application in development mode:**
    ```bash
    npm run start :dev
    ```

4. **Build the application for production:**
    ```bash
    npm run build
    ```

5. **Start the production server:**
    ```bash
    npm start
    ```

## Usage

Once the application is running, you can start using JATE to edit text. The content you type is automatically saved using IndexedDB when the editor loses focus. You can install the application on your device by clicking the install button, making it accessible as a standalone app.

## Features

- **Offline functionality:** JATE works without an internet connection, ensuring you can always access your content.
- **Data persistence:** Content is saved using IndexedDB, with fallback to `localStorage`.
- **PWA:** The app can be installed on your device, allowing access as a native application.
- **Webpack bundling:** Modern JavaScript and CSS are bundled using Webpack.
- **Service Workers:** Utilizes Workbox to cache assets and ensure offline access.

### screenshot 
