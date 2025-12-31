# Last Word React

A social platform built with React where users can submit and view "last words" - meaningful quotes and messages. Features a real-time leaderboard, user authentication, and a beautiful glass-morphism inspired UI.

![React](https://img.shields.io/badge/React-18.3.1-blue.svg)

## Features

- 📝 **Submit Last Words**: Share your meaningful quotes (10-180 characters)
- 🏆 **Leaderboard**: View top submissions with user rankings
- 👤 **User Authentication**: Register and login system
- 🌍 **Country Flags**: Display country information for submissions
- ⏱️ **Time Tracking**: See when each submission was posted
- 🎨 **Modern UI**: Beautiful glass-morphism design with Semantic UI React

## Tech Stack

- **React** 18.3.1 - UI library
- **React Router DOM** 7.11.0 - Client-side routing
- **Semantic UI React** 2.1.5 - UI component library
- **Axios** 1.13.2 - HTTP client
- **Create React App** - Build tooling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Backend API server running (configured to run on `localhost:8080`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sametozalp/last-word-react.git
cd last-word-react
```

2. Install dependencies:
```bash
npm install
```

3. Configure the backend API endpoints in the service files:
   - Update `src/services/lastWordService.js` if your API endpoints differ
   - Update `src/services/authService.js` if your auth endpoints differ

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
last-word-react/
├── public/                 # Static files
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── layouts/           # Page components
│   │   ├── Content.jsx
│   │   ├── CountryDropdown.jsx
│   │   ├── Dashboard.jsx
│   │   ├── LastWordContainer.jsx
│   │   ├── LeaderBoard.jsx
│   │   ├── Login.jsx
│   │   ├── Nav.jsx
│   │   ├── Register.jsx
│   │   ├── SendWord.jsx
│   │   ├── SignedIn.jsx
│   │   └── SignedOut.jsx
│   ├── services/          # API services
│   │   ├── authService.js
│   │   └── lastWordService.js
│   ├── App.js            # Main app component
│   ├── App.css           # Global styles
│   └── index.js          # Entry point
└── package.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for best performance.

## API Configuration

The application expects a backend API with the following endpoints:

### Last Word Service
- `GET http://localhost:8080/api/last-word/v1/get-last-word` - Get the current last word
- `GET http://localhost:8080/api/last-word/v1/get-leader-board` - Get leaderboard
- `POST http://localhost:8082/api/last-word/v1/save` - Save a new last word

### Auth Service
- `POST http://localhost:8080/api/auth/v1/register` - User registration

Update these endpoints in the respective service files to match your backend configuration.

## Features Overview

### Dashboard
The main dashboard displays:
- Current reigning "last word" with author name and time elapsed
- Country flag (if available)
- Input form to submit new words
- Leaderboard sidebar

### Leaderboard
Shows the top submissions ranked by their performance, displaying:
- Rank number
- Submission text
- Author name with country flag
- Time elapsed since submission

### User Submission
Users can submit "last words" with:
- Minimum length: 10 characters
- Maximum length: 180 characters
- Character counter
- Real-time validation

## Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- UI components from [Semantic UI React](https://react.semantic-ui.com/)
- Icons and styling inspired by modern glass-morphism design trends
