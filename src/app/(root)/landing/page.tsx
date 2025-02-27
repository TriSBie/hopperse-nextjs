'use client';
import { FioraSystem } from '@/features/landing/presentation/components/FioraSystem';
import { KPSection } from '@/features/landing/presentation/components/KPISection';
import { ReviewSection } from '@/features/landing/presentation/components/ReviewSection';
import { Banner } from '../../../features/landing/presentation/components/Banner';
import { MediaEmbedded } from '../../../features/landing/presentation/components/MediaEmbedded';

function LandingPage() {
  return (
    <main>
      <Banner />
      <MediaEmbedded />
      <KPSection />
      <FioraSystem />
      <ReviewSection />
    </main>
  );
}

export default LandingPage;
