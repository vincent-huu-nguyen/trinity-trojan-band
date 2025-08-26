import NewsletterSubscribe from "./subscribe";
import { supabase } from "@/lib/supabase";

export default async function Newsletter() {
  const { data } = await supabase.from("newsletters").select("*").order("published_at", { ascending: false });
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-bold">Weekly Newsletter</h1>
      <NewsletterSubscribe />
      <ul className="grid gap-3">
        {(data ?? []).map(n => (
          <li key={n.id} className="rounded bg-white/5 p-4">
            <div className="font-semibold">{n.title}</div>
            {n.link_url && <a className="text-ttred underline" href={n.link_url} target="_blank">Open</a>}
          </li>
        ))}
      </ul>
    </section>
  );
}
