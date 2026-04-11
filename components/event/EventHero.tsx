import Image from "next/image";

function formatDateRange(targetDate: string, endDate: string | null): string {
  const start = new Date(targetDate + "T00:00:00");
  const opts: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  if (!endDate || endDate === targetDate) {
    return start.toLocaleDateString("en-US", opts);
  }
  const end = new Date(endDate + "T00:00:00");
  const startStr = start.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return `${startStr} – ${end.toLocaleDateString("en-US", opts)}`;
}

type Props = {
  emoji: string;
  title: string;
  targetDate: string;
  endDate: string | null;
  coverImageUrl: string | null;
  groupName: string;
};

export function EventHero({
  emoji,
  title,
  targetDate,
  endDate,
  coverImageUrl,
  groupName,
}: Props) {
  return (
    <div className="relative w-full aspect-[2/1] overflow-hidden rounded-b-2xl">
      {coverImageUrl ? (
        <>
          <Image
            src={coverImageUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-accent/15" />
      )}
      <div
        className={`relative flex flex-col justify-end h-full p-5 gap-1 ${
          coverImageUrl ? "text-white" : "text-text-primary"
        }`}
      >
        <span className="text-[40px] leading-[46px]">{emoji}</span>
        <span className="text-[11px] uppercase tracking-wider font-medium opacity-80">
          {groupName}
        </span>
        <h1 className="text-[26px] leading-[30px] font-bold">{title}</h1>
        <p className="text-sm opacity-90">
          {formatDateRange(targetDate, endDate)}
        </p>
      </div>
    </div>
  );
}
