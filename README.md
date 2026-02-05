## Overview
HireLink is a frontend-only hiring management application built as part of a fellowship assessment.  
It simulates the full hiring flow — from candidate application to recruiter review and decision-making.

The project focuses on frontend architecture, complex state management, validation, and UI state transitions.



## Tech Stack

- **Framework:** React
- **Routing:** React Router v6
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Persistence:** localStorage



## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/Aliko2020/hirelink.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open the app in your browser
```bash
http://localhost:5173
```




## Application Structure

The application has two main sections:

- **Public (Candidate Experience)**
- **Admin (Recruiter Experience)**




## Candidate Experience (Public)

- Job listings displayed using mock data 
- Each job shows title, location, and short description
- Clicking a job opens a multi-step application form

### Application Form
Steps:
1. Personal Information (name, email, phone)
2. Experience & Skills (experience, skills, portfolio)
3. Resume Upload (PDF/DOC with validation)

### Validation & Submission
- Required fields and email format validation
- Step-by-step validation enforced
- Thank You page shown after submission
- Unique application ID generated on the frontend



## Recruiter Experience (Admin)

- Pipeline stages: Applied, Reviewed, Interview Scheduled, Offer Sent
- Other features in progress


## Technical Decisions

- **State:** Redux Toolkit for predictable state updates
- **Routing:** React Router v6 with nested admin routes under `/adminboard`
- **Persistence:** localStorage for frontend-only data storage

