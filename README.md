# 💊 Drug Monitor

![Drug Monitor App](assets/images/pillorganizer.jpg)

## 📋 Overview

**Drug Monitor** is a comprehensive web application designed to help elderly people and caregivers effectively manage prescription medications. The app simplifies medication tracking, dosage scheduling, and purchase planning to ensure medications are never missed or run out unexpectedly.

### 🎯 Purpose

For older people on multiple medications, it can be challenging to:

- Remember what medications to take and when
- Track daily dosage schedules
- Calculate when to restock medications
- Plan bulk purchases efficiently

Drug Monitor solves these problems by providing an intuitive interface for medication management.

## ✨ Features

### 🏠 **Home Dashboard**

- Quick navigation to key features
- Overview of medication management tools

### 📊 **Medication Management**

- **Add New Drugs**: Register medications with detailed information
- **Edit Existing Drugs**: Update medication details as needed
- **Delete Medications**: Remove discontinued medications
- **View All Medications**: Comprehensive list with all drug information

### 💊 **Dosage Tracking**

- Display daily medication schedules
- Format: `XX-morning,XX-afternoon,XX-night`
- Clear visualization of when and how much to take

### 🛒 **Smart Purchase Calculator**

- **Dynamic Calculation**: Enter desired number of days to calculate exact quantities needed
- **Cards to Buy**: Calculate number of medication cards required
- **Packs to Buy**: Determine how many packs to purchase
- **Total Dosage**: Shows total medication needed for the specified period
- **Real-time Updates**: Instantly recalculates when changing the number of days

### 🔐 **Data Validation**

- **Name Validation**: Drug names must be longer than 5 characters
- **Dosage Format**: Strict format validation for dosage input
- **Quantity Limits**: Sensible limits on cards, packs, and daily intake
- **Input Sanitization**: Prevents invalid data entry

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine
- **Styling**: Bootstrap 5 + Custom CSS
- **JavaScript**: jQuery for dynamic interactions
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📁 Project Structure

```
drug-monitor/
├── 📄 server.js                 # Main application entry point
├── 📄 package.json             # Dependencies and scripts
├── 📄 .env                     # Environment variables
├── 📁 assets/                  # Static files
│   ├── 📁 css/                 # Stylesheets
│   ├── 📁 js/                  # Client-side JavaScript
│   └── 📁 images/              # Images and favicons
├── 📁 server/                  # Backend logic
│   ├── 📁 controller/          # Request handlers
│   ├── 📁 database/            # Database connection
│   ├── 📁 middlewares/         # Validation and middleware
│   ├── 📁 model/               # Database schemas
│   ├── 📁 routes/              # API and view routes
│   └── 📁 services/            # Business logic
└── 📁 views/                   # EJS templates
    ├── 📄 *.ejs                # Page templates
    └── 📁 includes/            # Reusable components
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/myuyen0304/drug-monitor.git
   cd drug-monitor
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   PORT=3000
   BASE_URI=http://localhost
   MONGO_STR=mongodb://localhost:27017/drugdb
   ```

   **Environment Variables:**

   - `PORT`: Server port (default: 3000)
   - `BASE_URI`: Base URL for the application
   - `MONGO_STR`: MongoDB connection string

4. **Database Setup**

   Ensure MongoDB is running locally or update `MONGO_STR` with your cloud database URL.

5. **Start the application**

   ```bash
   npm start
   ```

6. **Access the application**

   Open your browser and navigate to: `http://localhost:3000`

## 📖 Usage Guide

### Adding a New Medication

1. Navigate to "Manage" → "New Drug"
2. Fill in the required information:
   - **Drug Name**: Medication name (>5 characters)
   - **Tablets per Card**: Number of tablets in one card
   - **Tablets per Pack**: Number of tablets in one pack
   - **Taken per Day**: Daily tablet intake
   - **Dosage**: Format as `XX-morning,XX-afternoon,XX-night`
3. Click "Add Drug"

### Planning Purchases

1. Go to "Purchase" page
2. Enter the number of days you want to buy medication for
3. Click "Enter" to see calculations:
   - Cards needed
   - Packs to purchase
   - Total dosage for the period

### Managing Existing Medications

1. Visit the "Manage" page
2. View all medications in a table format
3. Use edit (✏️) or delete (🗑️) actions as needed

## 🔧 API Endpoints

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | `/`                   | Home page                  |
| GET    | `/manage`             | Medication management page |
| GET    | `/dosage`             | Dosage information page    |
| GET    | `/purchase`           | Purchase calculation page  |
| GET    | `/add-drug`           | Add new medication form    |
| GET    | `/update-drug?id=:id` | Edit medication form       |
| POST   | `/api/drugs`          | Create new medication      |
| GET    | `/api/drugs`          | Get all medications        |
| GET    | `/api/drugs?id=:id`   | Get specific medication    |
| PUT    | `/api/drugs/:id`      | Update medication          |
| DELETE | `/api/drugs/:id`      | Delete medication          |

## 🌐 Live Demo

Visit the live application: [https://drug-monitor.herokuapp.com](https://drug-monitor.herokuapp.com)

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.


