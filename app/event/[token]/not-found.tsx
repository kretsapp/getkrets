import { KretsMark } from "@/components/KretsMark";

export default function EventNotFound() {
  return (
    <div className="light bg-bg min-h-dvh flex flex-col items-center justify-center px-6 text-center">
      <KretsMark size={48} className="mb-4" />
      <h1 className="text-xl font-bold text-text-primary mb-2">
        Event not available
      </h1>
      <p className="text-text-secondary text-[15px] mb-6 max-w-xs">
        This event link is no longer available. It may have expired or been
        removed.
      </p>
      <a
        href="https://getkrets.app"
        className="inline-block px-6 py-3 rounded-[12px] bg-accent text-white font-bold text-sm hover:bg-accent-hover transition-colors"
      >
        Visit getkrets.app
      </a>
    </div>
  );
}
