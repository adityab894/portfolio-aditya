export const metadata = { title: "About Me - Innovator" };

export default function AboutUsPage() {
  return (
    <main className="px-6 py-16 max-w-[960px] mx-auto">
      <h2 className="h3-section">About Me</h2>
      <p className="body-large text-secondary mt-6">
        I build scalable, user-centric products with a focus on craft and impact. My strengths are rapid prototyping, thoughtful UX, and clean, maintainable code.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-[16px] border border-[color:var(--neutral-border-primary)] p-6" style={{ boxShadow: 'var(--shadow-inner)' }}>
          <h3 className="body-large text-brand">What I Do</h3>
          <p className="body-medium text-secondary mt-3">Web apps, design systems, performance tuning, and delightful interactions.</p>
        </div>
        <div className="rounded-[16px] border border-[color:var(--neutral-border-primary)] p-6" style={{ boxShadow: 'var(--shadow-inner)' }}>
          <h3 className="body-large text-brand">How I Work</h3>
          <p className="body-medium text-secondary mt-3">Iterative delivery, clear communication, and a strong eye for polish.</p>
        </div>
      </div>
    </main>
  );
}


