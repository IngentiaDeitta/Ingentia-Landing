"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SplineSceneBasic } from "@/components/ui/hero-demo";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Header } from "@/components/ui/navbar";
import { SplineScene } from "@/components/ui/splite";
import Image from "next/image";

// ─────────────────────────────────────────
// Hero Scroll Demo (Dashboard)
// ─────────────────────────────────────────
function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-background transition-colors duration-500 -mt-[10vh]">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-foreground">
              Visualiza tu operación con <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-accent-blue">
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
      <section className="relative w-full overflow-hidden">
        <SplineSceneBasic />
      </section>
      <HeroScrollDemo />
    </>
  );
};

// ─────────────────────────────────────────
// Section 2: Problem
// ─────────────────────────────────────────
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  FileText,
  MousePointer2,
  Globe,
  Calendar,
  Bell,
  BarChart3,
  PieChart,
  Rocket
} from "lucide-react";

const ProblemSection = () => {
  const pains = [
    {
      Icon: BarChart3,
      name: "Decisiones \"a ojo\"",
      description: "La falta de datos centralizados nubla el crecimiento de tu empresa.",
      href: "#contacto",
      cta: "Ver solución",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Calendar,
      name: "Cotizaciones lentas",
      description: "Clientes que esperan días para recibir un presupuesto.",
      href: "#contacto",
      cta: "Automatizar",
      background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Rocket,
      name: "Fugas de Stock",
      description: "Inventario desactualizado = ventas perdidas y capital inmovilizado.",
      href: "#contacto",
      cta: "Optimizar",
      background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Globe,
      name: "Dependencia del \"experto\"",
      description: "Tu operación se frena cuando las personas clave no están disponibles.",
      href: "#contacto",
      cta: "Sistematizar",
      background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: PieChart,
      name: "Pérdida de Tiempo",
      description: "Horas invertidas solo en saber cómo le va a tu empresa hoy.",
      href: "#contacto",
      cta: "Panel de control",
      background: <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: FileText,
      name: "Esclavos del Excel",
      description: "Reportes manuales que nacen viejos y con errores humanos.",
      href: "#contacto",
      cta: "Eliminar Excel",
      background: <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: MousePointer2,
      name: "Caos en WhatsApp",
      description: "Seguimiento de clientes perdido en chats informales.",
      href: "#contacto",
      cta: "CRM Inteligente",
      background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Bell,
      name: "Carga Administrativa",
      description: "Tareas repetitivas que consumen el margen de tu negocio.",
      href: "#contacto",
      cta: "Liberar equipo",
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    },
  ];

  return (
    <section id="problema" className="py-40 bg-card transition-colors duration-500">
      <div className="apple-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1] text-balance">
            No necesitas más software.{" "}
            <br className="hidden md:block" />
            <span className="text-accent-blue">Necesitas resolver cuellos de botella.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted font-medium mb-16 leading-tight">
            Estos son los dolores que frenan la operación de las pymes hoy:
          </p>

          <BentoGrid className="lg:grid-rows-4">
            {pains.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>

          <div className="pt-20 mt-20 border-t border-border/40 text-center">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground/40 italic text-balance">
              "Cuando los procesos no están diseñados, las personas compensan."
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Section 3: Value Prop (Spline xOfaABcgXd)
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
            <p className="text-xl text-foreground/70 max-w-lg leading-relaxed">
              Ofrecemos automatizaciones que generan impacto directo sobre tus ganancias.
            </p>
          </motion.div>

          <div className="grid gap-6 pointer-events-auto">
            {[
              { num: "01.", title: "Micro-productos", desc: "Soluciones hiper específicas adaptadas a tu operatoria. Sin proyectos eternos ni presupuestos inflados." },
              { num: "02.", title: "Configuración flexible", desc: "Integración con tus herramientas actuales sin reemplazar todo tu sistema." },
              { num: "03.", title: "Impacto medible", desc: "Más flujo de caja. Menos horas administrativas. Más velocidad operativa." },
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
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-blue transition-colors">{item.title}</h3>
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
const ProductsSection = () => {
  const products = [
    {
      emoji: "💰",
      title: "Agente de Cobranzas Inteligente",
      pain: "Tus clientes pagan tarde y nadie hace seguimiento sistemático.",
      solution: ["Recordatorios automáticos", "Secuencia inteligente", "Escalamiento humano cuando es necesario"],
      impact: "Mejora flujo de caja desde el primer mes.",
      color: "from-blue-500/20 to-blue-600/5",
    },
    {
      emoji: "🧠",
      title: "Filtro y Calificador de CVs",
      pain: "Pierdes horas leyendo CVs irrelevantes.",
      solution: ["Análisis automático de candidatos", "Ranking por afinidad al puesto", "Shortlist en minutos"],
      impact: "Reduce hasta 60% el tiempo administrativo.",
      color: "from-purple-500/20 to-purple-600/5",
    },
    {
      emoji: "📄",
      title: "Procesamiento Automático de Facturas",
      pain: "Cargar datos manualmente genera errores y retrasos.",
      solution: ["Lectura automática de documentos", "Borradores generados por IA", "Validación humana al final"],
      impact: "Elimina el error humano en la carga de datos.",
      color: "from-emerald-500/20 to-emerald-600/5",
    },
  ];

  return (
    <section id="productos" className="py-32 bg-background transition-colors duration-500">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent-blue font-bold tracking-widest text-sm uppercase mb-4">Soluciones Especializadas</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground text-balance">
            Micro-productos listos <br className="hidden md:block" />
            para tu operación.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative rounded-3xl p-0.5"
            >
              <GlowingEffect spread={50} glow proximity={80} inactiveZone={0.01} borderWidth={2} />
              <div className={cn("relative rounded-[22px] p-8 h-full border border-border/40 bg-card flex flex-col gap-6 bg-gradient-to-b", p.color)}>
                <div className="text-5xl">{p.emoji}</div>
                <div>
                  <h3 className="text-xl font-black mb-3 text-foreground">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{p.pain}</p>
                  <ul className="space-y-2">
                    {p.solution.map((s, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-accent-blue flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-border/30">
                  <p className="text-accent-blue font-bold text-sm">⚡ {p.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Section 5: How We Work (Horizontal Scroll)
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
              <div className="text-5xl md:text-7xl font-bold text-accent-blue mb-2">{s.stat}</div>
              <div className="text-xl text-muted font-medium">{s.label}</div>
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
              "Relevamiento funcional",
              "Análisis de oportunidades",
              "Configuración de la solución",
              "Implementación y medición",
            ].map((step, i) => (
              <div key={i} className="relative rounded-2xl p-0.5">
                <GlowingEffect spread={30} glow proximity={60} inactiveZone={0.01} borderWidth={2} />
                <div className="relative flex flex-col items-center text-center bg-card p-6 rounded-[14px] border border-border/40 h-full">
                  <div className="w-12 h-12 rounded-full bg-accent-blue text-white flex items-center justify-center text-xl font-black mb-4 shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="text-sm font-bold leading-tight text-foreground">{step}</h4>
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
            {["Estudio Contable", "Agencia de Marketing", "Pyme Comercial", "E-commerce", "Logística", "Salud", "Agro", "Real Estate"].map((ind, i) => (
              <span key={i} className="px-8 py-4 bg-card rounded-full text-lg font-bold border border-border/40 hover:border-accent-blue/60 transition-colors">
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
// Section 6: Trust / Social Proof
// ─────────────────────────────────────────
const TrustSection = () => {
  return (
    <section id="clientes" className="py-24 bg-card transition-colors duration-500 border-t border-b border-border/40">
      <div className="apple-container text-center">
        <h3 className="text-xl font-bold tracking-widest uppercase text-muted mb-12">
          Empresas que ya automatizaron su operación
        </h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {["SAMSUNG", "MERCADO LIBRE", "GLOBANT", "Ualá"].map((logo, i) => (
            <div key={i} className="text-2xl md:text-3xl font-black text-foreground/80 tracking-tighter">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// Section 7: Final CTA
// ─────────────────────────────────────────
const CTASection = () => {
  return (
    <section id="contacto" className="py-40 bg-foreground text-background transition-colors duration-500 relative overflow-hidden">
      {/* Background gradient */}
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
            Si tu empresa depende de tareas manuales,{" "}
            <br className="hidden md:block" />
            <span className="text-accent-blue">ya estás perdiendo margen.</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 dark:text-neutral-600 text-balance mx-auto max-w-2xl">
            Dejanos tus datos y un ingeniero de procesos va a evaluar el potencial de automatización de tu empresa.
          </p>
        </motion.div>

        <div className="relative rounded-[2.1rem] p-0.5 max-w-4xl mx-auto">
          <GlowingEffect spread={60} glow proximity={100} inactiveZone={0.01} borderWidth={3} />
          <motion.form
            className="relative grid gap-6 bg-neutral-900 dark:bg-white p-8 md:p-12 rounded-[2rem] border border-white/10 dark:border-black/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nombre completo" className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black" required />
              <input type="email" placeholder="Correo corporativo" className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black" required />
            </div>
            <input type="text" placeholder="Empresa y cargo" className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black mt-4" required />
            <textarea placeholder="¿Cuál es tu principal cuello de botella operativo hoy?" rows={3} className="bg-transparent border-b border-white/20 dark:border-black/20 pb-4 focus:outline-none focus:border-accent-blue transition-colors text-lg placeholder:text-neutral-500 text-white dark:text-black resize-none mt-4" required />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent-blue text-white px-10 py-6 text-xl font-bold rounded-full hover:bg-blue-400 transition-all shadow-xl mt-8 flex items-center justify-center gap-3"
            >
              Agenda tu Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.form>
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
          <span className="text-xl font-bold tracking-tight">ingentia</span>
        </div>
        <div className="flex gap-6 mb-12 text-sm font-medium text-muted">
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
  const navItems = [
    { name: "Problema", link: "#problema" },
    { name: "Soluciones", link: "#valor" },
    { name: "Productos", link: "#productos" },
    { name: "Método", link: "#metodo" },
    { name: "Contacto", link: "#contacto" },
  ];

  return (
    <main className="transition-colors duration-500">
      <Header />
      <Hero />
      <ProblemSection />
      <ValuePropSection />
      <ProductsSection />
      <MethodologySection />
      <CTASection />
      <Footer />
    </main>
  );
}
