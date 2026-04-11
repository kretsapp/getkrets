import { KretsMark } from "@/components/KretsMark";

export function AppDownloadCTA() {
  return (
    <div className="px-5 py-6 mt-4 border-t border-border">
      <div className="flex items-center gap-3">
        <KretsMark size={36} />
        <div className="flex-1">
          <p className="text-[15px] font-bold text-text-primary">
            Get the full experience
          </p>
          <p className="text-[13px] text-text-secondary">
            Download Krets to share moments with your inner circle
          </p>
        </div>
      </div>
      <a
        href="https://getkrets.app"
        className="block mt-3 text-center py-3 rounded-[12px] bg-accent text-white font-bold text-sm hover:bg-accent-hover transition-colors"
      >
        Get Krets
      </a>
    </div>
  );
}
