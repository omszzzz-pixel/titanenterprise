import { Container } from "@/components/ui/Container";
import { Eyebrow, Section } from "@/components/ui/Section";

type MetricsDict = {
  heading: string;
  subheading: string;
  items: { value: string; label: string; note: string }[];
};

export function Metrics({ dict }: { dict: MetricsDict }) {
  return (
    <Section className="hairline-top hairline-bottom bg-charcoal">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>The Firm</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl">
              {dict.heading}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-muted">
              {dict.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:col-span-8">
            {dict.items.map((m) => (
              <div
                key={m.label}
                className="bg-charcoal p-8 transition-colors hover:bg-elevated"
              >
                <div className="font-display text-5xl leading-none text-gold-gradient sm:text-6xl">
                  {m.value}
                </div>
                <div className="mt-6 text-[14px] font-medium text-foreground">
                  {m.label}
                </div>
                <div className="mt-2 text-[12px] text-subtle">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
