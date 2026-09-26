# VentOut AI — Firebase/Firestore edition

Privacy-first multilingual voice venting web app built with Next.js, TypeScript, Tailwind CSS, Firebase Authentication, Cloud Firestore, browser Web Speech APIs and a server-side OpenAI route.

## Included
- Voice + text venting with browser SpeechRecognition/SpeechSynthesis fallback
- 23-language selector
- Rage Room, Abuse Wall auto-delete, Angry Letter burn, Safe Roast
- Mood tracking and local persistence
- Emergency safety interruption
- Firebase email/password authentication
- Firestore security rules with per-user ownership
- Server-side OpenAI API route; secret key never belongs in browser code
- Dark/light responsive UI and PWA manifest

## Privacy model
Raw Abuse Wall and Angry Letter content is never written to Firestore. Full vent transcripts are not persisted by default. Cloud persistence is intended only for user-owned preferences, mood records and explicitly approved summaries.

## Firebase setup
1. Create a Firebase project in Firebase Console.
2. Add a Web App and copy its public Firebase config values into `.env.local` using `.env.example`.
3. Enable Authentication > Sign-in method > Email/Password.
4. Create a Cloud Firestore database.
5. Deploy `firestore.rules` using Firebase CLI (`firebase deploy --only firestore:rules`) or paste equivalent rules in the Firebase console.
6. Add `OPENAI_API_KEY` only to the server/deployment environment.

## Run
```bash
npm install
npm run typecheck
npm run dev
```
Production verification:
```bash
npm run build
npm start
```

## Vercel
Import the GitHub repository, add Firebase public config variables plus the server-only `OPENAI_API_KEY`, deploy, and test microphone permission over HTTPS. Web Speech recognition availability varies by browser, so text fallback remains enabled.

## Firestore layout
- `profiles/{uid}`
- `users/{uid}/vent_sessions/{id}`
- `users/{uid}/mood_history/{id}`
- `users/{uid}/user_preferences/{id}`
- `users/{uid}/safety_events/{id}`

Do not create collections for raw Abuse Wall or Angry Letter text.
