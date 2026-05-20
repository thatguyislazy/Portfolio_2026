"use client";

import { useState, FormEvent } from "react";
import { Section } from "./section";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<FormState>;

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const e: Errors = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";

    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }

      setSent(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setServerError(message);
    } finally {
      setLoading(false);
    }
  };

  const field = (key: keyof FormState, label: string, type = "text") => (
    <div>
      <label className="font-mono text-xs text-slate-400 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => {
          setForm({ ...form, [key]: e.target.value });
          if (errors[key]) setErrors({ ...errors, [key]: undefined });
        }}
        className={`mt-1 w-full glass-input ${
          errors[key] ? "border-red-400/60" : ""
        }`}
      />
      {errors[key] && (
        <p className="text-red-400 text-xs mt-1">{errors[key]}</p>
      )}
    </div>
  );

  return (
    <Section
      id="contact"
      eyebrow=""
      title={
        <>
          Let&apos;s <span className="text-gradient">build</span> something.
        </>
      }
      description="Have a project, a hardware idea, or a QA initiative? My inbox is open."
    >
      <div className="grid md:grid-cols-5 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-5">
          <a
            href="mailto:marcadriancuano@gmail.com"
            className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5 text-accent" />
            macuano.work@gmail.com
          </a>

          <a
            href="tel:+639465339112"
            className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
          >
            <Phone className="w-5 h-5 text-accent" />
            +63 946 533 9112
          </a>
        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="md:col-span-3 glass-strong p-6 space-y-4"
        >
          {sent ? (
            <div className="flex flex-col items-center text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-display text-xl font-semibold">
                Message sent
              </h3>
              <p className="text-slate-400 mt-2">
                Thanks, {form.name.split(" ")[0] || "friend"} — I&apos;ll be in
                touch shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                {field("name", "Name")}
                {field("email", "Email", "email")}
              </div>

              {field("subject", "Subject")}

              <div>
                <label className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`mt-1 w-full glass-input resize-none ${
                    errors.message ? "border-red-400/60" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {serverError && (
                <p className="text-red-400 text-sm">{serverError}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="glass-btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </Section>
  );
}