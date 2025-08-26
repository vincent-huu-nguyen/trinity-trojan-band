"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Tab = "users" | "events" | "sponsors" | "newsletters" | "export";

export default function Admin() {
  const [ok, setOk] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>("users");

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return setOk(false);
      const { data } = await supabase.from("profiles").select("role").eq("id", user.id).single();
      setOk(data?.role === "admin");
    })();
  }, []);

  if (ok === null) return null;
  if (!ok) return <p className="text-red-300">Unauthorized</p>;

  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-2">
        {(["users","events","sponsors","newsletters","export"] as Tab[]).map(t => (
          <button key={t} onClick={()=>setTab(t)}
                  className={`rounded px-3 py-1 ${tab===t ? "bg-ttred" : "bg-white/10"}`}>{t}</button>
        ))}
      </div>
      {tab === "export" && <ExportUsers />}
      {/* TODO: build tables/forms for Users/Events/Sponsors/Newsletters */}
    </section>
  );
}

function ExportUsers() {
  const run = async () => {
    const r = await fetch("/api/export/users");
    const blob = await r.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "profiles.csv"; a.click();
    URL.revokeObjectURL(url);
  };
  return <button onClick={run} className="rounded bg-ttred px-4 py-2 font-semibold">Download Users CSV</button>;
}
