import React from "react";

import Home from "./pages/Home";

import GlobalStyles from "./styles/GlobalStyles";

import PlanetsProvider from "./context";

const App: React.FC = () => (
  <>
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>

    <GlobalStyles />
  </>
);

export default App;
