# Instagram Feed Clone (React)

## Project Overview

This project is a simple Instagram-style web application developed using React. The main idea was to recreate a social media feed where users can view posts that include videos, profile pictures, usernames, and captions. In addition, users can interact with posts by liking them. The focus of this project is to demonstrate how React components can be reused and structured to build a clean and functional user interface.

## Implementation Approach

The app was designed by analyzing the structure of a typical Instagram feed and breaking it into modular, reusable components. The App.jsx file manages the main feed, while the Navbar and PostCard components handle specific sections of the interface.

Post data is stored as objects in an array and dynamically rendered using the map() function. The PostCard component is fully reusable, accepting props such as username, media, caption, and profile.

User interactions, like liking a post, are handled locally using the useState hook. Media files are imported from the assets folder and displayed conditionally, depending on whether they are images or videos.

For styling, inline CSS is used to keep the design simple and functional, while maintaining a clean layout that mirrors social media feeds.

## Technology Stack

Framework: React (Vite)
State Management: React useState hook
Styling: Inline CSS
Form Handling: Not implemented
Data Fetching: Static data (no external API used)

## Setup Instructions

1. Clone the repository
   git clone [https://github.com/pemayangkid/02250363_WEB101_PA1.git]

2. Create a new React application using Vite
   npm create vite@latest my-app

3. Start the development server
   npm run dev

4. Open in browser
   http://localhost:3000

## Application Structure

-> Pages/Routes:
The application is a single-page interface handled by `App.jsx`, which displays the main feed.

-> Component Organization:

All components are organized inside the `src/components/` folder.
`Navbar.jsx` is responsible for the top navigation bar.
`PostCard.jsx` is a reusable component used to display individual posts.

-> State Management:
State is handled locally using the `useState` hook inside `PostCard.jsx` to manage user interactions like liking a post.

## Component Architecture
my-app/
├── index.html             # Main HTML file serving the React app
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Exact versions of installed npm packages
├── src/
│   ├── assets/
│   │   ├── images/        # Contains profile pictures and other images
│   │   └── videos/        # Contains videos used in posts
│   ├── components/
│   │   ├── Navbar.jsx      # Component for the top navigation bar
│   │   └── PostCard.jsx    # Reusable component to display individual posts
│   ├── App.jsx             # Main application component rendering the UI
│   ├── App.css             # Styles specific to App.jsx
│   ├── index.css           # Global styles for the application
│   └── main.jsx            # Entry point rendering the React app to the DOM
└── .gitignore              # Specifies files/folders to be ignored by Git

## Key Components

-> Navbar:
Purpose: Displays the top navigation bar similar to Instagram’s interface.
Props: None

-> PostCard:
Purpose: Represents a single post, including profile image, media content, caption, and like button.
Props: username, media, caption, profile

## Authentication Flow

Authentication has not been included in this project. The focus was mainly on building the user interface and demonstrating React concepts.

## Features Implemented

-> Instagram-style Feed Layout:
Designed using React components and simple CSS to achieve a clean and familiar layout.

-> Like/Unlike Functionality:
Implemented using the `useState` hook to allow users to toggle between liked and unliked states.

-> Media Display (Video/Image):
Conditional rendering is used to display either a video or an image depending on the media type.

-> Reusable Components:
The `PostCard` component is reused for multiple posts by mapping through a data array.

-> Profile Images:
Profile pictures are imported from the assets folder and displayed alongside each post.

## Conclusion

Overall, this project helped in understanding how React can be used to build structured and interactive user interfaces. It highlights the use of components, props, and state management while maintaining a simple and organized design.