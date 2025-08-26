"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Admin() {
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return setOk(false);
      const { data } = await supabase.from("profiles").select("role").eq("id", user.id).single();
      setOk(data?.role === "admin");
    })();
  }, []);

  if (ok === null) return null;           // spinner
  if (!ok) return <p>Unauthorized</p>;    // RLS still protects the data

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {/* Tabs: Users / Events / Sponsors / Newsletters / Export */}
    </div>
  );
}
