export const metadata = { title: "Contact - Innovator" };

export default function ContactPage() {
  return (
    <main className="px-6 py-16 max-w-[720px] mx-auto">
      <h2 className="h3-section">Contact</h2>
      <p className="body-large text-secondary mt-6">Have a project in mind? Let’s talk.</p>
      <form className="mt-8 grid gap-4">
        <input className="body-medium rounded-[12px] px-4 py-3 bg-transparent border border-[color:var(--neutral-border-secondary)] text-primary" placeholder="Your name" />
        <input className="body-medium rounded-[12px] px-4 py-3 bg-transparent border border-[color:var(--neutral-border-secondary)] text-primary" placeholder="Email" type="email" />
        <textarea className="body-medium rounded-[12px] px-4 py-3 bg-transparent border border-[color:var(--neutral-border-secondary)] text-primary min-h-[140px]" placeholder="Tell me about your project" />
        <button type="submit" className="btn btn-primary body-large w-fit">Send Message</button>
      </form>
    </main>
  );
}


