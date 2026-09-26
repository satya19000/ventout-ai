# ventout-ai
Privacy-first multilingual AI emotional venting app with voice support, mood tracking, safe anger-release tools, Firebase/Firestore, and crisis-aware safety features.
# VentOut AI 🎙️

**Speak it. Release it. Feel lighter.**

VentOut AI is a privacy-first, multilingual emotional venting and wellness web application designed to give users a safe private space to express anger, frustration, stress, and difficult emotions through voice or text.

Instead of directing anger toward another person, users can vent privately, use interactive anger-release tools, track changes in their mood, and receive calm AI responses that can gently transition from listening to constructive next steps.

> VentOut AI is an emotional wellness tool. It is not a replacement for professional mental-health care, diagnosis, treatment, or emergency services.

## ✨ Key Features

### 🎙️ Voice Venting

Speak naturally instead of typing.

- Browser-based speech recognition
- Live speech-to-text transcription
- AI-generated supportive responses
- Browser-based text-to-speech replies
- Start, stop, mute, and restart controls
- Text fallback when speech recognition is unavailable

The core voice functionality uses browser speech APIs, helping keep the initial voice infrastructure lightweight.

### 💬 Private Text Venting

Users can freely express frustration through text while the AI:

- listens without judgment
- avoids retaliatory insults
- does not encourage harassment or violence
- responds calmly
- gradually offers constructive next steps when appropriate

### 😡 Rage Room

An interactive virtual space for harmless anger release.

Users can tap or click virtual objects and watch visual effects while a stress meter changes.

### 🧱 Abuse Wall

A temporary space for typing angry or offensive thoughts privately.

- Content is temporary
- Raw text is not intentionally stored in Firestore
- Automatic deletion
- Designed as a private release mechanism rather than a social feed

### 🔥 Angry Letter

Write everything you wish you could say without actually sending it.

There is no Send button.

When finished, choose:

**Burn Letter 🔥**

The letter is destroyed with an animation and its raw content is not intentionally persisted to the cloud.

### 📊 Mood Tracker

Users can rate:

- Anger
- Stress
- Sadness

before and after venting sessions.

Mood history can help users understand emotional patterns over time.

### 🧠 Calm Transition

After a venting period, VentOut AI can gently ask whether the user wants to move from emotional release toward problem solving.

Possible next steps include:

- Take a break
- Leave the issue for now
- Talk calmly
- Create an action plan
- Try a breathing exercise

The user remains in control of whether to continue venting or move forward.

### 😄 Safe Roast Mode

A lighthearted optional mode offering playful humor without hateful, threatening, sexually abusive, or discriminatory attacks.

Example:

> “Your patience is buffering harder than slow Wi-Fi.”

### 🌍 Multilingual Experience

VentOut AI is designed for an international audience with support planned across major Indian and global languages, including:

English, Telugu, Hindi, Tamil, Kannada, Malayalam, Bengali, Marathi, Spanish, Portuguese, French, German, Italian, Dutch, Arabic, Turkish, Russian, Japanese, Korean, Simplified Chinese, Indonesian, Thai, and Vietnamese.

The app can use language-specific browser speech capabilities where supported and falls back to text when necessary.

### 🛡️ Safety-Aware Conversations

VentOut AI includes safety handling for language related to:

- Self-harm
- Suicide
- Harm toward others
- Serious violence
- Threats
- Potential emergencies

When a high-risk situation is detected, the normal venting flow can be interrupted and the user is directed toward appropriate immediate support.

For users in India, emergency support can include access to **112**.

Emergency information should be adapted for additional countries as international support expands.

## 🔐 Privacy by Design

VentOut AI is designed around data minimization.

Key principles:

- Raw Abuse Wall content should not be stored in Firestore
- Angry Letter content should not be permanently stored
- Full vent transcripts should not be saved by default
- User-approved summaries may be stored
- Mood history and preferences are user-specific
- Firestore security rules restrict access to user-owned data
- Users should be able to delete their stored data

## 🛠️ Technology Stack

**Frontend**
- Next.js
- React
- TypeScript
- Tailwind CSS

**Authentication**
- Firebase Authentication

**Database**
- Cloud Firestore

**AI**
- OpenAI API through secure server-side routes

**Voice Input**
- Browser Speech Recognition API

**Voice Output**
- Browser Speech Synthesis API

**Deployment**
- Vercel

## 🏗️ Architecture

```text
User
  │
  ├── Voice Input
  │      ↓
  │   Browser Speech Recognition
  │
  ├── Text Input
  │
  ↓
VentOut AI Interface
  │
  ├── Safety Detection
  │
  ├── Secure AI API Route
  │      ↓
  │   OpenAI
  │
  ├── Firebase Authentication
  │
  └── Cloud Firestore
         ├── User Profile
         ├── Preferences
         ├── Mood History
         └── Approved Session Data
```

Sensitive raw venting content should remain ephemeral wherever possible.

## 🔥 Firebase Setup

Create a Firebase project and enable:

1. Firebase Authentication
2. Email/Password authentication
3. Cloud Firestore
4. Firestore Security Rules

Add your Firebase web configuration to the application's environment variables.

Example:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

OPENAI_API_KEY=
```

Never expose the OpenAI secret API key in client-side code.

## 🚀 Local Development

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/ventout-ai.git
cd ventout-ai
```

Install dependencies:

```bash
npm install
```

Create:

```text
.env.local
```

and add the required environment variables.

Start development:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🧪 Before Production Deployment

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Also test:

- Firebase signup/login
- Firestore security rules
- Microphone permissions
- Speech recognition
- Speech synthesis
- Language switching
- Mobile layouts
- Dark mode
- Safety escalation
- Data deletion
- Abuse Wall automatic deletion
- Angry Letter deletion
- API error handling
- Unsupported-browser fallback

Voice functionality should be tested on multiple browsers and real mobile devices because browser speech support can vary.

## 📱 Product Vision

VentOut AI aims to evolve into a global emotional-release companion combining:

**Vent → Release → Calm → Reflect → Act**

Future possibilities include:

- PWA/mobile installation
- Country-aware crisis resources
- More natural real-time voice conversations
- Personal emotional insights
- Optional anonymous mode
- Guided calming exercises
- Custom AI companion styles
- Workplace stress mode
- Student stress mode
- Relationship frustration mode
- Multilingual localization
- Privacy-preserving analytics

## ⚠️ Medical & Safety Disclaimer

VentOut AI is intended for general emotional wellness and self-reflection.

It does not provide medical diagnosis, psychiatric diagnosis, psychotherapy, emergency intervention, or professional medical advice.

Anyone who may be in immediate danger or at risk of harming themselves or another person should contact local emergency services or an appropriate qualified professional immediately.

## 🤝 Contributing

Contributions that improve accessibility, privacy, multilingual support, safety, user experience, and responsible AI behavior are welcome.

Please avoid features that encourage harassment, threats, targeted abuse, violence, or unsafe behavior.

## 📄 License

A license should be selected before public commercial distribution.

Copyright © VentOut AI.
