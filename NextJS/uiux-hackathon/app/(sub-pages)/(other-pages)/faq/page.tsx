import { SiteHeader } from "@/components/SiteHeader";
import { FAQSection } from "@/components/FAQSection";

export default function Faq() {
  return(
    <div >
      <SiteHeader title="FAQ Page"  subTitle="FAQ"/>
      <FAQSection />
    </div>
  );
}