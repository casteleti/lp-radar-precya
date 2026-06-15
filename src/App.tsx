import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { BeforeAfterSection } from './components/sections/BeforeAfterSection'
import { DemoSection } from './components/sections/DemoSection'
import { FAQSection } from './components/sections/FAQSection'
import { FinalCTASection } from './components/sections/FinalCTASection'
import { FounderSection } from './components/sections/FounderSection'
import { HeroSection } from './components/sections/HeroSection'
import { PricingSection } from './components/sections/PricingSection'
import { ProblemSection } from './components/sections/ProblemSection'
import { SolutionSection } from './components/sections/SolutionSection'
import { WhatsAppFloatingButton } from './components/ui'

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <BeforeAfterSection />
        <FounderSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}
