import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentConversionPage from './pages/DocumentConversionPage';
import ChatbotPage from './pages/ChatbotPage';
import WorkspaceManagementPage from './pages/WorkspaceManagementPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        {/* Add your header, navigation, or other common components here */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/document-conversion" component={DocumentConversionPage} />
          <Route path="/chatbot" component={ChatbotPage} />
          <Route path="/workspace-management" component={WorkspaceManagementPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
