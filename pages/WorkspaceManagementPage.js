import React, { useState, useEffect } from 'react';

function WorkspaceManagementPage() {
  const [workspaces, setWorkspaces] = useState([]);
  const [newWorkspace, setNewWorkspace] = useState('');

  useEffect(() => {
    // Fetch workspaces from the backend or database
    const fetchedWorkspaces = [
      { id: 1, name: 'Workspace 1' },
      { id: 2, name: 'Workspace 2' },
    ];
    setWorkspaces(fetchedWorkspaces);
  }, []);

  const handleCreateWorkspace = () => {
    if (newWorkspace.trim() !== '') {
      const workspace = {
        id: Date.now(),
        name: newWorkspace,
      };
      setWorkspaces([...workspaces, workspace]);
      setNewWorkspace('');
    }
  };

  return (
    <div>
      <h1>Workspace Management Page</h1>
      <div className="workspace-container">
        <h2>Workspaces</h2>
        {workspaces.length === 0 ? (
          <p>No workspaces found.</p>
        ) : (
          <ul>
            {workspaces.map((workspace) => (
              <li key={workspace.id}>{workspace.name}</li>
            ))}
          </ul>
        )}
        <div className="create-workspace">
          <input
            type="text"
            placeholder="Enter workspace name"
            value={newWorkspace}
            onChange={(e) => setNewWorkspace(e.target.value)}
          />
          <button onClick={handleCreateWorkspace}>Create Workspace</button>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceManagementPage;
