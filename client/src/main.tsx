import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeGoogleAnalytics } from "./lib/analytics";

// Initialize Google Analytics
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
initializeGoogleAnalytics(GA_MEASUREMENT_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// A task master file would ideally be implemented here or in a separate module.  
// This could involve a data structure to manage tasks, goals, and progress.  
// Consider using local storage, a database, or a dedicated task management library.