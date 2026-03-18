# RM Application – Frontend

The RM (Relationship Manager) Application is a comprehensive mobile-based frontend platform designed to enable end-to-end customer onboarding, application tracking, internal collaboration, and credit workflow management.

It is built to digitize and streamline the Relationship Manager’s journey — from customer creation and verification to application submission, tracking, and communication with Credit Managers.

---

## 🧩 Modules & Features

- Login and authentication (User ID / Password / Session flow)  
- Dashboard with task overview and activity tracking  
- My Tasks (Active / Completed workflow tracking)  
- Customer onboarding (New Customer creation flow)  
- PAN verification and dedupe logic simulation  
- GSTIN selection and validation flow  
- CIN / LLPIN and MCA data fetch simulation  
- Customer 360 summary view  
- Application tracker (My Applications)  
- New application creation and submission flow  
- Meeting recorder and interaction logs  
- Document checklist and upload flow  
- Bureau / CIBIL check simulation  
- Eligibility check with RAG scoring  
- Stakeholder management (Add / Edit stakeholders)  
- Notifications and alerts system  

---

## 📦 Scope

This repository contains the frontend implementation of the RM Application.

The platform covers the complete lifecycle of RM activities:

- Customer onboarding (NTB / Existing)  
- Data validation and verification (PAN, GST, MCA, Bureau)  
- Application creation and tracking  
- Internal workflows (RM ↔ Credit Manager)  
- Meeting recording and collaboration  
- Final summary and submission  

The application uses mock data and simulated API responses for demonstration purposes and does not include backend integrations.

---

## 🏗️ Repository Structure

RM-App-Frontend/  
├── src/  
├── public/  
├── android/  
├── capacitor.config.ts  
├── package.json  

---

## ▶️ Running the Project

Install dependencies:  
npm install  

Run the application:  
npm run dev  

Build for production:  
npm run build  

---

## 📱 Android Build

npx cap sync android  
npx cap open android  

---

## 🎯 Key Functional Flows

- Login → Dashboard → My Tasks → Customer Selection  
- New Customer → PAN → Dedupe → GST → MCA → Creation  
- Customer → Application → Data Completion → Submission  
- Meeting Recorder → Notes → Link to Customer/Application  
- Eligibility → Scoring → Summary → Send to Credit Manager  

---

## 🧠 Technical Highlights

- Built using React + Ionic framework  
- Modular component-based architecture  
- Centralized routing using React Router  
- Reusable UI components  
- Mock JSON-based data handling  
- Responsive layout  
- Optimized CSS  
- APK generation using Capacitor  

---

## 📱 Mobile App Screenshots

### Onboarding & Access

<p align="center">
  <img src="https://github.com/user-attachments/assets/cc12c80b-f0e0-43ee-8ceb-13848f745c75" width="300"/>
  <img src="https://github.com/user-attachments/assets/35dc2ca5-f87f-42eb-9e85-7a5a0124fc9e" width="300"/>
</p>

<p align="center"><i>Splash Screen • Login</i></p>

---

### Home and New Customer

