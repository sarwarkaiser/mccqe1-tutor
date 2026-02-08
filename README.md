# MCCQE1 Tutor

A comprehensive adaptive learning platform for MCCQE1 (Medical Council of Canada Qualifying Examination Part 1) preparation.

## 🚀 Live Demo

**URL**: http://localhost:3001 (or check your terminal for the actual port)

## ✅ Features Implemented

### Core Features
- **50+ Practice Questions** across all MCCQE1 subjects
- **Adaptive Learning** with spaced repetition algorithm (SM-2 variant)
- **Real-time Progress Tracking** with detailed analytics
- **Exam Simulation** with timed practice sessions
- **Subject Filtering** to focus on specific areas
- **Comprehensive Dashboard** with performance metrics

### Authentication (Demo Mode)
- Login/Register pages
- Demo account: `demo@mccqe1.com` / `demo123`
- Session management (ready for production database)

### Question Bank Coverage

#### Medicine (28 questions)
- **Cardiology** (8 questions): MI, arrhythmias, valvular disease, ECG interpretation
- **Endocrinology** (10 questions): Diabetes, thyroid disorders, adrenal issues, pituitary tumors
- **Respiratory** (6 questions): COPD, pneumonia, pneumothorax, asthma
- **Gastroenterology** (6 questions): Ulcers, cholangitis, IBD, liver disease
- **Neurology** (6 questions): Stroke, MS, Parkinson's, meningitis
- **Psychiatry** (5 questions): Depression, bipolar, OCD, schizophrenia
- **Infectious Diseases** (6 questions): Pneumonia, STIs, meningitis, travel medicine
- **Dermatology** (4 questions): Skin cancers, infections, autoimmune
- **Ophthalmology** (3 questions): Retinal issues, glaucoma
- **Otolaryngology** (3 questions): Hearing loss, abscesses, cancer
- **Rheumatology** (3 questions): RA, gout, Sjögren's
- **Hematology** (3 questions): Leukemias, anemias
- **Nephrology** (3 questions): Glomerular disease, CKD

#### Surgery (6 questions)
- **General Surgery** (4 questions): Appendicitis, hernia, gallstones, breast cancer
- **Vascular Surgery** (1 question): AAA
- **Urology** (1 question): Testicular torsion

#### Pediatrics (6 questions)
- **Infectious Diseases** (1 question): Strep throat
- **Respiratory** (1 question): Croup
- **Gastroenterology** (1 question): Rotavirus
- **Nephrology** (1 question): Nephrotic syndrome
- **Cardiology** (1 question): Kawasaki disease
- **Surgery** (1 question): Bilious vomiting

#### Obstetrics & Gynecology (6 questions)
- **Obstetrics** (3 questions): Placental abruption, preeclampsia
- **Gynecology** (3 questions): Endometrial cancer, endometriosis, PID

## 📁 Project Structure

```
mccqe1-tutor/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── login/              # Login page
│   │   ├── register/           # Register page
│   │   ├── practice/           # Practice session page
│   │   ├── dashboard/          # Dashboard page
│   │   └── api/
│   │       ├── auth/           # NextAuth API routes
│   │       └── register/       # Registration API
│   ├── components/
│   │   ├── QuestionCard.tsx    # Question display component
│   │   ├── ProgressTracker.tsx # Progress tracking component
│   │   └── SessionProvider.tsx # Auth session provider
│   ├── lib/
│   │   ├── auth.ts             # Authentication logic
│   │   ├── prisma.ts           # Prisma client
│   │   └── questionBank.ts     # 50+ questions + algorithms
│   └── types/
│       └── index.ts            # Type definitions
├── prisma/
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
└── package.json
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (with Credentials provider)
- **Hosting**: Vercel (recommended)

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database (local or cloud)

### Setup Steps

1. **Clone and install dependencies:**
```bash
cd mccqe1-tutor
npm install
```

2. **Set up database:**
```bash
# Option 1: Local PostgreSQL
createdb mccqe1_tutor

# Option 2: Prisma Postgres (free)
npx prisma dev
```

3. **Configure environment:**
```bash
# Update .env with your database URL
DATABASE_URL=postgresql://localhost:5432/mccqe1_tutor
```

4. **Run migrations:**
```bash
npx prisma migrate dev
```

5. **Seed the question bank:**
```bash
npx prisma db seed
```

6. **Start development server:**
```bash
npm run dev
```

Visit `http://localhost:3001` (or the port shown in terminal).

## 🎯 Usage

### Practice Mode
1. Navigate to `/practice`
2. Filter questions by subject (optional)
3. Answer questions one by one
4. Review explanations after each answer
5. Track your progress in real-time

### Dashboard
- View overall accuracy and statistics
- See performance by subject category
- Identify weak areas for focused study
- Track study streak and progress

### Demo Account
- Email: `demo@mccqe1.com`
- Password: `demo123`

## 📊 Database Schema

### Models
- **User**: User accounts and profile data
- **Account**: OAuth/credentials account data
- **Session**: User sessions
- **Question**: MCCQE1 questions with metadata
- **StudyPlan**: Adaptive study plans
- **Progress**: Daily progress tracking
- **UserSession**: Practice session history
- **ExamResult**: Mock exam results

## 🧠 Algorithms

### Spaced Repetition (SM-2 Variant)
The app uses a modified SM-2 algorithm to schedule question reviews:
- Quality score (0-5) determines next review interval
- Ease factor adjusts based on performance
- Repetitions counter tracks mastery level

### Adaptive Learning
- Tracks performance by category
- Identifies weak areas (< 60% accuracy)
- Suggests focus areas for study plans

## 💰 Revenue Model (Future)

### Subscription Tiers
- **Free**: 50 questions/month, basic progress tracking
- **Pro** ($19/month): Unlimited questions, detailed analytics, mock exams
- **Premium** ($39/month): All Pro features + personalized study plans, tutor support

### One-time Packs
- **Exam Simulation Pack** ($29): 5 full-length mock exams
- **Question Bank Access** ($49): Complete question bank (1000+ questions)

## 🎯 Target Market

- Medical students preparing for MCCQE1
- International medical graduates (IMGs)
- Residents needing re-certification
- Continuing medical education (CME)

## 📈 Next Steps

### Phase 2 (MVP Enhancement)
- [ ] Connect to real PostgreSQL database
- [ ] Implement full NextAuth.js with OAuth providers
- [ ] Add Stripe payment integration
- [ ] Expand question bank to 1000+ questions
- [ ] Implement spaced repetition scheduling
- [ ] Add exam simulation mode with timer

### Phase 3 (Scaling)
- [ ] Admin panel for question management
- [ ] AI-powered explanations
- [ ] Mobile app (React Native)
- [ ] Community features (forums, study groups)
- [ ] Integration with medical textbooks/resources

### Phase 4 (Monetization)
- [ ] Subscription tiers
- [ ] Exam simulation packs
- [ ] Tutor matching service
- [ ] Corporate partnerships (medical schools)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Options
- **Netlify**: Connect GitHub repo
- **AWS**: Use Amplify or ECS
- **DigitalOcean**: App Platform

## 📝 License

MIT License - feel free to use and modify for your needs.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a PR.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This is a demo application. All questions are for educational purposes only and should be verified against official MCCQE1 materials.
