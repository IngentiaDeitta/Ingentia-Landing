"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X, FileText, BarChart3, Bell, Clock, Eye, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SplineSceneBasic } from "@/components/ui/hero-demo";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Header } from "@/components/ui/navbar";
import { SplineScene } from "@/components/ui/splite";
import Image from "next/image";
import { TransitionSection } from "@/components/ui/transition-section";
import TextReveal from "@/components/ui/text-reveal";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { Ripple } from "@/components/ui/material-design-3-ripple";
import { submitLead } from "./actions";
import { CheckCircle2 } from "lucide-react";

// ─────────────────────────────────────────
// Hero Scroll Demo (Dashboard)
// ─────────────────────────────────────────
function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-background transition-colors duration-500 pb-[100px] pt-[50px]">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-balance uppercase tracking-widest mb-4">
              Tu operación,
            </h2>
            <div className="text-5xl md:text-[6rem] font-[900] leading-[1.1] text-accent-blue block mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Bajo Control.
            </div>
            <p className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto">
              Visualizá en tiempo real cada proceso de tu empresa. Sin planillas. Sin caos.
            </p>
          </>
        }
      >
        <Image
          src={`/dashboard-new.png`}
          alt="Panel de control operativo de Ingentia"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}

// ─────────────────────────────────────────
// Hero
// ─────────────────────────────────────────
const Hero = () => {
  return (
    <>
      <section id="hero" className="relative w-full overflow-hidden">
        <SplineSceneBasic />
      </section>
      <HeroScrollDemo />
    </>
  );
};

// ─────────────────────────────────────────
// Section 2: Problem
// ─────────────────────────────────────────

