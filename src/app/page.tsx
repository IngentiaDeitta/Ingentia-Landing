"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X, FileText, BarChart3, Bell } from "lucide-react";
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
    <div className="flex flex-col overflow-hidden bg-background transition-colors duration-500 -mt-[10vh]">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-black text-foreground text-balance uppercase tracking-widest">
              Visualiza tu operación con <br />
              <span className="text-4xl md:text-[6rem] font-black mt-1 leading-none text-accent-blue">
                Control Total
              </span>
            </h2>
          </>
        }
      >
        <Image
          src={`/dashboard.png`}
          alt="Dashboard de control operativo"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top border border-border/20 shadow-2xl"
          draggable={false}
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
      Icon: BarChart3,
      name: "Fuga de datos",
      description: "15 planillas de Excel que no se hablan entre sí y generan caos informativo.",
      color: "text-blue-500",
      bg: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/10",
      className: "md:col-span-1 md:row-span-2 min-h-[300px]"
    },
    {
      Icon: BarChart3,
      name: "Ceguera de gestión",
      description: "Tomas decisiones \"a ojo\" por falta de datos reales y actualizados.",
      color: "text-amber-500",
      bg: "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/10",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      Icon: Bell,
      name: "Desperdicio de talento",
      description: "Tu equipo pierde el 40% del día en carga administrativa.",
      color: "text-cyan-500",
      bg: "bg-cyan-500/5 hover:bg-cyan-500/10 border-cyan-500/10",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      Icon: FileText,
      name: "Deuda Operativa",
      description: "No es falta de personal. Es falta de arquitectura sistémica para escalar.",
      color: "text-rose-500",
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
              La ingeniería resuelve lo que el software no pudo.
            </h2>
            <p className="text-xl md:text-2xl text-muted font-light">
              El 70% de las PyMEs industriales operan con procesos rotos, ocultos en planillas y trabajo manual repetitivo.
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
                <div className="p-8 h-full flex flex-col justify-between relative z-10 pointer-events-none">
                  <div>
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border bg-white/50 dark:bg-black/50 shadow-sm", pain.bg)}>
                      <pain.Icon className={cn("w-6 h-6", pain.color)} />
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-foreground tracking-tight italic">
                      {pain.name}
                    </h3>
                    <p className="text-muted text-lg font-light leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-black text-foreground/50 border-t border-foreground/5 pt-4 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                    DIAGNÓSTICO TÉCNICO <ArrowRight className="w-4 h-4" />
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
              No desarrollamos software.
              <br />
              <span className="text-accent-blue drop-shadow-lg">Hacemos ingeniería de operaciones.</span>
            </h2>
            <p className="text-xl text-foreground font-light max-w-lg leading-relaxed mb-4">
              Ofrecemos automatizaciones que generan impacto directo sobre tus ganancias.
            </p>
          </motion.div>

          <div className="grid gap-6 pointer-events-auto">
            {[
              { num: "01.", title: "Ingenieros, no solo coders", desc: "Entendemos costos, márgenes y logística. Hablamos tu idioma." },
              { num: "02.", title: "Tecnología de Frontera", desc: "Implementamos agentes de IA que \"entienden\" tu documentación, no formularios rígidos." },
              { num: "03.", title: "Sistemas a Medida", desc: "Creamos el guante que calza exacto en la mano de tu negocio." },
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

  const slides = [
    {
      title: "Crecé sin aumentar tu estructura.",
      content: (
        <div className="grid grid-cols-2 gap-12 mt-12">
          {[
            { stat: "+15hs", label: "Semanales ahorradas" },
            { stat: "99%", label: "Menos errores humanos" },
            { stat: "Real", label: "Decisiones en tiempo real" },
            { stat: "10x", label: "Escalar sin contratar" },
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
      title: "Cómo trabajamos.",
      content: (
        <div className="mt-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/30 -translate-y-1/2" />
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {[
              "Auditoría de Procesos",
              "Arquitectura de IA",
              "Despliegue de Flujos",
              "Evolución Continua",
            ].map((step, i) => (
              <div key={i} className="relative rounded-2xl p-0.5">
                <GlowingEffect spread={30} glow proximity={60} inactiveZone={0.01} borderWidth={2} />
                <div className="relative flex flex-col items-center text-center bg-card p-6 rounded-[14px] border border-border/40 h-full">
                  <div className="w-12 h-12 rounded-full bg-accent-blue text-white flex items-center justify-center text-xl font-black mb-4 shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="text-sm font-black leading-tight text-foreground">{step}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "¿Por qué no somos una consultora tradicional?",
      content: (
        <div className="mt-12 grid grid-cols-2 gap-8">
          {[
            {
              label: "Consultoría Tradicional",
              bad: true,
              points: ["Proyectos de 6+ meses", "Alto costo inicial", "Personalización compleja", "ROI incierto y tardío"],
            },
            {
              label: "IngentIA",
              bad: false,
              points: ["Resultados en semanas", "Precio accesible", "Micro-productos preconfigurados", "ROI visible desde el mes 1"],
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
      title: "Industrias complejas. Soluciones simples.",
      content: (
        <div className="mt-12">
          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-tight">
            Si dependés de Excel para manejar tu operación, ya estás perdiendo tiempo y dinero.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Estudio Contable", "Industria Metalmecánica", "Distribuidora Logística", "Agencia de Marketing", "E-commerce", "Salud", "Agro", "Real Estate"].map((ind, i) => (
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
    <section className="min-h-screen bg-background transition-colors duration-500 flex items-center justify-center overflow-hidden border-t border-border/40 py-20">
      <div className="apple-container w-full">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <TextBlockAnimation blockColor="#3b82f6" duration={0.8}>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight italic uppercase">
              Arquitectura <br />
              <span className="text-accent-blue">Tecnológica Invisible</span>
            </h2>
          </TextBlockAnimation>

          <div className="max-w-2xl mx-auto">
            <TextBlockAnimation blockColor="#ffffff" stagger={0.05} delay={0.4}>
              <p className="text-xl md:text-3xl text-muted font-light leading-relaxed">
                Construimos sobre herramientas personalizadas, no sobre plataformas rígidas.
                Tu infraestructura técnica será tan sólida como tu empresa.
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
    <section id="contacto" className="py-40 bg-foreground text-background transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-800 dark:from-white dark:via-neutral-100 dark:to-neutral-200" />

      <div className="apple-container max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-balance text-white dark:text-black">
            Deja de gestionar crisis. <br className="hidden md:block" />
            <span className="text-accent-blue font-black">Empieza a liderar tu industria.</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 dark:text-neutral-600 text-balance mx-auto max-w-2xl">
            Si tu empresa depende de tareas manuales, ya estás perdiendo margen.
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
      <TransitionSection phrase="Automatizar el caos solo genera caos más rápido. Primero rediseñamos el proceso; luego lo hacemos invencible con IA." />
      <ProblemSection />
      <ValuePropSection />
      <TransitionSection phrase="Eliminar el desperdicio operativo es la mayor fuente de rentabilidad oculta de tu empresa." />
      <MethodologySection />
      <ArchitectureSection />
      <CTASection />
      <Footer />
    </main>
  );
}
