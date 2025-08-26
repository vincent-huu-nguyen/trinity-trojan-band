"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) setSent(true);
    else alert(error.message);
  };

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Admin Sign In</h1>
      {sent ? (
        <p>Magic link sent! Check your email (Spam/Promotions too).</p>
      ) : (
        <form onSubmit={send} className="grid gap-3">
          <input className="rounded bg-white/10 p-2" placeholder="you@email.com"
                 type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <button className="rounded bg-ttred px-4 py-2 font-semibold">Send magic link</button>
        </form>
      )}
    </div>
  );
}
