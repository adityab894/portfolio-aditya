export const metadata = { title: "Projects - Innovator" };

const projects = [
  {
    title: "Project Atlas",
    blurb: "A modern analytics dashboard with real-time charts and role-based access.",
  },
  {
    title: "Nova Storefront",
    blurb: "Headless e-commerce PWA with edge caching and incremental static regen.",
  },
  {
    title: "Aurora UI Kit",
    blurb: "A polished component library powered by tokens and theming.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 max-w-[1024px] mx-auto">
      <h2 className="h3-section">Projects</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="rounded-[16px] border border-[color:var(--neutral-border-primary)] p-6 flex flex-col" style={{ boxShadow: 'var(--shadow-inner)' }}>
            <div className="rounded-[12px] h-[140px] mb-4" style={{ background: 'linear-gradient(135deg, rgba(171,255,230,0.15), rgba(255,255,255,0.04))' }} />
            <h3 className="body-large">{p.title}</h3>
            <p className="body-medium text-secondary mt-2">{p.blurb}</p>
            <div className="mt-auto pt-4">
              <a href="#" className="btn btn-primary body-medium">View Case Study</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


