import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

const About = React.lazy(() => import('./pages/About'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const ForCandidates = React.lazy(() => import('./pages/ForCandidates'));
const ForEmployers = React.lazy(() => import('./pages/ForEmployers'));
const ForInstitutions = React.lazy(() => import('./pages/ForInstitutions'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

const CandidateDashboard = React.lazy(() => import('./pages/candidate/Dashboard'));
const CandidateProfile = React.lazy(() => import('./pages/candidate/Profile'));
const CandidateDocuments = React.lazy(() => import('./pages/candidate/Documents'));
const CVBuilder = React.lazy(() => import('./pages/candidate/CVBuilder'));
const VerificationStatus = React.lazy(() => import('./pages/candidate/VerificationStatus'));
const Applications = React.lazy(() => import('./pages/candidate/Applications'));
const CandidateSettings = React.lazy(() => import('./pages/candidate/Settings'));

const EmployerDashboard = React.lazy(() => import('./pages/employer/Dashboard'));
const JobPosts = React.lazy(() => import('./pages/employer/JobPosts'));
const Candidates = React.lazy(() => import('./pages/employer/Candidates'));
const EmployerVerification = React.lazy(() => import('./pages/employer/VerificationRequests'));
const CompanyProfile = React.lazy(() => import('./pages/employer/CompanyProfile'));
const EmployerSettings = React.lazy(() => import('./pages/employer/Settings'));

const InstitutionDashboard = React.lazy(() => import('./pages/institution/Dashboard'));
const InstitutionRequests = React.lazy(() => import('./pages/institution/VerificationRequests'));
const VerifiedRecords = React.lazy(() => import('./pages/institution/VerifiedRecords'));
const RejectedRecords = React.lazy(() => import('./pages/institution/RejectedRecords'));
const InstitutionProfile = React.lazy(() => import('./pages/institution/Profile'));
const InstitutionReports = React.lazy(() => import('./pages/institution/Reports'));
const InstitutionSettings = React.lazy(() => import('./pages/institution/Settings'));

const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const AdminUsers = React.lazy(() => import('./pages/admin/Users'));
const AdminEmployers = React.lazy(() => import('./pages/admin/Employers'));
const AdminInstitutions = React.lazy(() => import('./pages/admin/Institutions'));
const AdminVerification = React.lazy(() => import('./pages/admin/VerificationRequests'));
const AdminReports = React.lazy(() => import('./pages/admin/Reports'));
const ActivityLogs = React.lazy(() => import('./pages/admin/ActivityLogs'));

const LoadingFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
    Loading...
  </div>
);

const PublicLayout: React.FC<{ children: React.ReactNode; fullBleed?: boolean }> = ({ children, fullBleed }) => (
  <>
    <Navbar />
    <div style={fullBleed ? {} : { paddingTop: '68px' }}>{children}</div>
    <Footer />
  </>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<PublicLayout fullBleed><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/how-it-works" element={<PublicLayout><HowItWorks /></PublicLayout>} />
        <Route path="/for-candidates" element={<PublicLayout><ForCandidates /></PublicLayout>} />
        <Route path="/for-employers" element={<PublicLayout><ForEmployers /></PublicLayout>} />
        <Route path="/for-institutions" element={<PublicLayout><ForInstitutions /></PublicLayout>} />
        <Route path="/faq" element={<PublicLayout><FAQ /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/candidate/profile" element={<CandidateProfile />} />
        <Route path="/candidate/documents" element={<CandidateDocuments />} />
        <Route path="/candidate/cv-builder" element={<CVBuilder />} />
        <Route path="/candidate/verification" element={<VerificationStatus />} />
        <Route path="/candidate/applications" element={<Applications />} />
        <Route path="/candidate/settings" element={<CandidateSettings />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/employer/jobs" element={<JobPosts />} />
        <Route path="/employer/candidates" element={<Candidates />} />
        <Route path="/employer/verification" element={<EmployerVerification />} />
        <Route path="/employer/profile" element={<CompanyProfile />} />
        <Route path="/employer/settings" element={<EmployerSettings />} />
        <Route path="/institution/dashboard" element={<InstitutionDashboard />} />
        <Route path="/institution/requests" element={<InstitutionRequests />} />
        <Route path="/institution/verified" element={<VerifiedRecords />} />
        <Route path="/institution/rejected" element={<RejectedRecords />} />
        <Route path="/institution/profile" element={<InstitutionProfile />} />
        <Route path="/institution/reports" element={<InstitutionReports />} />
        <Route path="/institution/settings" element={<InstitutionSettings />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/employers" element={<AdminEmployers />} />
        <Route path="/admin/institutions" element={<AdminInstitutions />} />
        <Route path="/admin/verification" element={<AdminVerification />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/logs" element={<ActivityLogs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
