#  Triple DES (3DES) in ECB mode

## Project Description

The project involves developing a web application using the MERN stack (MongoDB, Express.js, React, Node.js) to create a secure system for user registration, login authentication, and data encryption/decryption using Triple DES (3DES) in ECB mode.

### Key Features

- **User Registration:**
  Users can register with their first name, last name, email address, and password.
  Passwords are securely hashed before storage in the MongoDB database using bcrypt for enhanced security.

- **User Login:**
  Registered users can log in using their email address and password.
  Authentication is handled securely, comparing hashed passwords stored in the database using bcrypt.

- **Personalized Dashboard:**
  Upon successful login, users are greeted with their name displayed on the dashboard, indicating a successful login session.

- **Encryption and Decryption:**
  Includes a web page with functionality to perform Triple DES encryption and decryption in ECB mode.
  Uses a specific encryption key (E0BC6D3D4AEC8AFD97A237AEABCEE651) provided for encrypting and decrypting sample input data.

### Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Encryption:** CryptoJS library for Triple DES encryption/decryption in ECB mode

### Security Measures

- **Password Hashing:** User passwords are securely hashed using bcrypt before storage in the database, ensuring protection against unauthorized access.
- **Authentication:** Implements robust authentication mechanisms to verify user identity securely during login.

## Installation

1. Clone the repository
2. Navigate into the directory
3. Install dependencies:

```
cd frontend
npm install
cd ../backend
npm install
```

4. Set up MongoDB:
- Install MongoDB locally or use a cloud-hosted MongoDB service.
- Configure MongoDB URI in `backend/config/db.js`.

## Usage

1. Start the backend server:

```
cd backend
npm start
```
2. Start the frontend:
```
cd frontend
npm start
```