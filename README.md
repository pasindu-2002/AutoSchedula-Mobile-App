# AutoSchedula

AutoSchedula is a time management tool created to help the National Institute of Business Management (NIBM) in Sri Lanka streamline the process of timetable generation and management for lecturers and students. The application is built as a web and mobile app solution to facilitate automatic timetable creation and scheduling, reducing the manual workload and minimizing errors.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Database](#database)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About the Project

AutoSchedula is a solution designed to address the complexities of timetable management at NIBM. The project includes a **web application** and a **mobile application**:
- **Web Application**: Primarily used by administrators to set parameters and manage schedules.
- **Mobile Application**: Enables lecturers and students to view their schedules conveniently on the go.

## Features

- **Automatic Timetable Generation**: Generate timetables based on availability and preferences.
- **User Roles**: Role-based access for administrators, lecturers, and students.
- **Real-Time Updates**: Schedules update automatically when changes are made.
- **Mobile Accessibility**: Access schedules anytime with the React Native mobile app.
- **User-Friendly Interface**: Simple and intuitive design for ease of use.

## Tech Stack

**Frontend**:
- Web: HTML, CSS, JavaScript
- Mobile: React Native

**Backend**:
- Java Spring Boot

**Database**:
- MySQL

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) and npm for mobile app development
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) for backend development
- [MySQL](https://dev.mysql.com/downloads/) for the database

### Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/AutoSchedula.git

2. **Backend Setup (Java Spring Boot):**:
- Navigate to the backend folder.
- Install dependencies and set up environment variables if needed.
- Start the Spring Boot server.

3. **Frontend Setup**:

- For the web app, open the web directory and use any preferred local server to run the HTML/CSS/JavaScript files.
- For the mobile app, navigate to the React Native project folder and run:
   ```bash
   npm install
   npx react-native run-android # For Android
   npx react-native run-ios # For iOS (if using macOS)

3. Database Setup:

- Set up a MySQL database and configure the connection details in the backend's application properties file.

## Database
AutoSchedula uses MySQL to store timetable data, user information, and other relevant information.

## Usage
1. Login as an administrator to access timetable generation features.
2. Manage Timetables: Configure, add, or edit timetable slots for students and lecturers.
3. Mobile Access: Students and lecturers can view their personalized timetables on the mobile app.


## Screenshot
<img src="https://github.com/user-attachments/assets/e67b12bc-aa31-4623-98b4-ede085585a6b" width= 30% height= 30% alt="Image 1">

<img src="https://github.com/user-attachments/assets/58b8e206-96ae-4ec5-afe6-b0705777816d" width= 30% height= 30% alt="Image 2">






