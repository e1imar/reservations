# Reservation

This is a Single Page Application (SPA) for table reservation built using React, RTK Query, and Mock Service Worker. The application provides features for authentication and authorization, allowing users to reserve tables and view reserved tables. It utilizes RTK Query for efficient data fetching and state management, and Mock Service Worker to mock REST API endpoints.

## Features

The Table Reservation SPA includes the following features:

### Authentication/Authorization

    Users can register an account and log in.
    Authorized routes are protected, and only authenticated users can access them.

### Reservation Page

    Users can view a list of available tables.
    Users can reserve a table by selecting a date, time and number of person.
    Validation is performed to prevent conflicting reservations.
    Real-time updates are displayed for table availability.

### Reserved Tables Page

    Users can view a list of their reserved tables.
    Users can cancel their reservations.

### API Mocking with Mock Service Worker

Application uses Mock Service Worker to mock the REST API endpoints. The mock service worker intercepts network requests and provides mock responses, allowing you to work offline or simulate different scenarios without relying on a real backend service.

## Technologies used

- [React](https://reactjs.org/) single page application
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy) client side routing
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) data fetching and caching tool (state manager)
- [React bootstrap](https://react-bootstrap.github.io) UI tools
- [MSW](https://mswjs.io/) API mocking
- [Vite](https://vitejs.dev/) build tool


To view a live example, **[click here](https://reservate.vercel.app)**
