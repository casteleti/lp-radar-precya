export function HeroSection() {
  return (
    <section className="section-block" aria-labelledby="hero-title">
      <div className="section-shell">
        <div className="placeholder-card px-5 py-10 md:px-10 md:py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-precya-primary">
            Hero
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl text-4xl font-semibold leading-tight text-precya-ink md:text-6xl"
          >
            Area preparada para a promessa principal da Precya.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-precya-muted md:text-lg">
            Placeholder tecnico para copy, prova visual, CTA principal e midia otimizada.
          </p>
        </div>
      </div>
    </section>
  )
}
