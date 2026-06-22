import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

type CtaBandProps = {
  heading?: string;
  text?: string;
};

export function CtaBand({
  heading = "Planning a demolition or excavation project?",
  text = "Get a free, no-obligation quote from a professional team that shows up on time and gets the job done right.",
}: CtaBandProps) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-band">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Free Estimates
          </span>
          <h2>{heading}</h2>
          <p>{text}</p>
          <div className="cta-band__actions">
            <Link href="/contact" className="btn btn--primary">
              Request a Quote
            </Link>
            <a href={site.phoneHref} className="btn btn--ghost">
              <PhoneIcon size={18} /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
