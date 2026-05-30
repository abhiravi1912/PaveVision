# PaveVision

PaveVision is a React dashboard for visualizing pothole reports and street condition data using Firebase and Leaflet maps.

## Features

- Real-time pothole feed and map visualization
- Interactive map view with location markers
- Dashboard statistics and summary cards
- Firebase-powered data connection
- Responsive React UI with routing for pages

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```

2. Start the development server:
   ```powershell
   npm start
   ```

3. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

- `src/App.js` — main application component
- `src/index.js` — React entry point
- `src/components/` — reusable UI components
- `src/pages/` — page-level route components
- `src/services/firebase.js` — Firebase configuration and services
- `src/styles/theme.css` — shared application styles

## Notes

- Update Firebase configuration in `src/services/firebase.js` before running the app.
- This project uses React Router DOM and React Leaflet for map integration.
