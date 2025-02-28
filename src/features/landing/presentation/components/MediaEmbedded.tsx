import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const MediaEmbedded = () => {
  const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  return (
    <div className="relative flex items-center justify-center">
      {/* Dialog (ShadcnUI) */}
      <Image
        src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
        alt="Video Thumbnail"
        className="w-full object-contain rounded-lg"
        width={1280}
        height={720}
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="absolute flex items-center text-sm font-medium rounded-full">
            ▶ Watch - 3:47
          </Button>
        </DialogTrigger>

        <DialogContent className="w-full h-auto p-0 bg-transparent border-none">
          <DialogTitle>
            <VisuallyHidden>Video Player</VisuallyHidden>
          </DialogTitle>

          <iframe src={videoUrl} allowFullScreen className="w-full h-full rounded-lg"></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};
