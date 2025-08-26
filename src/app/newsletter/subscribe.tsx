"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState(""); const [ok, setOk] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("subscriptions").insert({ email });
    if (error) alert(error.message); else setOk(true);
  };
  return ok ? <p>Thanks! You’re subscribed.</p> : (
    <form onSubmit={submit} className="flex gap-2">
      <input className="min-w-0 flex-1 rounded bg-white/10 p-2" placeholder="you@email.com"
             value={email} onChange={e=>setEmail(e.target.value)} required />
      <button className="rounded bg-ttred px-4 py-2 font-semibold">Subscribe</button>
    </form>
  );
}
