import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to DocuFlow!</h1>
      <p>DocuFlow is an open-source, advanced yet simple full-stack application that revolutionizes document interaction. With its intuitive user interface, powerful features, and streamlined workspace management, DocuFlow transforms any document into an intelligent chatbot, enhancing productivity and simplifying information access.</p>
      
      <h2>Features</h2>
      <ul>
        <li>Document-to-Chatbot Conversion: Seamlessly convert various document formats, such as PDF, Word, and text files, into interactive chatbots.</li>
        <li>Intelligent Conversation: Utilize advanced natural language understanding (NLU) to enable dynamic and context-aware conversations with the chatbot.</li>
        <li>Sleek and User-Friendly Interface: Enjoy a visually appealing and intuitive user interface for an enhanced user experience.</li>
        <li>Efficient Workspace Management: Easily create, organize, and manage workspaces to facilitate collaboration and streamline document management.</li>
      </ul>

      <Link to="/document-conversion">Start Document Conversion</Link>
    </div>
  );
}

export default HomePage;
