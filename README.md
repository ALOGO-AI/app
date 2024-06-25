# ALOGO AI Project

Voice Assistant App

This project is a React Native application that provides a voice assistant interface in Fon, Dendi, and Yoruba languages. The application allows users to record audio, convert it to text using an API, and navigate to different screens based on the transcription.

## Features

- Voice recording and playback
- OTP verification with a 4-digit input
- Audio file conversion from `.m4a` to `.wav`
- User authentication: Login and Sign-up pages
- Bank functionalities: Account statement, card information, and money transfer forms

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/ALOGO-AI/app.git](https://github.com/ALOGO-AI/app.git)
    cd app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Install Expo CLI globally:**

    ```bash
    npm install -g expo-cli
    ```

## Running the App

1. **Start the development server:**

    ```bash
    expo start
    ```

2. **Open the app in Expo Go on your device or in an emulator.**

## Usage

### OTP Verification

The OTP verification page allows users to enter a 4-digit OTP. Each input field accepts only one digit.

### Audio Recording and Playback

Users can record audio by pressing a button. The audio is then sent to an API for transcription. The transcription is displayed on the screen, and the user can navigate to different screens based on the transcribed text.

### Audio Conversion

The app includes functionality to convert recorded audio from `.m4a` to `.wav` format.

### Bank Features

- **Login Page:** Users can log in with their credentials.
- **Sign-Up Page:** New users can create an account by providing their name, phone number, and password.
- **Account Statement:** View the account statement.
- **Card Information:** Display card information.
- **Money Transfer:** Fill out a form to transfer money to another account.

## Code Structure

- `App.js`: Main entry point of the application.
- `components/OTPVerificationPage.js`: OTP verification page with 4-digit input fields.
- `components/TransferFormPage.js`: Form for money transfers.
- `components/LoginPage.js`: User login page.
- `components/SignUpPage.js`: User sign-up page.
- `components/AccountStatementPage.js`: Page to display account statements.
- `components/CardInfoPage.js`: Page to display card information.
- `utils/audioUtils.js`: Utility functions for audio processing.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For questions or support, please contact [agossoukoudous25@gmail.com](mailto:agossoukoudous25@gmail.com).

