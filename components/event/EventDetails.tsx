import Image from "next/image";
import { MapPin } from "lucide-react";

type Props = {
  description: string | null;
  locationName: string | null;
  locationUrl: string | null;
  gallery: string[] | null;
};

export function EventDetails({
  description,
  locationName,
  locationUrl,
  gallery,
}: Props) {
  return (
    <>
      {description && (
        <div className="px-5 py-4">
          <h2 className="font-bold text-base text-text-primary mb-2">About</h2>
          <p className="text-[15px] leading-relaxed text-text-primary whitespace-pre-wrap">
            {description}
          </p>
        </div>
      )}

      {locationName && (
        <div className="px-5 py-4">
          <h2 className="font-bold text-base text-text-primary mb-2">
            Location
          </h2>
          {locationUrl ? (
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:underline"
            >
              <MapPin size={18} />
              <span className="text-[15px] font-medium">{locationName}</span>
            </a>
          ) : (
            <div className="flex items-center gap-2 text-text-primary">
              <MapPin size={18} className="text-accent" />
              <span className="text-[15px] font-medium">{locationName}</span>
            </div>
          )}
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <div className="px-5 py-4">
          <h2 className="font-bold text-base text-text-primary mb-2">
            Gallery
          </h2>
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {gallery.map((url, i) => (
              <div
                key={url}
                className="relative w-[120px] h-[120px] flex-shrink-0 rounded-[10px] overflow-hidden"
              >
                <Image
                  src={url}
                  alt={`Gallery photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
