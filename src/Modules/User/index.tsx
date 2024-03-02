import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "../../layout";
import Contact from "./Contact";
import Demo from "./Demo";
import Services from "./Services";
import MedicalBilling from "./MedicalBilling";
import Pricing from "./Pricing";
import Specialities from "./Specialities";
import PriorAuthorizationServices from "./PriorAuthorizationServices";
import ProviderEnrollmentService from "./ProviderEnrollmentService";
import ArRecoveryService from "./ArRecoveryService";

function User() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Demo />} path="/demo" />
        <Route element={<Services />} path="/services" />
        <Route element={<MedicalBilling />} path="/medicalbilling" />
        <Route element={<ArRecoveryService />} path="/recoveryservice" />
        <Route
          element={<PriorAuthorizationServices />}
          path="/authorizationservices"
        />
        <Route
          element={<ProviderEnrollmentService />}
          path="/enrollment"
        />
        <Route element={<Pricing />} path="/pricing" />
        <Route element={<Specialities />} path="/specialities" />
      </Route>
    </Routes>
  );
}

export default User;
