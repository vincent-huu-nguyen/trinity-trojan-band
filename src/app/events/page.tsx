import CalendarEmbed from "@/components/CalendarEmbed";

export default function Events() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">Events</h1>
      <CalendarEmbed src="https://calendar.google.com/calendar/embed?src=<YOUR_MAIN_CALENDAR_EMBED_URL>" />
    </div>
  );
}
