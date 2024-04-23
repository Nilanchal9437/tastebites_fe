import type { Metadata } from "next";
import Contact from "@/features/contact/components";

function ContactPage() {
  return <Contact />;
}

export const metadata: Metadata = {
  title: "Tastebites | Contact",
  description: "Tastebites Contact Page description"
};  

export default ContactPage;
