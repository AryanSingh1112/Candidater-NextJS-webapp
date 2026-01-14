# Candidate Management Application

A modern, full-featured candidate management system built with Next.js 16, React, and Tailwind CSS. Efficiently manage job candidates with an intuitive interface, real-time form validation, and persistent local storage.

## ✨ Features

- **Add Candidates**: Beautiful form with real-time validation for candidate information
- **View Dashboard**: Comprehensive dashboard displaying all candidates in a clean table format
- **Delete Candidates**: Remove candidates with a single click
- **Persistent Storage**: All data is saved to localStorage and persists across sessions
- **Responsive Design**: Fully responsive UI that works seamlessly on all devices
- **Modern UI**: Dark theme with purple and cyan accents, glassmorphism effects, and smooth animations
- **Form Validation**: Zod-based validation with helpful error messages
- **Type-Safe**: Full TypeScript support for better developer experience

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Validation**: Zod
- **Icons**: Lucide React
- **UI Components**: Custom components + shadcn/ui

## 📋 Project Structure

```
├── app/
│   ├── add-candidate/         # Form page for adding candidates
│   ├── dashboard/             # Dashboard page displaying all candidates
│   ├── context/               # React Context for state management
│   ├── layout.tsx             # Root layout with providers
│   └── page.tsx               # Home page
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── CandidateForm.tsx      # Candidate form component
│   ├── CandidatesTable.tsx    # Candidates display table
│   ├── StatCard.tsx           # Statistics card component
│   └── Navbar.tsx             # Navigation bar
├── lib/
│   ├── validations.ts         # Zod validation schemas
│   └── candidate-actions.ts   # Form actions and helpers
└── types/
    └── candidates.ts          # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

### Add a Candidate

1. Navigate to the **"Add Form"** page from the navbar
2. Fill in the candidate details:
   - Full Name (2-50 characters, letters only)
   - Email (valid email format)
   - Job Role (2-50 characters)
3. Click **"Add Candidate"** button
4. See success message confirmation
5. Navigate to Dashboard to see the candidate in the table

### View All Candidates

1. Go to the **"Dashboard"** page
2. View statistics cards showing total and added candidates
3. Browse all candidates in the table format with columns:
   - Name
   - Email
   - Role
   - Status
   - Delete Action

### Delete a Candidate

1. Go to the Dashboard
2. Click the trash icon in the Action column for any candidate
3. Candidate is immediately removed from the list

## 🎨 Design Features

- **Dark Theme**: Comfortable for extended use
- **Glassmorphism**: Modern frosted glass effect on cards
- **Color Scheme**: 
  - Primary: Purple-500 (buttons)
  - Accent: Red-500 (labels)
  - Highlight: Cyan-400 (borders)
- **Smooth Animations**: Hover effects and transitions throughout
- **Gradient Effects**: Eye-catching visual elements
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop

## 📦 Data Storage

All candidate data is stored in browser's localStorage under the key `candidates`. Data persists across:
- Page refreshes
- Browser sessions
- Application restarts

## 🔒 Validation Rules

- **Name**: 2-50 characters, letters and spaces only
- **Email**: Valid email format required
- **Role**: 2-50 characters minimum

## 🚢 Deployment

### Deploy on Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy on Other Platforms

This project can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud

## 📝 Environment Variables

No environment variables required for basic functionality.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a technical assessment project demonstrating modern Next.js development practices, clean code architecture, and UI/UX design skills.

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Happy Coding! 🚀**
