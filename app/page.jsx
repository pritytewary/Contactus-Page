import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl p-4 mx-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form below</p>
      <ContactForm />
    </div>
  );
}