<p align="center">
  <img src="https://github.com/user-attachments/assets/3e847262-068e-412d-a11b-da4af8424358" width="180"/>
  <img src="https://github.com/user-attachments/assets/3be954e9-ee15-490d-9232-7da3d708e94f" width="180"/>
  <img src="https://github.com/user-attachments/assets/a8c0301e-7ca0-4987-9bdc-d0f8637ce786" width="180"/>
  <img src="https://github.com/user-attachments/assets/0cd85f02-a707-4eb8-ba70-f28ef123ad30" width="180"/>
  <img src="https://github.com/user-attachments/assets/70ac8c98-4b10-4e56-be34-1cd030b0ab6d" width="180"/>
  <img src="https://github.com/user-attachments/assets/f758f373-6101-4075-9279-10a5d888e793" width="180"/>
  <img src="https://github.com/user-attachments/assets/9aa552b0-1bb5-478f-9113-04a468aa5012" width="180"/>
  <img src="https://github.com/user-attachments/assets/56917311-80cd-468f-9242-c64c1b3d166f" width="180"/>
  <img src="https://github.com/user-attachments/assets/9a01d61c-afd7-48b9-b70f-a11c4ea1efd4" width="180"/>
  <img src="https://github.com/user-attachments/assets/cbf0fd15-92ff-4c3f-a00c-516f89e82378" width="180"/>
  <img src="https://github.com/user-attachments/assets/667d53a2-7d56-44da-b6b8-7144c7345c96" width="180"/>
  <img src="https://github.com/user-attachments/assets/f09525f5-4db9-4a94-b4c0-9a8ee12e9c86" width="180"/>
  <img src="https://github.com/user-attachments/assets/b34540b0-aff6-45cb-b2ad-318058905d94" width="180"/>
  <img src="https://github.com/user-attachments/assets/72b2f75b-1efc-4425-aceb-b3c4bc781a8f" width="180"/>
  <img src="https://github.com/user-attachments/assets/20107847-cea3-4e25-b39f-c6974634f2e3" width="180"/>
  <img src="https://github.com/user-attachments/assets/e2e40c8d-2252-4fb7-b808-b090978e1272" width="180"/>
</p>

<p align="center"><i>Home • Full Customer Creation Journey</i></p>

---

### Application Screens

<p align="center">
  <img src="https://github.com/user-attachments/assets/89559bb3-13aa-413b-921d-a84e84d3f2c8" width="180"/>
  <img src="https://github.com/user-attachments/assets/f7c00c75-4ec1-42b7-bf83-461e99fccb4c" width="180"/>
  <img src="https://github.com/user-attachments/assets/b7c63196-cc02-485c-841f-ef34df0fc430" width="180"/>
  <img src="https://github.com/user-attachments/assets/8939b80a-4a48-42b3-ad9e-3fd806cecd82" width="180"/>
  <img src="https://github.com/user-attachments/assets/6e484f75-f072-4f47-b244-e20e99274b5c" width="180"/>
  <img src="https://github.com/user-attachments/assets/8e45443c-f2f8-4635-8e2d-313bbdfd904e" width="180"/>
  <img src="https://github.com/user-attachments/assets/4fc2d507-aa83-410f-80eb-d517b6844cc0" width="180"/>
</p>

<p align="center"><i>Application Lifecycle Screens</i></p>

---

### Other Screens

<p align="center">
  <img src="https://github.com/user-attachments/assets/84be41d0-e75e-4a98-9a4a-5496ea431ed3" width="180"/>
  <img src="https://github.com/user-attachments/assets/0b227c11-5b86-4703-85b5-92da3b0d9a51" width="180"/>
  <img src="https://github.com/user-attachments/assets/2f4e300a-1f5e-4e6b-81c5-d6e7465e2c7e" width="160"/>
  <img src="https://github.com/user-attachments/assets/3999f76c-1493-40ca-bdad-5e64c5cbb04f" width="160"/>
  <img src="https://github.com/user-attachments/assets/bca852a4-f2e1-42e0-844c-c6acbe055bd9" width="160"/>
  <img src="https://github.com/user-attachments/assets/1776d445-57de-48c5-a1ca-20327b512e5e" width="160"/>
  <img src="https://github.com/user-attachments/assets/06419cfd-f155-4b77-bf96-b6f039d192de" width="160"/>
</p>

<p align="center"><i>Tasks • Messages • Notes • Utilities</i></p>

---

## 📌 Status

- Frontend fully developed  
- Workflow implemented  
- UI aligned with design  
- APK generated  
- Backend pending  

---

## 📎 Notes

This application is designed as a core RM workflow platform for lending institutions, enabling structured customer onboarding, data validation, and application lifecycle management.

It aligns closely with real-world banking workflows and integrates multiple data points such as GST, MCA, Bureau, and internal systems.
