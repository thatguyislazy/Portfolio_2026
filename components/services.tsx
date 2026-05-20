import { Section } from "./section";
import { Globe, Smartphone, Cpu, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-stack Web Applications",
    text: "Next.js and React platforms — from marketing sites to complex realtime dashboards, with clean architecture and measurable performance budgets.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Flutter and Kotlin apps with offline-first sync, on-device ML, and native-feeling UX on Android.",
  },
  {
    icon: Cpu,
    title: "IoT Prototyping & Firmware",
    text: "ESP32, Arduino, Raspberry Pi, and STM32 builds — sensor networks, custom circuits, and PCB-ready prototypes.",
  },
  {
    icon: ShieldCheck,
    title: "QA Engineering Consulting",
    text: "Test planning, UAT, validation systems, and bug-tracking workflows that lift release confidence and reduce regressions.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow=""
      title="What I can build for you."
    >
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950/70 border border-white/5 hover:border-teal-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl min-h-[180px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500" />
            
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-teal-500/0 group-hover:bg-teal-500/5 blur-2xl transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Micro-container for Icons - Match styling with smooth transitions */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950/80 border border-white/[0.04] text-slate-300 group-hover:text-teal-400 group-hover:border-teal-500/20 transition-all duration-300 mb-5">
                  <s.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2 text-white group-hover:text-teal-400 transition-colors duration-200 tracking-tight">
                  {s.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed font-normal mt-1">
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}