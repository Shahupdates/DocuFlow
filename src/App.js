import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Lazy loading the page components
const HomePage = lazy(() => import('./pages/HomePage'));
const DocumentConversionPage = lazy(() => import('./pages/DocumentConversionPage'));
const ChatbotPage = lazy(() => import('./pages/ChatbotPage'));
const WorkspaceManagementPage = lazy(() => import('./pages/WorkspaceManagementPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/document-conversion", name: "Document Conversion" },
  { path: "/chatbot", name: "Chatbot" },
  { path: "/workspace-management", name: "Workspace Management" },
];

const NavBar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      {navLinks.map(link => (
        <li key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Layout = ({ children }) => (
  <div className="container">
    <header>
      <h1>DocuFlow</h1>
    </header>
    <NavBar />
    <main>{children}</main>
    <footer>
      <p>© 2023 DocuFlow. All rights reserved.</p>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/document-conversion" component={DocumentConversionPage} />
            <Route path="/chatbot" component={ChatbotPage} />
            <Route path="/workspace-management" component={WorkspaceManagementPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
