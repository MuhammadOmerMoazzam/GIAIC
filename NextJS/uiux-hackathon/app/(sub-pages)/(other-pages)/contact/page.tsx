import { SiteHeader } from "@/components/SiteHeader";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";
import Map from "@/components/ui/Map";

export default function Contact() {
  return(
    <div>
      <SiteHeader title="Contact Us"  subTitle="Contact"/>

      <div className="bg-white text-[#333333] min-h-screen lg:px-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}