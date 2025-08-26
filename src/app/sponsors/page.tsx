import { supabase } from "@/lib/supabase";

export default async function Sponsors() {
  const { data: sponsors } = await supabase.from("sponsors").select("*").order("tier", { ascending: true });
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-bold">Sponsors</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {(sponsors ?? []).map(s => (
          <a key={s.id} href={s.website_url ?? "#"} target="_blank" className="rounded bg-white/5 p-4 hover:bg-white/10">
            {s.logo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={s.logo_url} alt={s.name} className="mx-auto h-16 object-contain" />
            ) : (
              <div className="h-16" />
            )}
            <div className="mt-2 text-center text-sm">{s.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
