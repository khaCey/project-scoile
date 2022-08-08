import React, { useState } from 'react';

import Navigation from './Components/Navigation';
import ActivePage from './Components/ActivePage';

import { PageContext, StudentContext, SidebarContext } from './Components/Variables';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [currentStudent, setCurrentStudent] = useState("8000");
  const [currentSidebarCollapsed, setCurrentSidebarCollapsed] = useState(false)
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }} >
      <StudentContext.Provider value={{ currentStudent, setCurrentStudent }} >
        <SidebarContext.Provider value={{ currentSidebarCollapsed, setCurrentSidebarCollapsed }}>
          <div className='App'>
            <Navigation />
            <ActivePage />
          </div>
        </SidebarContext.Provider>
      </StudentContext.Provider>
    </PageContext.Provider>
  );
}

export default App;

