"use client";

import * as React from "react";
import { User, Sparkles, CalendarDays, Clock, Users, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { site } from "@/data/site";
import { bookingOptions } from "@/data/treatments";

/** Time slots between opening and last-appointment (30-min steps). */
function buildSlots(open: string, close: string): string[] {
  const [oh, om] = open.split(":").map(Number);
  const [ch] = close.split(":").map(Number);
  const slots: string[] = [];
  let h = oh;
  let m = om;
  // last start ~1h before close
  while (h < ch - 1 || (h === ch - 1 && m === 0)) {
    slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    m += 30;
    if (m >= 60) {
      m = 0;
      h += 1;
    }
  }
  return slots;
}

export function BookingForm() {
  const { tr } = useLanguage();
  const [name, setName] = React.useState("");
  const [treatment, setTreatment] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [people, setPeople] = React.useState(1);

  const slots = React.useMemo(
    () => buildSlots(site.hours.open, site.hours.close),
    [],
  );

  // Preselect treatment when a "Book" button in the menu is clicked.
  React.useEffect(() => {
    const onSelect = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setTreatment(detail);
    };
    window.addEventListener("select-treatment", onSelect);
    return () => window.removeEventListener("select-treatment", onSelect);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      tr("form.msg.intro"),
      "",
      `• ${tr("form.msg.name")}: ${name || "-"}`,
      `• ${tr("form.msg.treatment")}: ${treatment || "-"}`,
      `• ${tr("form.msg.date")}: ${date || "-"}`,
      `• ${tr("form.msg.time")}: ${time || "-"}`,
      `• ${tr("form.msg.people")}: ${people} ${tr("form.people.unit")}`,
      "",
      tr("form.msg.outro"),
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${site.phone.whatsapp}?text=${text}`, "_blank", "noopener");
  };

  const base =
    "w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/60 bg-card p-6 text-left shadow-lg sm:p-8"
    >
      <h3 className="font-heading text-2xl font-bold text-foreground">{tr("form.title")}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{tr("form.desc")}</p>

      <div className="mt-6 space-y-4">
        {/* Name */}
        <Field label={tr("form.name")} htmlFor="bf-name" icon={User}>
          <input
            id="bf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={tr("form.name.ph")}
            className={base}
          />
        </Field>

        {/* Treatment */}
        <Field label={tr("form.treatment")} htmlFor="bf-treat" icon={Sparkles}>
          <select
            id="bf-treat"
            required
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className={base + " appearance-none pr-8"}
          >
            <option value="" disabled>
              {tr("form.treatment.ph")}
            </option>
            {bookingOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        {/* Date + Time */}
        <div className="grid grid-cols-2 gap-4">
          <Field label={tr("form.date")} htmlFor="bf-date" icon={CalendarDays}>
            <input
              id="bf-date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={base}
            />
          </Field>
          <Field label={tr("form.time")} htmlFor="bf-time" icon={Clock}>
            <select
              id="bf-time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={base + " appearance-none pr-8"}
            >
              <option value="" disabled>
                {tr("form.time.ph")}
              </option>
              {slots.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* People */}
        <Field label={tr("form.people")} htmlFor="bf-people" icon={Users}>
          <input
            id="bf-people"
            type="number"
            min={1}
            max={8}
            required
            value={people}
            onChange={(e) => setPeople(Math.max(1, Number(e.target.value) || 1))}
            className={base}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe5a]"
      >
        <MessageCircle className="size-5" />
        {tr("form.submit")}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-foreground/80">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        {children}
      </div>
    </div>
  );
}
