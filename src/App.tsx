import { lazy, Suspense } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { MobileStickyCTA, WhatsAppFloatingButton } from './components/ui'

const ProblemSection = lazy(() =>
  import('./components/sections/ProblemSection').then((module) => ({
    default: module.ProblemSection,
  })),
)
const SolutionSection = lazy(() =>
  import('./components/sections/SolutionSection').then((module) => ({
    default: module.SolutionSection,
  })),
)
const DemoSection = lazy(() =>
  import('./components/sections/DemoSection').then((module) => ({ default: module.DemoSection })),
)
const BeforeAfterSection = lazy(() =>
  import('./components/sections/BeforeAfterSection').then((module) => ({
    default: module.BeforeAfterSection,
  })),
)
const FounderSection = lazy(() =>
  import('./components/sections/FounderSection').then((module) => ({
    default: module.FounderSection,
  })),
)
const PricingSection = lazy(() =>
  import('./components/sections/PricingSection').then((module) => ({
    default: module.PricingSection,
  })),
)
const FAQSection = lazy(() =>
  import('./components/sections/FAQSection').then((module) => ({ default: module.FAQSection })),
)
const FinalCTASection = lazy(() =>
  import('./components/sections/FinalCTASection').then((module) => ({
    default: module.FinalCTASection,
  })),
)

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <ProblemSection />
          <SolutionSection />
          <DemoSection />
          <BeforeAfterSection />
          <FounderSection />
          <PricingSection />
          <FAQSection />
          <FinalCTASection />
        </Suspense>
      </main>
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFloatingButton />
    </>
  )
}
