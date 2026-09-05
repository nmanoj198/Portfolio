import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule, CardModule],
  template: `
  <header class="fixed top-0 left-0 right-0 z-50 px-5 py-4">
    <nav class="glass max-w-6xl mx-auto rounded-2xl px-5 py-3 flex items-center justify-between">
      <a href="#home" class="mono font-semibold tracking-tight text-sm">
        <span class="text-cyan-300">&lt;</span>YOUR NAME<span class="text-cyan-300">/&gt;</span>
      </a>
      <div class="hidden md:flex gap-6 text-sm text-slate-300">
        <a href="#about" class="hover:text-white">About</a>
        <a href="#skills" class="hover:text-white">Skills</a>
        <a href="#projects" class="hover:text-white">Projects</a>
        <a href="#experience" class="hover:text-white">Experience</a>
        <a href="#contact" class="hover:text-white">Contact</a>
      </div>
      <p-button label="Let's connect" size="small" [outlined]="true" (onClick)="scroll('contact')" />
    </nav>
  </header>

  <main id="home" class="grid-bg">
    <section class="min-h-screen max-w-6xl mx-auto px-5 pt-36 pb-20 grid lg:grid-cols-[1.25fr_.75fr] gap-14 items-center">
      <div>
        <div class="inline-flex items-center gap-2 glass rounded-full px-3 py-2 text-xs text-slate-300 mb-7">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for meaningful engineering conversations
        </div>

        <p class="mono text-cyan-300 text-sm mb-4">JAVA • SPRING BOOT • ANGULAR • ENTERPRISE SYSTEMS</p>
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-[.98]">
          I build <span class="gradient-text">secure, scalable</span> web systems that survive production.
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          Software Engineer focused on enterprise applications, full-stack delivery,
          maintainable architecture and production-grade data systems.
        </p>

        <div class="flex flex-wrap gap-3 mt-9">
          <p-button label="Explore my work" icon="pi pi-arrow-down" (onClick)="scroll('projects')" />
          <p-button label="Download résumé" icon="pi pi-file-pdf" severity="secondary" [outlined]="true" />
        </div>

        <div class="flex flex-wrap gap-2 mt-9">
          <p-tag value="2+ Years Engineering" />
          <p-tag value="Java / Spring Boot" severity="success" />
          <p-tag value="Angular / PrimeNG" severity="info" />
          <p-tag value="PostgreSQL / MySQL" severity="secondary" />
        </div>
      </div>

      <div class="relative arch float hidden lg:block">
        <div class="glass rounded-3xl p-5">
          <div class="flex justify-between items-center mb-5">
            <div>
              <p class="mono text-xs text-cyan-300">SYSTEM BLUEPRINT</p>
              <h2 class="text-xl font-bold mt-1">Enterprise Delivery Stack</h2>
            </div>
            <i class="pi pi-sitemap text-2xl text-violet-300"></i>
          </div>

          <div class="grid gap-3">
            <div class="arch-node glass rounded-xl p-4">
              <div class="flex justify-between">
                <span class="font-semibold">Angular + PrimeNG</span>
                <span class="mono text-xs text-cyan-300">UI</span>
              </div>
              <p class="text-xs text-slate-400 mt-1">Accessible enterprise workflows</p>
            </div>
            <div class="text-center text-slate-600">↓</div>
            <div class="arch-node glass rounded-xl p-4">
              <div class="flex justify-between">
                <span class="font-semibold">Spring Boot APIs</span>
                <span class="mono text-xs text-violet-300">API</span>
              </div>
              <p class="text-xs text-slate-400 mt-1">Security • validation • services</p>
            </div>
            <div class="text-center text-slate-600">↓</div>
            <div class="grid grid-cols-2 gap-3">
              <div class="arch-node glass rounded-xl p-4">
                <span class="font-semibold text-sm">PostgreSQL</span>
                <p class="text-xs text-slate-400 mt-1">Production data</p>
              </div>
              <div class="arch-node glass rounded-xl p-4">
                <span class="font-semibold text-sm">JWT Security</span>
                <p class="text-xs text-slate-400 mt-1">Protected APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-5 pb-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="glass rounded-2xl p-5"><p class="text-3xl font-bold">2+</p><p class="text-sm text-slate-400 mt-1">Years experience</p></div>
        <div class="glass rounded-2xl p-5"><p class="text-3xl font-bold">E2E</p><p class="text-sm text-slate-400 mt-1">Full-stack ownership</p></div>
        <div class="glass rounded-2xl p-5"><p class="text-3xl font-bold">SQL</p><p class="text-sm text-slate-400 mt-1">Production data systems</p></div>
        <div class="glass rounded-2xl p-5"><p class="text-3xl font-bold">∞</p><p class="text-sm text-slate-400 mt-1">Curiosity to improve</p></div>
      </div>
    </section>

    <section id="about" class="section max-w-6xl mx-auto px-5 py-24">
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <p class="mono text-cyan-300 text-xs">01 / ABOUT</p>
          <h2 class="text-4xl font-bold mt-3">Engineer first. Product aware. Production accountable.</h2>
        </div>
        <div class="text-slate-400 leading-8">
          <p>
            I design and develop enterprise web applications where reliability, security,
            maintainability and usability matter. My strongest zone is the boundary between
            backend engineering and rich business-focused frontend experiences.
          </p>
          <p class="mt-5">
            I enjoy taking requirements from an idea to a production-ready system:
            architecture, APIs, authentication, database design, UI workflows, validation,
            troubleshooting and long-term maintenance.
          </p>
        </div>
      </div>
    </section>

    <section id="skills" class="section max-w-6xl mx-auto px-5 py-24">
      <p class="mono text-cyan-300 text-xs">02 / ENGINEERING TOOLKIT</p>
      <h2 class="text-4xl font-bold mt-3">Skills that map to real delivery.</h2>
      <div class="grid md:grid-cols-3 gap-4 mt-10">
        <p-card header="Backend Engineering">
          <p class="text-slate-400">Java, Spring Boot, REST APIs, Spring Security, JWT, validation, exception handling, service/repository architecture.</p>
        </p-card>
        <p-card header="Frontend Engineering">
          <p class="text-slate-400">Angular, TypeScript, PrimeNG, reactive UI patterns, reusable components, forms, data tables and enterprise workflows.</p>
        </p-card>
        <p-card header="Data & Production">
          <p class="text-slate-400">PostgreSQL, MySQL, relational modeling, query design, production data management, security and maintenance.</p>
        </p-card>
      </div>
    </section>

    <section class="section max-w-6xl mx-auto px-5 py-24">
      <p class="mono text-cyan-300 text-xs">03 / ARCHITECTURE</p>
      <h2 class="text-4xl font-bold mt-3">Show, don't just tell.</h2>
      <p class="text-slate-400 max-w-2xl mt-4">This section deliberately turns your portfolio into an engineering artifact: visitors can understand how you think about an enterprise system.</p>

      <div class="glass rounded-3xl p-6 mt-10 overflow-hidden">
        <div class="grid lg:grid-cols-4 gap-4">
          <div class="arch-node rounded-2xl border border-white/10 p-5 bg-white/[.02]">
            <p class="mono text-xs text-cyan-300">CLIENT</p><h3 class="font-bold mt-2">Angular</h3><p class="text-xs text-slate-400 mt-2">Components, forms, PrimeNG, UX</p>
          </div>
          <div class="arch-node rounded-2xl border border-white/10 p-5 bg-white/[.02]">
            <p class="mono text-xs text-violet-300">EDGE</p><h3 class="font-bold mt-2">API Security</h3><p class="text-xs text-slate-400 mt-2">JWT, CORS, validation, headers</p>
          </div>
          <div class="arch-node rounded-2xl border border-white/10 p-5 bg-white/[.02]">
            <p class="mono text-xs text-emerald-300">CORE</p><h3 class="font-bold mt-2">Spring Services</h3><p class="text-xs text-slate-400 mt-2">Business logic, transactions</p>
          </div>
          <div class="arch-node rounded-2xl border border-white/10 p-5 bg-white/[.02]">
            <p class="mono text-xs text-amber-300">DATA</p><h3 class="font-bold mt-2">SQL</h3><p class="text-xs text-slate-400 mt-2">Postgres / MySQL, persistence</p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section max-w-6xl mx-auto px-5 py-24">
      <p class="mono text-cyan-300 text-xs">04 / SELECTED WORK</p>
      <h2 class="text-4xl font-bold mt-3">Projects that demonstrate engineering depth.</h2>
      <div class="grid md:grid-cols-2 gap-5 mt-10">
        <p-card *ngFor="let project of projects" [header]="project.name">
          <p class="text-slate-400">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mt-5">
            <p-tag *ngFor="let tech of project.tech" [value]="tech" severity="secondary" />
          </div>
          <div class="mt-5 text-sm text-cyan-300">{{ project.impact }}</div>
        </p-card>
      </div>
    </section>

    <section id="experience" class="section max-w-6xl mx-auto px-5 py-24">
      <p class="mono text-cyan-300 text-xs">05 / EXPERIENCE</p>
      <h2 class="text-4xl font-bold mt-3">Professional journey.</h2>
      <div class="mt-10 border-l border-white/10 ml-2 pl-7 space-y-10">
        <div>
          <p class="mono text-xs text-cyan-300">2024 — PRESENT</p>
          <h3 class="text-xl font-bold mt-2">Software Engineer · Your Organisation</h3>
          <p class="text-slate-400 mt-3 max-w-3xl">Develop enterprise applications across Java/Spring Boot and Angular, owning features from requirements through production maintenance.</p>
        </div>
        <div>
          <p class="mono text-xs text-violet-300">EARLIER</p>
          <h3 class="text-xl font-bold mt-2">Engineering Foundation</h3>
          <p class="text-slate-400 mt-3 max-w-3xl">Built depth in full-stack development, relational databases, secure APIs, debugging and maintainable application design.</p>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-5 py-24">
      <p class="mono text-cyan-300 text-xs">06 / CREDENTIALS</p>
      <h2 class="text-4xl font-bold mt-3">Achievements & certifications.</h2>
      <div class="grid md:grid-cols-3 gap-4 mt-10">
        <div class="glass rounded-2xl p-6"><i class="pi pi-verified text-cyan-300 text-2xl"></i><h3 class="font-bold mt-4">Certification</h3><p class="text-sm text-slate-400 mt-2">Add your official certification title, issuer and year.</p></div>
        <div class="glass rounded-2xl p-6"><i class="pi pi-trophy text-violet-300 text-2xl"></i><h3 class="font-bold mt-4">Achievement</h3><p class="text-sm text-slate-400 mt-2">Highlight measurable engineering impact or recognition.</p></div>
        <div class="glass rounded-2xl p-6"><i class="pi pi-chart-line text-emerald-300 text-2xl"></i><h3 class="font-bold mt-4">Growth</h3><p class="text-sm text-slate-400 mt-2">Show the progression from implementation to architecture thinking.</p></div>
      </div>
    </section>

    <section id="contact" class="section max-w-6xl mx-auto px-5 py-24">
      <div class="glass rounded-3xl p-8 md:p-12 text-center">
        <p class="mono text-cyan-300 text-xs">07 / NETWORK</p>
        <h2 class="text-4xl md:text-5xl font-bold mt-3">Let's build something worth talking about.</h2>
        <p class="text-slate-400 max-w-2xl mx-auto mt-5">
          Open to connecting with HRs, engineering leaders, architects and teams working on meaningful enterprise products.
        </p>
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <p-button label="Email me" icon="pi pi-envelope" />
          <p-button label="LinkedIn" icon="pi pi-linkedin" severity="secondary" [outlined]="true" />
          <p-button label="GitHub" icon="pi pi-github" severity="secondary" [outlined]="true" />
        </div>
      </div>
    </section>
  </main>

  <footer class="max-w-6xl mx-auto px-5 py-10 text-sm text-slate-500 flex justify-between">
    <span>© 2026 YOUR NAME</span><span class="mono">engineered with intent</span>
  </footer>
  `,
  styles: [`
    :host { display:block; }
    :host ::ng-deep .p-card { height:100%; background:rgba(15,23,42,.58); border:1px solid rgba(148,163,184,.12); }
    :host ::ng-deep .p-card-title { color:#e5eefc; }
    :host ::ng-deep .p-button { border-radius: .8rem; }
    :host ::ng-deep .p-tag { border-radius: 999px; }
  `]
})
export class HomePage {
  projects = [
    {
      name: 'Enterprise Operations Platform',
      description: 'Full-stack business application with secure APIs, rich Angular workflows, production SQL data and maintainable service architecture.',
      tech: ['Java', 'Spring Boot', 'Angular', 'PrimeNG', 'PostgreSQL'],
      impact: 'Impact → Replace this with a measurable result.'
    },
    {
      name: 'Secure Data Management Suite',
      description: 'Role-aware application for managing production records with validation, authentication, structured persistence and operational controls.',
      tech: ['Spring Security', 'JWT', 'TypeScript', 'MySQL'],
      impact: 'Impact → Replace this with a measurable result.'
    }
  ];

  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
