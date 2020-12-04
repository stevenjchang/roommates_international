import React, { useState, useMemo } from "react";
import { AppRouter } from "AppRouter";
import { UserContext } from "context/UserContext";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={providerValue}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
