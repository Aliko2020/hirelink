import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layouts/Layout";
import AdminLayout from "../components/layouts/AdminLayout";

import Jobs from "../pages/public/Jobs";
import Form from "../components/form/Form"
import NotFound from "../pages/public/404";
import ThankYou from "../pages/public/ThankYou";

import Adminboard from "../pages/admin/Adminboard";
import Candidate from "../pages/admin/Candidate";
import InterviewScheduler from "../pages/admin/InterviewScheduler";
import OfferDraft from "../pages/admin/OfferDraft";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Jobs />} />
          <Route path="/apply/:jobId" element={<Form />} />
          <Route path="/apply/success" element={<ThankYou/>} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/adminboard" element={<Adminboard />} />
          <Route path="/adminboard/candidate/:applicationId" element={<Candidate />}/>
          <Route path="/adminboard/candidate/:applicationId/interview" element={<InterviewScheduler />} />
          <Route path="/adminboard/candidate/:applicationId/offer" element={<OfferDraft />} />
        </Route>
      
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
