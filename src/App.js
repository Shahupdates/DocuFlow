import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentConversionPage from './pages/DocumentConversionPage';
import ChatbotPage from './pages/ChatbotPage';
import WorkspaceManagementPage from './pages/WorkspaceManagementPage';
import NotFoundPage from './pages/NotFoundPage';

const NAV_LINKS = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/document-conversion', name: 'Document Conversion', component: DocumentConversionPage },
  { path: '/chatbot', name: 'Chatbot', component: ChatbotPage },
  { path: '/workspace-management', name: 'Workspace Management', component: WorkspaceManagementPage }
];

const AppHeader = () => (
  <header>
    <h1>DocuFlow</h1>
  </header>
);

const AppNav = () => (
  <nav className="navbar">
    <ul>
      {NAV_LINKS.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <AppHeader />
      <AppNav />
      <Switch>
        {NAV_LINKS.map((link, index) => (
          <Route exact path={link.path} component={link.component} key={index} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
