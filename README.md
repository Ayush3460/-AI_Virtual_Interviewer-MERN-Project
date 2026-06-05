# 🤖 AI Virtual Interviewer

> An intelligent web application that conducts personalized mock interviews by analyzing your resume and asking relevant technical questions.

---

## 📌 Problem Statement

Job seekers often struggle to prepare for technical interviews because they don't know what questions to expect based on their own skill set. Traditional mock interview platforms ask generic questions that may not match the candidate's actual experience. This project solves that by reading the candidate's resume and generating personalized interview questions based on the exact technologies and skills mentioned.

---

## 🛠️ Tools and Technologies

**Frontend:**
- React.js (Vite)
- CSS / Tailwind CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)

**AI & APIs:**
- Gemini AI / OpenAI API — for resume analysis and question generation

**Authentication:**
- Firebase Authentication
- JWT (JSON Web Tokens)

**Other:**
- PDF parsing (resume upload & extraction)
- REST API architecture

---

## ⚙️ Methods

1. Candidate registers/logs in via Firebase Authentication
2. Candidate uploads their resume (PDF format)
3. Backend parses the resume and extracts key technologies and skills
4. Extracted skills are sent to the AI model (Gemini/OpenAI)
5. AI generates relevant technical interview questions based on those skills
6. Candidate answers questions one by one in the interview interface
7. AI evaluates answers and provides feedback and scoring

---

## 💡 Key Insights

- Resume-based question generation makes interviews **highly personalized**
- Candidates are tested only on **what they claim to know**, making feedback more relevant
- AI feedback helps candidates **identify knowledge gaps** before real interviews
- The system can handle resumes with **multiple tech stacks** simultaneously

---

## 🖥️ Dashboard

The dashboard includes:
- 📄 Resume upload section
- 🎤 Live interview interface with AI-generated questions
- 📊 Score and performance summary after each session
- 📁 Interview history — review past sessions anytime
- 👤 User profile management

---

## 🚀 How to Run This Project

### Prerequisites
- Node.js installed
- MongoDB running (local or Atlas)
- API keys for Gemini/OpenAI and Firebase

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Ayush3460/-AI_Virtual_Interviewer-MERN-Project.git

# 2. Setup Backend
cd server
npm install

# Create .env file in server folder with:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# GEMINI_API_KEY=your_api_key

npm start

# 3. Setup Frontend
cd ../client
npm install

# Create .env file in client folder with:
# VITE_FIREBASE_API_KEY=your_firebase_key
# VITE_API_URL=http://localhost:5000

npm run dev
```

---

## 📈 Results and Conclusion

- Successfully built an end-to-end AI-powered interview platform
- The AI accurately extracts technologies from resumes and generates relevant questions
- Candidates receive instant feedback and scoring after each interview session
- The personalized approach significantly improves interview preparation compared to generic platforms

---

## 🔮 Future Work

- 📹 Integrate **video recording** of interview sessions
- 📧 Email reports with detailed performance analysis
- 🌐 Support for **non-technical roles** (HR, management interviews)
- 📱 Mobile app version (React Native)
- 🏆 Leaderboard and community features for competitive practice

---

## 👨‍💻 Author

**Ayush Shakya**  
[GitHub](https://github.com/Ayush3460) • [LinkedIn](https://linkedin.com/in/ayush-shakya-746a9a339)

---
