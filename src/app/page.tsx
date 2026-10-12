import { Hero } from "@/components/home/hero";
import { ProcessStrip } from "@/components/home/process-strip";
import { ServicesPreview } from "@/components/home/services-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessStrip />
      <ServicesPreview />
      <CtaBanner
        title="Mulai dari satu percakapan."
        copy="Ceritakan kebutuhan usaha Anda. Kami balas dengan saran yang jelas dan praktis."
        showEmail
      />
    </>
  );
}
