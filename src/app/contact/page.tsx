"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", role:"parent", message:"" });
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(form) });
    if (r.ok) setSent(true); else alert("Send failed");
  };

  if (sent) return <p>Thanks! We’ll be in touch.</p>;
  return (
    <form onSubmit={submit} className="grid max-w-xl gap-3">
      {["name","email"].map(k => (
        <input key={k} className="rounded bg-white/10 p-2" placeholder={k}
               value={(form as any)[k]} onChange={e=>setForm({ ...form, [k]: e.target.value })} required />
      ))}
      <select className="rounded bg-white/10 p-2" value={form.role}
              onChange={e=>setForm({ ...form, role: e.target.value })}>
        <option value="student">Student</option><option value="parent">Parent</option>
        <option value="teacher">Teacher</option><option value="sponsor">Sponsor</option>
      </select>
      <textarea className="rounded bg-white/10 p-2" rows={5} placeholder="Message"
                value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} required />
      <button className="rounded bg-ttred px-4 py-2 font-semibold">Send</button>
    </form>
  );
}
