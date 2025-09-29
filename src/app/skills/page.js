export const metadata = { title: "Skills - Innovator" };

const skills = [
  { name: "React & Next.js", desc: "App router, SSR, performance, DX" },
  { name: "TypeScript", desc: "Typesafe APIs and robust UI states" },
  { name: "Design Systems", desc: "Tokens, components, accessibility" },
  { name: "Node & APIs", desc: "REST/GraphQL, auth, integrations" },
];

export default function SkillsPage() {
  return (
    <main className="px-6 py-16 max-w-[960px] mx-auto">
      <h2 className="h3-section">Skills</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.name} className="rounded-[16px] border border-[color:var(--neutral-border-primary)] p-6" style={{ boxShadow: 'var(--shadow-inner)' }}>
            <h3 className="body-large text-brand">{s.name}</h3>
            <p className="body-medium text-secondary mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


