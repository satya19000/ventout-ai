'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, firebaseConfigured } from '@/lib/firebase';

export default function Auth() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(signUp: boolean) {
    if (!firebaseConfigured || !auth) {
      setMsg(
        'Firebase is not configured. Add the Firebase environment variables first.'
      );
      return;
    }

    setBusy(true);
    setMsg('');

    try {
      const result = signUp
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);

      if (signUp && db) {
        await setDoc(
          doc(db, 'profiles', result.user.uid),
          {
            email: result.user.email,
            createdAt: serverTimestamp(),
          },
          { merge: true }
        );
      }

      router.replace('/dashboard');
    } catch (error) {
      setMsg(
        error instanceof Error
          ? error.message
          : 'Authentication failed.'
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-14">
      <div className="card">
        <h1 className="text-3xl font-black">
          Private account
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Sign in to securely access your VentOut dashboard and saved mood
          history.
        </p>

        <input
          className="input mt-6"
          type="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input mt-3"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            className="btn-primary"
            disabled={busy}
            onClick={() => submit(false)}
          >
            {busy ? 'Please wait...' : 'Sign in'}
          </button>

          <button
            className="btn-secondary"
            disabled={busy}
            onClick={() => submit(true)}
          >
            {busy ? 'Please wait...' : 'Sign up'}
          </button>
        </div>

        {msg && (
          <p className="mt-4 text-sm">
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
