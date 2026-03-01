# Project Branches Overview

This repository is organized into branches to demonstrate different stages of backend development.
## Branch Descriptions

### 📂 [01-express]([https://github.com/your-username/your-repo/tree/01-express](https://github.com/Ann00012/nodejs-hw/tree/01-express))
**Focus:** Express.js Middleware
* Implementation of custom and built-in **Express middleware**.
* Managing request/response cycles.
* Basic server configuration and error handling.

### 📂 [02-mongobd]([https://github.com/your-username/your-repo/tree/mongobd-02](https://github.com/Ann00012/nodejs-hw/tree/02-mongodb))
**Focus:** MongoDB Integration & CRUD Operations
* Connecting the application to a **MongoDB** database.
* Implementation of **CRUD** (Create, Read, Update, Delete) routing.
* Utilizing specialized **routing middleware** for database interaction and data validation.

### 📂 [03-validation](https://github.com/Ann00012/nodejs-hw/tree/03-validation)
**Focus:** Advanced Validation, Pagination & Filtering
* **Request Validation**: Integrated **Joi** and **Celebrate** to validate `req.body`, `req.query`, and `req.params`.
* **Custom Sanitization**: Implemented custom logic to validate **MongoDB ObjectIds** for secure document retrieval.
* **Pagination & Metadata**: Added server-side pagination (using `page` and `perPage`) providing total count and page calculation.
* **Search & Filtering**:
    * Enabled keyword search across `title` and `content` using **MongoDB Text Indexes**.
    * Implemented category filtering via `tag` query parameters.
