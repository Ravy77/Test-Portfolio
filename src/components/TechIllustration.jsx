import React from 'react';
import { Database, Network, Code2, Server, ShieldCheck, Cpu, Terminal, Layers } from 'lucide-react';

export function HeroTechIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none" aria-hidden="true">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-cyanAccent/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      {/* Outer subtle rotating dashed ring */}
      <div className="absolute inset-4 rounded-full border border-primary/20 border-dashed animate-spin-slow pointer-events-none" />

      {/* Middle cyan counter-rotating ring */}
      <div className="absolute inset-14 rounded-full border border-cyanAccent/25 border-dotted animate-reverse-spin pointer-events-none" />

      {/* Solid inner glow ring */}
      <div className="absolute inset-24 rounded-full border-2 border-primary/40 shadow-glow pointer-events-none" />

      {/* Center Core Node */}
      <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#0B132B] to-[#050912] border-2 border-primary shadow-glow flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 duration-300">
        <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-1 text-primary">
          <Cpu className="w-6 h-6 animate-pulse" />
        </div>
        <span className="text-[10px] uppercase tracking-widest font-mono text-cyanAccent font-bold">MIS CORE</span>
        <span className="text-[9px] text-slate-400 font-mono">SETEC LAB</span>
      </div>

      {/* Satellite Node 1: Code / Dev (Top Left) */}
      <div className="absolute top-6 left-8 z-10 flex items-center gap-2 p-2.5 rounded-xl bg-[#0B132B]/90 border border-primary/40 backdrop-blur-md shadow-card-dark transform -rotate-3 hover:scale-105 transition-all">
        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          <Code2 className="w-4 h-4" />
        </div>
        <div className="text-left font-mono">
          <p className="text-[11px] font-semibold text-slate-200">Dev Stack</p>
          <p className="text-[9px] text-cyanAccent">Java · JS · React</p>
        </div>
      </div>

      {/* Satellite Node 2: Database / SQL (Top Right) */}
      <div className="absolute top-8 right-6 z-10 flex items-center gap-2 p-2.5 rounded-xl bg-[#0B132B]/90 border border-cyanAccent/40 backdrop-blur-md shadow-card-dark transform rotate-2 hover:scale-105 transition-all">
        <div className="w-7 h-7 rounded-lg bg-cyanAccent/20 flex items-center justify-center text-cyanAccent">
          <Database className="w-4 h-4" />
        </div>
        <div className="text-left font-mono">
          <p className="text-[11px] font-semibold text-slate-200">Databases</p>
          <p className="text-[9px] text-primary">MySQL · MongoDB</p>
        </div>
      </div>

      {/* Satellite Node 3: Infrastructure / Server (Bottom Left) */}
      <div className="absolute bottom-10 left-6 z-10 flex items-center gap-2 p-2.5 rounded-xl bg-[#0B132B]/90 border border-primary/40 backdrop-blur-md shadow-card-dark transform rotate-3 hover:scale-105 transition-all">
        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          <Server className="w-4 h-4" />
        </div>
        <div className="text-left font-mono">
          <p className="text-[11px] font-semibold text-slate-200">Systems Lab</p>
          <p className="text-[9px] text-cyanAccent">Windows Server · AD</p>
        </div>
      </div>

      {/* Satellite Node 4: Network & Protocols (Bottom Right) */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2 p-2.5 rounded-xl bg-[#0B132B]/90 border border-cyanAccent/40 backdrop-blur-md shadow-card-dark transform -rotate-2 hover:scale-105 transition-all">
        <div className="w-7 h-7 rounded-lg bg-cyanAccent/20 flex items-center justify-center text-cyanAccent">
          <Network className="w-4 h-4" />
        </div>
        <div className="text-left font-mono">
          <p className="text-[11px] font-semibold text-slate-200">Networking</p>
          <p className="text-[9px] text-primary">TCP/IP · DNS · GNS3</p>
        </div>
      </div>

      {/* Geometric connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-primary/30" strokeWidth="1.5">
        <line x1="25%" y1="18%" x2="50%" y2="50%" strokeDasharray="4 4" />
        <line x1="75%" y1="20%" x2="50%" y2="50%" strokeDasharray="4 4" />
        <line x1="25%" y1="80%" x2="50%" y2="50%" strokeDasharray="4 4" />
        <line x1="78%" y1="78%" x2="50%" y2="50%" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

export function ProjectVisual({ type }) {
  switch (type) {
    case 'attendance-system':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-navy-900 to-navy-850 p-4 border border-navy-border flex flex-col justify-between overflow-hidden relative group-hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between border-b border-navy-border/80 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <span className="text-[11px] font-mono text-slate-400 ml-2">AttendanceSchema.sql</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Java + MySQL</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto font-mono text-[10px]">
            <div className="p-2 rounded bg-navy-800/80 border border-primary/30 text-left">
              <p className="text-cyanAccent font-semibold mb-1">TBL_STUDENT</p>
              <p className="text-slate-400">PK student_id</p>
              <p className="text-slate-400">name, class_id</p>
            </div>
            <div className="flex flex-col items-center justify-center text-primary">
              <span className="text-[9px] text-slate-400 mb-0.5">1-to-Many</span>
              <div className="w-full h-0.5 bg-primary/40 relative">
                <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-primary rotate-45"></div>
              </div>
            </div>
            <div className="p-2 rounded bg-navy-800/80 border border-cyanAccent/30 text-left">
              <p className="text-primary font-semibold mb-1">TBL_ATTENDANCE</p>
              <p className="text-slate-400">FK student_id</p>
              <p className="text-emerald-400">status: PRESENT</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-navy-border/60">
            <span>Workflow: System Analysis</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 3NF Normalized
            </span>
          </div>
        </div>
      );

    case 'mongodb-modeling':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-navy-900 to-navy-850 p-4 border border-navy-border flex flex-col justify-between overflow-hidden relative group-hover:border-cyanAccent/50 transition-colors">
          <div className="flex items-center justify-between border-b border-navy-border/80 pb-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
              <Database className="w-3.5 h-3.5" />
              <span>db.students.aggregate()</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">NoSQL BSON</span>
          </div>

          <div className="font-mono text-[11px] text-slate-300 bg-navy-950/70 p-2.5 rounded-lg border border-navy-border my-auto overflow-hidden">
            <p className="text-slate-400">{`{`}</p>
            <p className="pl-3 text-cyanAccent">_id: <span className="text-slate-400">ObjectId("..."),</span></p>
            <p className="pl-3 text-cyanAccent">name: <span className="text-emerald-300">"Ravy Voeun",</span></p>
            <p className="pl-3 text-cyanAccent">pipeline: <span className="text-primary">[ "$match", "$group", "$sort" ]</span></p>
            <p className="text-slate-400">{`}`}</p>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-navy-border/60">
            <span className="text-slate-400">CRUD & Aggregations</span>
            <span className="text-cyanAccent">Document Schemas</span>
          </div>
        </div>
      );

    case 'exchange-server':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-navy-900 to-navy-850 p-4 border border-navy-border flex flex-col justify-between overflow-hidden relative group-hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between border-b border-navy-border/80 pb-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-primary">
              <Server className="w-3.5 h-3.5" />
              <span>Windows Server Lab</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">AD DS & DNS</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto items-center text-center font-mono">
            <div className="p-2 rounded bg-navy-800/80 border border-primary/30">
              <Server className="w-4 h-4 mx-auto text-primary mb-1" />
              <p className="text-[10px] font-semibold text-slate-200">DC01 (AD DS)</p>
              <p className="text-[8px] text-slate-400">DNS & Auth</p>
            </div>
            <div className="flex flex-col items-center text-primary text-[10px]">
              <span className="text-[8px] text-cyanAccent">SMTP / TLS</span>
              <div className="w-full border-b border-dashed border-primary my-1"></div>
              <span className="text-[8px] text-slate-400">Autodiscover</span>
            </div>
            <div className="p-2 rounded bg-navy-800/80 border border-cyanAccent/30">
              <Layers className="w-4 h-4 mx-auto text-cyanAccent mb-1" />
              <p className="text-[10px] font-semibold text-slate-200">Exchange 2019</p>
              <p className="text-[8px] text-slate-400">Mailbox & OWA</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-navy-border/60">
            <span>Virtual Directories & SSL</span>
            <span className="text-emerald-400">Verified Internal Lab</span>
          </div>
        </div>
      );

    case 'portfolio-website':
    default:
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-navy-900 to-navy-850 p-4 border border-navy-border flex flex-col justify-between overflow-hidden relative group-hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between border-b border-navy-border/80 pb-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-primary">
              <Code2 className="w-3.5 h-3.5" />
              <span>React 19 + Tailwind</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Vite Bundle</span>
          </div>

          <div className="p-2.5 rounded-lg bg-navy-950/80 border border-navy-border/80 my-auto">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center text-[7px] font-bold text-navy-950">RV</div>
              <div className="h-1.5 w-16 bg-slate-600 rounded"></div>
              <div className="ml-auto flex gap-1">
                <span className="w-2 h-2 rounded-full bg-cyanAccent"></span>
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-9 bg-navy-850 rounded border border-primary/20 p-1 flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-primary/20"></div>
                <div className="space-y-1">
                  <div className="w-8 h-1 bg-slate-500 rounded"></div>
                  <div className="w-12 h-1 bg-cyanAccent/60 rounded"></div>
                </div>
              </div>
              <div className="h-9 bg-navy-850 rounded border border-cyanAccent/20 p-1 flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-cyanAccent/20"></div>
                <div className="space-y-1">
                  <div className="w-8 h-1 bg-slate-500 rounded"></div>
                  <div className="w-10 h-1 bg-primary/60 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-navy-border/60">
            <span>Responsive & Accessible</span>
            <span className="text-cyanAccent">Dark / Light Themes</span>
          </div>
        </div>
      );
  }
}
