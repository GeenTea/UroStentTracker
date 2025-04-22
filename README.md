Here is the translated README for your project:

```markdown
# UroStentTracker

UroStentTracker is a web application for managing patients using urological stents. The application allows adding, editing, and deleting patient information, as well as tracking stent installation and removal dates.

## Features

- **Authentication**: Users can log in through the login page.
- **Main Menu**: View a list of patients with a search feature.
- **Add Patient**: A form to add a new patient.
- **Edit Patient**: Ability to edit existing patient data.
- **Notifications**: Display the number of patients with overdue stent removal dates.

## Technologies

- **Frontend**: React, React Router, Axios
- **Styling**: CSS, Bootstrap
- **Build Tool**: Vite

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository URL>
   cd UroStentTracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project in development mode:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
UroStentTracker/
├── public/               # Public files
├── src/                  # Source code
│   ├── components/       # Components
│   ├── pages/            # Pages
│   ├── index.css         # Global styles
│   ├── main.jsx          # Entry point
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

## API

The application interacts with the server through the following endpoints:

- `POST /login` — User authentication.
- `GET /patient` — Retrieve the list of patients.
- `POST /add-patient` — Add a new patient.
- `POST /edit-patient/:id` — Edit patient data.
- `DELETE /delete-patient/:id` — Delete a patient.

## Authors

This project was developed to manage patients with urological stents.