import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <header className="p-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-xl font-bold">DefenseMon Dashboard</h1>
        <p className="text-sm text-gray-400">OSINT monitoring for military activity and conflict indicators</p>
      </header>
      <main className="flex-1 p-6">
        <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Live Feed (Demo)</h2>
          <p className="mb-2">
            This is a placeholder for the OSINT real-time feed. Data ingestion and visualization coming soon.
          </p>
        </div>
      </main>
      <footer className="p-4 bg-gray-800 border-t border-gray-700 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} DefenseMon
      </footer>
    </div>
  );
}

export default App;