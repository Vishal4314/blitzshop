import {useState} from 'react';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
      <div className= 'container'> 
      <Navbar sidebarOpen= {sidebarOpen} openSidebar={openSidebar} />
        <h1> React Dashboard </h1>
        <Sidebar sidebarOpen= {sidebarOpen} closeSidebar= {closeSidebar} />
      </div>
  );
}

export default App;
