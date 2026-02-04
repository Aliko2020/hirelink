import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import AdminLayout from "../components/layout/AdminLayout";

import Jobs from "../pages/public/Jobs";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm"
import NotFound from "../pages/public/NotFound";

import Adminboard from "../pages/admin/Adminboard";
import Candidate from "../pages/admin/Candidate";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Jobs />} />
          <Route path="/apply/:jobId" element={<MultiStepForm />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/adminboard" element={<Adminboard />} />
          <Route
            path="/admin/candidate/:applicationId"
            element={<Candidate />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
