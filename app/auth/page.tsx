'use client';

import Link from 'next/link';
import { HeartHandshake, Moon, Sun, LogIn, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function Nav() {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') === 'dark';
    setDark(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme);

    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);

    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  async function logout() {
    if (auth) {
      await signOut(auth);
    }

    window.location.href = '/auth';
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="rounded-xl bg-blue-600 p-2 text-white">
            <HeartHandshake size={20} />
          </span>
          VentOut AI
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/vent">Vent</Link>
          <Link href="/mood">Mood</Link>
          <Link href="/privacy">Privacy</Link>

          {user ? (
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-1 font-semibold"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              href="/auth"
              className="flex items-center gap-1 font-semibold text-blue-600"
            >
              <LogIn size={16} />
              Sign in
            </Link>
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle theme"
          className="btn-secondary !p-2.5"
          onClick={toggle}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>
    </header>
  );
}
