# Project Title (Please replace with actual title)

A brief description of the project. (Please replace with actual description)

This project was bootstrapped with Vite.

## Folder Structure

```
.
├── public/                   # Static assets (3D models, images)
│   ├── desktop_pc/           # Assets for the desktop PC 3D model
│   └── planet/               # Assets for the planet 3D model
├── src/                      # Application source code
│   ├── assets/               # Images, logos, tech/company icons
│   ├── components/           # React UI components
│   │   └── canvas/           # React components for 3D canvases
│   ├── constants/            # Application-wide constants
│   ├── hoc/                  # Higher-Order Components
│   ├── styles/               # Styling files (though main styles are in index.css and tailwind)
│   └── utils/                # Utility functions
├── .gitignore                # Specifies intentionally untracked files that Git should ignore
├── index.html                # Main HTML entry point
├── package-lock.json         # Records exact versions of dependencies
├── package.json              # Project metadata and dependencies
├── postcss.config.cjs        # Configuration for PostCSS
├── tailwind.config.cjs       # Configuration for Tailwind CSS
├── vite.config.js            # Configuration for Vite
└── README.md                 # This file
```

### Key Files and Folders:

*   **`public/`**: This directory contains static assets that are not processed by the build tool (Vite). Files here are served directly from the root path during development and copied to the `dist` folder during build. It includes 3D models (`desktop_pc`, `planet`) and other public images.
*   **`src/`**: This is where the main application source code resides.
    *   **`src/assets/`**: Contains static assets like images (logos, background images, technology icons, company logos) that are imported into your JavaScript or CSS.
    *   **`src/components/`**: Holds all the React components of the application.
        *   **`src/components/canvas/`**: A specialized subdirectory for React components that manage or render 3D scenes/models using libraries like Three.js.
    *   **`src/constants/`**: Used for storing constant values that are used across different parts of the application (e.g., API endpoints, configuration keys, static text).
    *   **`src/hoc/`**: Contains Higher-Order Components (HOCs), which are functions that take a component and return a new component, often used for reusing component logic.
    *   **`src/styles/`**: While global styles are in `src/index.css` and Tailwind CSS is used, this folder might contain component-specific styles or other styling utilities (though the `ls` output didn't show specific files here, it's a common convention).
    *   **`src/utils/`**: Contains utility functions that can be reused throughout the project (e.g., helper functions for data manipulation, animations via `motion.js`).
    *   **`App.jsx`**: The main application component that orchestrates other components.
    *   **`main.jsx`**: The entry point of the React application, where the root component (`App`) is rendered into the DOM.
    *   **`index.css`**: Global stylesheets for the application.
*   **`index.html`**: The main HTML page that serves as the entry point for the application. Vite injects the bundled JavaScript into this file.
*   **`vite.config.js`**: Configuration file for Vite, the build tool and development server.
*   **`tailwind.config.cjs`**: Configuration file for Tailwind CSS, a utility-first CSS framework.
*   **`postcss.config.cjs`**: Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.
*   **`package.json`**: Contains project metadata, scripts (for development, building, etc.), and lists project dependencies.
*   **`package-lock.json`**: Automatically generated for any operations where npm modifies either the `node_modules` tree, or `package.json`. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode using Vite.<br />
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run preview`

Serves the production build locally. This is a good way to check if the production build works correctly before deploying.

## Running the Project

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will open the project in your default browser.

## Key Dependencies

This project utilizes several key libraries and frameworks:

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool and development server.
*   **Three.js**: A 3D graphics library, used here likely via `@react-three/fiber` and `@react-three/drei` for integrating 3D models into React.
*   **Framer Motion**: A library for creating animations.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **React Router DOM**: For handling routing within the application.
*   **EmailJS**: To enable sending emails directly from client-side JavaScript.
*   **React Vertical Timeline Component**: For creating vertical timelines.
*   **Maath**: A math helper library, often used with Three.js.

For a full list of dependencies, refer to the `package.json` file.
