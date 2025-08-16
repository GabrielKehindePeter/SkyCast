import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  import { useState, useEffect } from "react";

  export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    // Open by default on desktop
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsSidebarOpen(true);
        }
      };
      handleResize(); // run once
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transform transition-transform duration-300 z-50
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:relative md:translate-x-0
          `}
        >
          {/* Sidebar header with dismiss button (only mobile) */}
          <div className="flex justify-between items-center p-4 border-b border-blue-500 md:hidden">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-2xl leading-none"
            >
              &times;
            </button>
          </div>
  
          {/* Sidebar content */}
          <ul className="p-4 space-y-4">
            <li className="hover:bg-blue-500 p-2 rounded">Dashboard</li>
            <li className="hover:bg-blue-500 p-2 rounded">Weather</li>
            <li className="hover:bg-blue-500 p-2 rounded">Settings</li>
          </ul>
        </div>
  
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
  
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Weather App</h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:block px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </button>
          </header>
  
          {/* Content */}
          <main className="p-6">
            <h2 className="text-2xl font-semibold">Today's Weather</h2>
            <p className="mt-4">Weather details go here...</p>
          </main>
        </div>
      </div>
    );
  }
  

export default App;
