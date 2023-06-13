# DocuFlow
DocuFlow is an open-source, advanced yet simple full-stack application that revolutionizes document interaction. With its intuitive user interface, powerful features, and streamlined workspace management, DocuFlow transforms any document into an intelligent chatbot, enhancing productivity and simplifying information access.

# Features
* Document-to-Chatbot Conversion: Seamlessly convert various document formats, such as PDF, Word, and text files, into interactive chatbots.
* Intelligent Conversation: Utilize advanced natural language understanding (NLU) to enable dynamic and context-aware conversations with the chatbot.
* Sleek and User-Friendly Interface: Enjoy a visually appealing and intuitive user interface for an enhanced user experience.
* Efficient Workspace Management: Easily create, organize, and manage workspaces to facilitate collaboration and streamline document management.

# Installation
1. Clone the repository: ``` git clone https://github.com/shahupdates/docuflow.git ```
3. Installation: 
```
cd docuflow
npm install
```
4. Access the application through your web browser at 'http://localhost:3000'.


# Directory overview
```
DocuFlow/
├── backend/
│   ├── config/
│   │   └── ...
│   ├── controllers/
│   │   └── ...
│   ├── models/
│   │   └── ...
│   ├── routes/
│   │   └── ...
│   ├── app.js
│   ├── package.json
│   └── ...
└── frontend/
    ├── public/
    │   └── ...
    ├── src/
    │   ├── components/
    │   │   └── ...
    │   ├── pages/
    │   │   └── ...
    │   ├── services/
    │   │   └── ...
    │   ├── App.js
    │   ├── index.js
    │   ├── package.json
    │   └── ...
    └── ...
```
# File breakdown
```
backend/: This directory will contain the backend server code.
config/: Configuration files for the backend server.
controllers/: Controllers handling the application logic.
models/: Data models and schemas.
routes/: Route definitions for the API endpoints.
app.js: The entry point file for the backend server.
package.json: Configuration and dependencies for the backend server.
frontend/: This directory will contain the frontend code.

public/: Public assets, such as HTML files and images.
src/: Main source code directory.
components/: Reusable React components.
pages/: React components representing different pages of the application.
services/: Services for making API requests or handling other functionality.
App.js: The main component that acts as the entry point for the frontend.
index.js: The entry point file for the frontend.
package.json: Configuration and dependencies for the frontend.
```
# Technology Stack
* Backend: Node.js with Express.js
* Frontend: React.js
* Document Processing: PyPdf2
* Natural Language Understanding (NLU): Dialogflow (Google)
* Database: MongoDB

This stack offers seamless integration between the backend and frontend using Node.js and Express.js, providing a fast and efficient development experience. React.js is a widely adopted frontend framework that offers component-based development and a rich ecosystem of libraries and tools.

PyPDF2 is a great Python library for extracting text, images, and metadata from PDF files.

Dialogflow from Google provides an easy-to-use NLU platform with pre-built agents and machine learning capabilities, enabling you to create intelligent chatbots.

MongoDB, a flexible and scalable NoSQL database, complements the stack by providing a document-based data model that aligns well with the document-centric nature of your application.

This stack offers a smooth development experience and a good balance between popular, well-supported technologies

# Contributing
Contributions are welcome! Please follow these guidelines:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes with descriptive commit messages.
Push your branch to your forked repository.
Submit a pull request, explaining your changes in detail.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
