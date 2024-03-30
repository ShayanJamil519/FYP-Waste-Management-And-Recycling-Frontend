import Action from "@/components/Complain/Action";
import ContactForm from "@/components/Contact/ContactForm";
import Hero from "@/components/Shared/Hero";

const page = () => {
  return (
    <div>
      <Hero title="Contact Us" bgImage="/about/about__hero.jpg" />
      <div className="my-32 mx-10 bg-[#fff]  flex justify-center items-stretch gap-10">
        <Action />
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
