"use client";

import { useState } from "react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((err) => ({ ...err, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--accent-tint)",
          border: "1px solid var(--accent-soft)",
          borderRadius: 16,
          padding: 40,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
        <h3 style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.5rem", fontWeight: 500, marginBottom: 12 }}>
          Message sent!
        </h3>
        <p className="lede" style={{ fontSize: "1rem" }}>
          Thanks! Edit will be in touch within 1 business day.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialState); }}
          className="btn btn-secondary"
          style={{ marginTop: 24 }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-grid" style={{ marginBottom: 18 }}>
        <div className="field">
          <label htmlFor="firstName">First name *</label>
          <input
            id="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange("firstName")}
            className={errors.firstName ? "error" : ""}
            autoComplete="given-name"
          />
          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
        </div>
        <div className="field">
          <label htmlFor="lastName">Last name *</label>
          <input
            id="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange("lastName")}
            className={errors.lastName ? "error" : ""}
            autoComplete="family-name"
          />
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-grid" style={{ marginBottom: 18 }}>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className={errors.email ? "error" : ""}
            autoComplete="email"
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="field" style={{ marginBottom: 18 }}>
        <label htmlFor="reason">What brings you here?</label>
        <select id="reason" value={form.reason} onChange={handleChange("reason")}>
          <option value="">Select a topic…</option>
          <option value="buying">Buying</option>
          <option value="selling">Selling</option>
          <option value="mortgage">Mortgage</option>
          <option value="investing">Investing</option>
          <option value="general">General question</option>
        </select>
      </div>

      <div className="field" style={{ marginBottom: 24 }}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          className={errors.message ? "error" : ""}
          placeholder="Tell me a bit about where you are and what you're looking to accomplish…"
        />
        {errors.message && <span className="error-msg">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary btn-lg">
        Send message →
      </button>
    </form>
  );
}
