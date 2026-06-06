# TrustHire AI 🛡️

**AI-Powered Job Scam Detection Platform for Students and Fresh Graduates**

---

## Problem Statement

Millions of students and fresh graduates apply for internships and jobs online every year. Unfortunately, scammers increasingly target job seekers through fake job postings, fraudulent recruiter messages, and deceptive internship offers.

Common red flags include:

* Registration or processing fees before hiring
* Unrealistic salaries for entry-level roles
* Recruiters using personal email addresses
* Telegram/WhatsApp-only communication
* Fake companies with no verifiable online presence
* Internship scams promising certificates after payment

Many students lack the experience needed to identify these warning signs, resulting in financial losses, identity theft, and wasted time.

### Challenge

Create an intelligent system that helps students identify potentially fraudulent job opportunities before they engage with recruiters or submit sensitive information.

---

# Solution Overview

TrustHire AI is an AI-powered job scam detection platform that analyzes:

* Job postings
* Internship offers
* Recruiter emails
* Direct messages
* Hiring advertisements

The system scans the content and identifies suspicious patterns commonly associated with recruitment scams.

After analysis, users receive:

### Trust Score (0-100)

A confidence score indicating the likelihood that the opportunity is legitimate.

### Risk Classification

* 🟢 Likely Safe
* 🟡 Caution
* 🔴 High Risk

### Scam Indicators

Detected red flags such as:

* Upfront payment requests
* Personal email recruiters
* Telegram-only communication
* Unrealistic salary promises
* Missing company information
* No-experience high-paying offers

### Actionable Recommendation

The platform provides guidance on whether users should:

* Proceed confidently
* Verify additional information
* Avoid the opportunity entirely

---

# Key Features

## 1. Job Posting Analysis

Paste any job advertisement and instantly receive a trust assessment.

## 2. Recruiter Verification

Detect suspicious recruiter communication patterns.

## 3. Trust Score Generation

Generate a score based on multiple risk signals.

## 4. Red Flag Detection

Highlights specific warning signs found within the posting.

## 5. Interactive Dashboard

Visual representation of:

* Trust Score
* Risk Level
* Scam Indicators
* AI Recommendation

## 6. Sample Scam Library

Includes multiple realistic examples:

* Data Entry Scam
* Telegram Scam
* Fake Recruiter Scam
* Fake Internship Scam
* Suspicious Remote Job
* Legitimate Internship
* Verified Corporate Job
* Research Internship

---

# How It Works

1. User pastes a job posting.
2. TrustHire AI scans the content.
3. Detection rules identify suspicious keywords and patterns.
4. Risk score is calculated.
5. Trust Score is generated.
6. Dashboard displays findings and recommendations.

---

# Technology Stack

## Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

## UI Components

* Base UI
* Lucide React Icons

## Deployment

* Vercel

---

# APIs Used

### Current MVP

The current hackathon MVP uses an internal rule-based AI simulation engine for scam detection.

No external APIs are required.

### Future Enhancements

Potential integrations:

#### OpenAI API

For advanced scam detection using LLMs.

#### Google Safe Browsing API

To verify suspicious links.

#### WhoisXML API

To validate company domains.

#### LinkedIn API

To verify recruiter profiles.

#### Hunter.io API

To validate corporate email domains.

---

# Project Structure

```bash
app/
├── analyze/
├── dashboard/
├── layout.tsx
├── page.tsx

components/
├── analyze-form.tsx
├── analysis-dashboard.tsx
├── hero.tsx
├── navbar.tsx
├── scams-section.tsx
├── trust-sphere.tsx
├── cta-footer.tsx

lib/
├── mock-analysis.ts
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repository-url>
cd trusthire-ai
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Run Development Server

```bash
npm run dev
```

Application will start at:

```bash
http://localhost:3000
```

## 4. Build Production Version

```bash
npm run build
npm start
```

---

# Demo Workflow

### Landing Page

Users are introduced to the platform and its purpose.

### Analysis Page

Users can:

* Paste job postings
* Select sample scam examples
* Run AI analysis

### Dashboard

Displays:

* Trust Score
* Risk Level
* Detected Red Flags
* Recommendation

---

# Screenshots

## Landing Page

*Add screenshot here*

### Example:

```text
screenshots/landing-page.png
```

---

## Analysis Page

*Add screenshot here*

### Example:

```text
screenshots/analyze-page.png
```

---

## Trust Report Dashboard

*Add screenshot here*

### Example:

```text
screenshots/dashboard.png
```

---

# Future Roadmap

## Phase 1

* Real AI integration
* Better NLP-based analysis

## Phase 2

* Resume verification
* Recruiter verification

## Phase 3

* Company trust database
* Browser extension

## Phase 4

* Mobile application
* Community scam reporting

---

# Impact

TrustHire AI aims to protect students and job seekers from employment fraud by providing accessible, instant, and understandable scam detection.

By empowering users with trustworthy insights, the platform helps reduce:

* Financial fraud
* Identity theft
* Fake internship scams
* Recruitment-related cybercrime

---

# Team

Developed for hackathon submission.

TrustHire AI — Helping students apply with confidence, not anxiety.