const ProblemSection = () => {
  const pains = [
    {
      Icon: Clock,
      name: "Cambio constante de contexto",
      description: "Pasás de responder WhatsApp a revisar una planilla, a atender a un proveedor. Cada cambio de tarea cuesta 23 minutos de foco perdido.",
      color: "text-blue-600",
      iconBg: "bg-blue-100 border-blue-200",
      bg: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/10",
      className: "md:col-span-1 md:row-span-2 min-h-[300px]"
    },
    {
      Icon: Eye,
      name: "Decisiones sin datos reales",
      description: "Tomás decisiones críticas basadas en sensaciones, no en números. La información llega tarde, incompleta o desactualizada.",
      color: "text-amber-600",
      iconBg: "bg-amber-100 border-amber-200",
      bg: "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/10",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      Icon: Users,
      name: "Tu equipo trabaja para el proceso",
      description: "El 40% de las horas de tu equipo se van en tareas que no crean valor: cargar datos, exportar reportes, copiar información de un lugar a otro.",
      color: "text-cyan-600",
      iconBg: "bg-cyan-100 border-cyan-200",
      bg: "bg-cyan-500/5 hover:bg-cyan-500/10 border-cyan-500/10",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      Icon: TrendingUp,
      name: "Procesos ineficientes que frenan el crecimiento",
      description: "No es falta de personal ni de voluntad. Es la falta de sistemas que trabajen por vos mientras te concentrás en hacer crecer tu negocio.",
      color: "text-rose-600",
      iconBg: "bg-rose-100 border-rose-200",
      bg: "bg-rose-500/5 hover:bg-rose-500/10 border-rose-500/10",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="problema" className="py-24 bg-background relative overflow-hidden">
      <div className="apple-container">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              ¿Cuántas horas por semana son realmente tuyas?
            </h2>
            <p className="text-xl md:text-2xl text-muted font-light">
              El 70% de los dueños de pymes pierden más del 60% de su tiempo estratégico en tareas operativas que deberían estar automatizadas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border transition-all duration-300",
                pain.bg,
                pain.className
              )}
            >
              <Ripple
                className="h-full w-full"
                color={pain.color}
                opacity={0.15}
              >
                <div className="p-8 h-full flex flex-col relative z-10 pointer-events-none">
                  <div>
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border shadow-sm", pain.iconBg)}>
                      <pain.Icon className={cn("w-6 h-6", pain.color)} />
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-foreground tracking-tight italic">
                      {pain.name}
                    </h3>
                    <p className="text-muted text-lg font-light leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </Ripple>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Section 3: Value Prop
// ─────────────────────────────────────────
const ValuePropSection = () => {
  return (
    <section id="valor" className="py-24 bg-background text-foreground transition-colors duration-500 overflow-hidden relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <SplineScene
          scene="https://prod.spline.design/xOfaABcgXd-Ncj9F/scene.splinecode"
          className="w-full h-full pointer-events-auto"
        />
      </div>

      <div className="apple-container relative z-10 w-full pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none drop-shadow-2xl">
              No vendemos software.
              <br />
              <span className="text-accent-blue drop-shadow-lg">Eliminamos tu impuesto administrativo.</span>
            </h2>
            <p className="text-xl text-foreground font-light max-w-lg leading-relaxed mb-4">
              Somos ingenieros que entienden tu negocio antes de tocar una línea de código. El resultado: horas reales devueltas a tu agenda cada semana.
            </p>
          </motion.div>

          <div className="grid gap-6 pointer-events-auto">
            {[
              { num: "01.", title: "Fase 0: Mapeamos tu proceso real", desc: "Antes de programar nada, relevamos tu operación actual y entregamos un diagrama de procesos completo. Sabés exactamente qué va a cambiar y por qué." },
              { num: "02.", title: "Ingenieros, no sólo programadores", desc: "Hablamos de costos, márgenes, cuellos de botella y tiempos. Somos tu socio operativo, no un proveedor de tecnología." },
              { num: "03.", title: "Resultados en semanas, no meses", desc: "Cada entregable tiene un impacto medible. Te decimos exactamente cuántas horas mensuales vas a liberar antes de empezar." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/30 dark:bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl group hover:border-accent-blue/50 transition-all duration-300 transform hover:-translate-x-2"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-black text-accent-blue opacity-50">{item.num}</div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 group-hover:text-accent-blue transition-colors">{item.title}</h3>
                    <p className="text-foreground/70 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Section 4: Micro-Products
// ─────────────────────────────────────────

// ─────────────────────────────────────────
// Section 5: Methodology
// ─────────────────────────────────────────
const MethodologySection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const steps = [
    { num: "0", title: "Relevamiento (Fase 0)", desc: "Mapeamos tu operación real antes de escribir una sola línea de código. Entregamos un diagrama del proceso actual para que sepas exactamente qué vamos a automatizar y cuánto vas a recuperar." },
    { num: "1", title: "Arquitectura de la Solución", desc: "Diseñamos la solución técnica a medida: qué herramientas, qué flujos, qué integraciones. Sin plataformas genéricas que después no se adaptan a tu operación." },
    { num: "2", title: "Desarrollo e Implementación", desc: "Construimos y desplegamos la solución. Tu equipo la adopta con acompañamiento nuestro. El objetivo es impacto visible en las primeras semanas." },
    { num: "3", title: "Evolución Continua", desc: "Tu negocio cambia; tu sistema también. Evolucionamos la solución junto con tu operación para que siempre esté al servicio de tus objetivos actuales." },
  ];

  const slides = [
    {
      title: "Crecé sin aumentar tu estructura.",
      content: (
        <div className="grid grid-cols-2 gap-12 mt-12">
          {[
            { stat: "+Tiempo", label: "Ahorro en tareas repetitivas" },
            { stat: "99%", label: "Menos errores humanos" },
            { stat: "Real", label: "Decisiones en tiempo real" },
            { stat: "10x", label: "Oportunidad de escalar tus rendimientos" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-5xl md:text-7xl font-black text-accent-blue mb-2">{s.stat}</div>
              <div className="text-xl text-muted font-black uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "El Camino de Ingeniería.",
      content: (
        <div className="mt-12 relative">
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-border/30" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="relative rounded-2xl p-0.5">
                <GlowingEffect spread={30} glow proximity={60} inactiveZone={0.01} borderWidth={2} />
                <div className="relative flex flex-col bg-card p-6 rounded-[14px] border border-border/40 h-full">
                  <div className="w-12 h-12 rounded-full bg-accent-blue text-white flex items-center justify-center text-xl font-black mb-4 shadow-lg shrink-0">
                    {step.num}
                  </div>
                  <h4 className="text-base font-black leading-tight text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "¿Por qué no somos una consultora?",
      content: (
        <div className="mt-12 grid grid-cols-2 gap-8">
          {[
            {
              label: "Consultoría Tradicional",
              bad: true,
              points: ["Proyectos de 6+ meses", "Alto costo inicial", "Soluciones genéricas", "Retorno incierto y tardío"],
            },
            {
              label: "Ingentia",
              bad: false,
              points: ["Resultados en semanas", "Inversión escalable", "Soluciones hechas a medida", "Retorno visible desde el primer mes"],
            },
          ].map((col, i) => (
            <div key={i} className={cn("p-8 rounded-3xl border", col.bad ? "border-red-500/30 bg-red-500/5" : "border-accent-blue/30 bg-accent-blue/5")}>
              <h4 className={cn("text-xl font-black mb-6", col.bad ? "text-red-400" : "text-accent-blue")}>{col.label}</h4>
              <ul className="space-y-3">
                {col.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-3 text-base text-foreground/80">
                    {col.bad
                      ? <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      : <Check className="w-4 h-4 text-accent-blue flex-shrink-0" />}
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Cualquier industria, el mismo rigor.",
      content: (
        <div className="mt-12">
          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-tight">
            Si dependés de Excel para manejar tu operación, ya estás perdiendo tiempo y dinero.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Estudio Contable", "Industria Metalmecánica", "Distribuidora Logística", "Agencia de Marketing", "Comercio Electrónico", "Salud", "Agro", "Inmobiliaria"].map((ind, i) => (
              <span key={i} className="px-8 py-4 bg-card rounded-full text-lg font-black border border-border/40 hover:border-accent-blue/60 transition-colors">
                {ind}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="metodo" ref={targetRef} className="relative h-[400vh] bg-background text-foreground">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-20">
          {slides.map((slide, i) => (
            <div key={i} className="w-[85vw] md:w-[70vw] shrink-0 flex flex-col justify-center">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-balance">
                {slide.title}
              </h2>
              {slide.content}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Section 6: Architecture Section
// ─────────────────────────────────────────
const ArchitectureSection = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden py-20">
      <div className="apple-container w-full">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <TextBlockAnimation blockColor="#3b82f6" duration={0.8}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] italic uppercase text-white pb-2">
              Construimos lo que <br className="hidden md:block" />
              <span className="text-accent-blue">ninguna plataforma genérica puede darte.</span>
            </h2>
          </TextBlockAnimation>

          <div className="max-w-2xl mx-auto">
            <TextBlockAnimation blockColor="#ffffff" stagger={0.05} delay={0.4}>
              <p className="text-xl md:text-3xl text-neutral-400 font-light leading-relaxed">
                Porque cada empresa tiene un proceso único.
                Y ese proceso merece una solución única, construida por ingenieros que lo entienden.
              </p>
            </TextBlockAnimation>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12"
          >
            <div className="w-1 h-20 bg-gradient-to-b from-accent-blue to-transparent mx-auto rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Section 7: Final CTA
// ─────────────────────────────────────────
const CTASection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitLead(formData);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
    }
  };

  return (
    <section id="contacto" className="py-40 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 relative overflow-hidden">
      <div className="apple-container max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-balance">
            <span className="text-black dark:text-white block mb-2">Liberá tu tiempo.</span>
            <span className="text-accent-blue font-black">Hacé crecer tu negocio.</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 text-balance mx-auto max-w-2xl">
            Empezamos con una conversación de 30 minutos donde mapeamos juntos tu principal cuello de botella operativo.
          </p>
        </motion.div>

        <div className="relative rounded-[2.1rem] p-0.5 max-w-4xl mx-auto">
          <GlowingEffect spread={60} glow proximity={100} inactiveZone={0.01} borderWidth={3} />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-neutral-900 dark:bg-white p-12 md:p-20 rounded-[2rem] border border-white/10 dark:border-black/10 text-center flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-accent-blue" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white dark:text-black mt-4">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-xl text-neutral-400 dark:text-neutral-600 max-w-md">
                  Un consultor senior de Ingentia analizará tu caso y se pondrá en contacto contigo en las próximas 24 horas.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-accent-blue font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative grid gap-6 bg-neutral-900 dark:bg-white p-8 md:p-12 rounded-[2rem] border border-white/10 dark:border-black/10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="fullName" type="text" placeholder="Nombre completo" className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black" required />
                  <input name="email" type="email" placeholder="Correo corporativo" className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black" required />
                </div>
                <input name="companyRole" type="text" placeholder="Empresa y cargo" className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black mt-4" required />
                <textarea name="bottleneck" placeholder="¿Cuál es tu principal cuello de botella operativo hoy?" rows={3} className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black resize-none mt-4" required />

                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-accent-blue text-white px-10 py-6 text-xl font-black rounded-full hover:bg-blue-400 transition-all shadow-xl mt-8 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando..." : "¡Solicitar Consultoría Estratégica!"}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Footer
// ─────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="py-20 bg-background border-t border-border/40 text-center transition-colors duration-500">
      <div className="apple-container flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 mb-8 group cursor-pointer">
          <div className="w-1.5 h-5 bg-foreground group-hover:bg-accent-blue transition-colors rounded-sm" />
          <span className="text-xl font-black tracking-tight">ingentia</span>
        </div>
        <div className="flex gap-6 mb-12 text-sm font-light text-muted uppercase tracking-widest">
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">Email</a>
        </div>
        <div className="text-sm text-muted/60">
          &copy; {new Date().getFullYear()} Ingentia Labs. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

// ─────────────────────────────────────────
// Root
// ─────────────────────────────────────────
export default function Home() {
  return (
    <main className="transition-colors duration-500">
      <Header />
      <Hero />
      <TransitionSection phrase="Automatizar sin entender el proceso es acelerar en la dirección equivocada. Primero mapeamos; después construimos." />
      <ProblemSection />
      <ValuePropSection />
      <TransitionSection phrase="Cada hora que tu equipo pierde en tareas administrativas es una hora que no se invierte en hacer crecer tu negocio." />
      <MethodologySection />
      <ArchitectureSection />
      <CTASection />
      <Footer />
    </main>
  );
}
