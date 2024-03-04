import React from "react";
import { EpicBookDataProvider } from "./Context/ContextEpibook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import ErrorPage from "./Components/pages/ErrorPage";
import CardDetailsPage from "./Components/pages/CardDetailsPage";

export const Context = React.createContext();

const App = () => {
  return (
    <BrowserRouter>
      <EpicBookDataProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path={"/details/:id"} element={<CardDetailsPage />} />
        </Routes>
      </EpicBookDataProvider>
    </BrowserRouter>
  );
};

export default App;
