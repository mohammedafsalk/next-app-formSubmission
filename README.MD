# Nextjs-formapp

## Overview

A simple Next.js project designed for collecting and storing user details through a form. This README provides an overview of the project's key dependencies, features, and usage instructions.

## Dependencies

- **@reduxjs/toolkit**: A set of tools for efficient Redux development, providing utilities for managing state in a predictable way. Used to manage global state and store user details across components.

- **axios**: A promise-based HTTP client for making requests to the server. Utilized for asynchronous communication with the backend to save and retrieve user details.

- **bcryptjs**: A library for hashing and salting passwords, enhancing security when storing sensitive user information such as passwords in the database.

- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js. Used to interact with MongoDB and define the structure of the stored data, facilitating communication between the application and the database.

- **nanoid**: A small, secure, URL-friendly unique ID generator. Employed for creating unique identifiers, such as those used to generate links for accessing and retrieving saved user data.

- **next**: A React-based framework for building server-rendered applications. The foundation of the project, providing server-side rendering and an efficient development environment.

- **next-redux-wrapper**: A utility to simplify Redux integration with Next.js. Used to configure Redux store and wrap the Next.js application with the Redux Provider.

- **react**: A JavaScript library for building user interfaces. The core library for building the frontend components of the application.

- **react-dom**: A package that serves as the entry point to the DOM and server-rendered environments for React. Required for rendering React components in the application.

- **react-redux**: The official React bindings for Redux. Facilitates the integration of Redux with React components, enabling the management of global state.

- **react-spinners**: A library providing a collection of loading spinners and components. Used for displaying loading indicators or spinners during asynchronous operations.

- **uuid**: A library for generating universally unique identifiers (UUIDs). Used for creating unique identifiers, particularly for user data stored in the database.

## Features

- **Form Data Collection**: Users can submit their details through a user-friendly form.

- **Global State Management**: Redux is employed to manage global state, ensuring efficient communication between components.

- **Data Storage**: User details are stored securely in MongoDB using Mongoose for data modeling and interaction.

- **Unique User Links**: Users receive unique links for accessing and retrieving their saved data.

## Project Structure

Describe the key files and folders in your project, such as components, pages, Redux slices, etc.

## Getting Started

1. Clone the repository from [here](https://github.com/mohammedafsalk/next-app-formSubmission.git).
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Usage

Provide instructions on how users can interact with your application. Include information on how to fill out the form, view saved data, and retrieve data using the unique link.


