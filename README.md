# Express Student API Server

This repository contains a simple Express.js API server that manages student data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)


---

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:aderawmolla/nodeJsTraining.git
   cd nodeJsTraining

3. **install dependencies**:

                           
```bash

npm install
npm start
The server will run on http://localhost:3001.



3. **End points**:

you can test these apis using thunder client or postman

GET /api/getStudent/:id
Fetches a student by ID.

POST /api/createStudent
Creates a new student entry.

PUT /api/updateStudentDepartment/:id
Updates the department of a student by ID.

DELETE /api/deleteStudent/:id
Deletes a student by ID.

GET /api/filterStudent?name={searchTerm}
Filters students by name.

