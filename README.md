# ScanForge - QR Code Generation

ScanForge is a platform built for generating QR codes quickly and efficiently. This repository contains the backend and frontend code for the ScanForge QR code generation application.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate QR codes from URLs, texts, or specific data inputs.
- Save generated QR codes with user-specific identification.
- User authentication and access control.
- Intuitive and responsive user interface for QR code generation.
- Search functionality to find previously generated QR codes.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Desktop**: Electron
- **QR Code Generation**: qr-image library
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: Bcrypt for password hashing, Jest for testing

## Installation

1. Clone the repository: `git clone https://github.com/evidence-codes/ScanForge.git`
2. Install dependencies:
   - Backend: `cd backend && npm install`
   - Frontend: `cd frontend && npm install`
3. Set up environment variables:
   - Create a `.env` file based on `.env.example` for both frontend and backend.
   - Fill in required credentials and keys.
4. Run the application:
   - Backend: `npm run dev` within the `backend` directory.
   - Frontend: `npm run dev` within the `frontend` directory.

## Usage

- Access the frontend application via the provided URL.
- Generate QR codes by providing URLs, texts, or other data inputs.
<!-- - Log in or sign up for an account to generate and manage QR codes. -->
<!-- - Save and organize QR codes for future use. -->

## Contributing

Contributions are welcome! If you find bugs or have suggestions:

- Open an issue to report problems or propose new features.
<!-- - Fork the repository, make changes, and submit a pull request for review. -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
