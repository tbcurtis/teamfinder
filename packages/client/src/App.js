import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import FullTeamsPage from "./FullTeamsPage";

function App({ Component }) {
  return (
    <Router>
      <ChakraProvider>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route
            path="/completedRequests"
            exact
            component={() => <FullTeamsPage />}
          />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
