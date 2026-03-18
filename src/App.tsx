// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "global.css";

// Auth screens
import LoginScreen1 from "screens/LoginScreen1/login-screen1";
import LoginScreen2 from "screens/LoginScreen2/login-screen2";

// Main & chrome
import Home from "screens/home/home";
import Notifications from "components/notifications/notifications";

// Messaging
import MessagesHome from "screens/Messages/messages-home";
import ChatScreen from "screens/Messages/chat-screen";

// “My Customers”
import CustomersList from "screens/Other/CustomersList";

// “My Tasks”
import TasksList from "screens/Other/TasksList";

// Help
import Help from "screens/Other/help";

// MyNotes
import MyNotes from "screens/MyNotes/MyNotes";
import MyNotesCreate from "screens/MyNotes/MyNotesCreate";
import MyNotesDetail from "screens/MyNotes/MyNotesDetail";

// Account screens
import ProfileInformation from "screens/Other/ProfileInformation";
import AboutUs from "screens/Other/AboutUs";
import PrivacyPolicy from "screens/Other/PrivacyPolicy";

// Eligibility
import EligibilityList from "screens/Eligibility/EligibilityList";
import EligibilityCheck from "screens/Eligibility/EligibilityCheck";
import EligibilityPopup from "screens/Eligibility/EligibilityPopup";

// MyApplications subsections
import MyApplicationsList from "screens/MyApplications/MyApplications-Lists/my-applications-list";
import MyApplicationsNew from "screens/MyApplications/MyApplications-New/my-applications-new";
import MyApplicationsSummary from "screens/MyApplications/MyApplications-Summary/my-applications-summary";
import EntityValidation from "screens/MyApplications/MyApplications-Summary/entity-validation";
import CreditCheck from "screens/MyApplications/MyApplications-Summary/credit-check";

// AddNewCustomer subsections
import CustomerCIN from "screens/AddNewCustomer/AddNewCustomer-CINDetails/add-new-customer-c-i-n-details";
import CustomerDedupe from "screens/AddNewCustomer/AddNewCustomer-Dedupe/add-new-customer-dedupe";
import CustomerDedupeDetails from "screens/AddNewCustomer/AddNewCustomer-DedupeDetails/add-new-customer-dedupe-detail";
import CustomerGSTDetails from "screens/AddNewCustomer/AddNewCustomer-GSTDetails/g-s-t-extra-details";
import CustomerGSTIN from "screens/AddNewCustomer/AddNewCustomer-GSTIN/add-new-customer-g-s-t-i-n";
import CustomerGSTNotFound from "screens/AddNewCustomer/AddNewCustomer-GSTNotFound/add-new-customer-g-s-t-not-found";
import CustomerLetsGetStarted from "screens/AddNewCustomer/AddNewCustomer-LetsGetStarted/lets-get-started";
import CustomerLLP from "screens/AddNewCustomer/AddNewCustomer-LLPINDetails/add-new-customer-l-l-p-i-n-details";
import CustomerManualCIN from "screens/AddNewCustomer/AddNewCustomer-ManualCINLLPIN/add-new-customer-manual-c-i-n";
import CustomerPAN from "screens/AddNewCustomer/AddNewCustomer-PAN/add-new-customer-pan-details";
import MCADetails from "screens/AddNewCustomer/AddNewCustomer-MCA/add-new-customer-MCA";
import CustomerSuccess from "screens/AddNewCustomer/SuccessScreen/customer-success";

// Meeting recordings
import SavedRecordings from "screens/MeetingRecordings/SavedRecordings/saved-recordings";
import NewRecording from "screens/MeetingRecordings/NewRecordings/new-recording";

import ReviewCustomerDetailsPage1 from "screens/AddNewCustomer/BasicDetailsReview/ReviewCustomerDetailsPage1";
import ReviewCustomerDetailsPage2 from "screens/AddNewCustomer/BasicDetailsReview/ReviewCustomerDetailsPage2";
import ReviewCustomerStakeholders from "screens/AddNewCustomer/BasicDetailsReview/ReviewCustomerStakeholders";
import ReviewCustomerSummary from "screens/AddNewCustomer/BasicDetailsReview/ReviewFinalCommitPage";

