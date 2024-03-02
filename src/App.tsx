import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import User from "./Modules/User";

function App() {
  return (
    <>
      <Suspense fallback={<>loading</>}>
        <Routes>
            <Route index path="/*" element={<User />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
