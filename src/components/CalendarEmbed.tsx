export default function CalendarEmbed({ src }: { src: string }) {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow">
      <iframe src={src} style={{ border: 0 }} width="100%" height="700" loading="lazy" />
    </div>
  );
}