import DocumentUploadIntro from "screens/AddNewCustomer/DocumentUpload/DocumentUploadIntro";
import DocumentUploadProgress from "screens/AddNewCustomer/DocumentUpload/DocumentUploadProgress";
import DocumentUploadSuccess from "screens/AddNewCustomer/DocumentUpload/DocumentUploadSuccess";
import Statements from "screens/AddNewCustomer/DocumentUpload/statements";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route path="/login" element={<LoginScreen1 />} />
        <Route path="/login2" element={<LoginScreen2 />} />

        {/* Home & Notifications */}
        <Route path="/home" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/my-notes" element={<MyNotes />} />
        <Route path="/my-notes-create" element={<MyNotesCreate />} />
        <Route path="/my-notes-detail" element={<MyNotesDetail />} />

        {/* My Customers */}
        <Route path="/customers" element={<CustomersList />} />

        {/* My Tasks */}
        <Route path="/tasks" element={<TasksList />} />

        {/* Messages */}
        <Route path="/messages" element={<MessagesHome />} />
        <Route path="/messages/chat" element={<ChatScreen />} />

        {/* Help */}
        <Route path="/help" element={<Help />} />

        {/* Account settings */}
        <Route path="/account/profile" element={<ProfileInformation />} />
        <Route path="/account/about-us" element={<AboutUs />} />
        <Route path="/account/privacy-policy" element={<PrivacyPolicy />} />

        {/* Eligibility Flow */}
        <Route path="/eligibility" element={<EligibilityList />} />
        <Route path="/eligibility/:customerId" element={<EligibilityCheck />} />
        <Route path="/eligibility-popup/:customerId" element={<EligibilityPopup />} />
    
       

        {/* My Applications */}
        <Route path="/applications/list" element={<MyApplicationsList />} />
        <Route path="/applications/new" element={<MyApplicationsNew />} />
        <Route path="/applications/summary" element={<MyApplicationsSummary />} />
        <Route path="/my-applications/entity-validation" element={<EntityValidation />} />
        <Route path="/my-applications/credit-check" element={<CreditCheck />} />

        {/* Add New Customer */}
        <Route path="/add-customer/cin" element={<CustomerCIN />} />
        <Route path="/add-customer/dedupe" element={<CustomerDedupe />} />
        <Route path="/add-customer/dedupe-detail" element={<CustomerDedupeDetails />} />
        <Route path="/add-customer/gst-details" element={<CustomerGSTDetails />} />
        <Route path="/add-customer/gstin" element={<CustomerGSTIN />} />
        <Route path="/add-customer/gst-not-found" element={<CustomerGSTNotFound />} />
        <Route path="/add-customer/start" element={<CustomerLetsGetStarted />} />
        <Route path="/add-customer/llpin" element={<CustomerLLP />} />
        <Route path="/add-customer/manual-cin" element={<CustomerManualCIN />} />
        <Route path="/add-customer/pan" element={<CustomerPAN />} />
        <Route path="/add-customer/mca" element={<MCADetails />} />
        <Route path="/add-customer/success" element={<CustomerSuccess />} />

        <Route path="/add-customer/review/page1" element={<ReviewCustomerDetailsPage1 />} />
        <Route path="/add-customer/review/page2" element={<ReviewCustomerDetailsPage2 />} />
        <Route path="/add-customer/review/stakeholders" element={<ReviewCustomerStakeholders />} />
       <Route path="/add-customer/review/summary" element={<ReviewCustomerSummary />} />
       <Route path="/add-customer/documents/intro" element={<DocumentUploadIntro />} />
       <Route path="/add-customer/documents/progress" element={<DocumentUploadProgress />} />
       <Route path="/add-customer/documents/success" element={<DocumentUploadSuccess />} />
       <Route path="/add-customer/documents/statements" element={<Statements />} />
        

        {/* Meeting Recordings */}
        <Route path="/meeting-recordings/saved" element={<SavedRecordings />} />
        <Route path="/meeting-recordings/new" element={<NewRecording />} />

        {/* 404 Fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
