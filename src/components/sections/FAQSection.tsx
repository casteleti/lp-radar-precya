import { faqItems } from '../../data/landing'
import { Container, FAQItem, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function FAQSection() {
  return (
    <section id="faq" className="bg-lilac/28 py-14 md:py-20" aria-labelledby="faq-title">
      <Container size="md">
        <Motion>
          <SectionTitle eyebrow="FAQ" id="faq-title">
            Duvidas comuns antes de testar.
          </SectionTitle>
          <SectionSubtitle>
            Respostas diretas para entender como o Precya apoia sua decisao sem complicar a rotina.
          </SectionSubtitle>
        </Motion>

        <div className="mt-8 space-y-3">
          {faqItems.map((item, index) => (
            <Motion key={item.question} delay={index * 60}>
              <FAQItem question={item.question} answer={item.answer} defaultOpen={index === 0} />
            </Motion>
          ))}
        </div>
      </Container>
    </section>
  )
}
