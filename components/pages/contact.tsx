import H2 from "../Texts/H2";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
      objet: string;
      message: string;
    };
    console.log(data);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Email sent successfully");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="bg-background w-full h-dvh md:h-screen flex flex-col lg:justify-center  lg:p-6 lg:pt-15 md:py-15 ">
      <section className="flex flex-col w-full h-full bg-(--main-color) items-center gap-5">
        <H2
          content="Contact"
          classContent="text-(--sec-color) text-center  lg:text-left capitalise md:mb-25 w-full text-wrap pt-6"
        />

        <form
          action={handleSubmit}
          className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full h-fit p-10 md:px-20 lg:px-40 items-center"
        >
          <Field>
            <FieldLabel
              htmlFor="name"
              className="text-(--sec-color) text-base md:text-lg"
            >
              Nom & Prénom
            </FieldLabel>
            <Input
              id="name"
              type="text"
              name="name"
              className=" border border-(--sec-color)  focus-visible:border-(--sec-color)  focus-visible:ring-(--sec-color)  text-(--sec-color) placeholder:text-(--sec-color) "
              required
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="email"
              className="text-(--sec-color) text-base md:text-lg"
            >
              Email
            </FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              className=" border border-(--sec-color)  focus-visible:border-(--sec-color)  focus-visible:ring-(--sec-color)  text-(--sec-color) placeholder:text-(--sec-color) "
              required
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="objet"
              className="text-(--sec-color) text-base md:text-lg"
            >
              Objet
            </FieldLabel>
            <Input
              id="objet"
              type="text"
              name="objet"
              className=" border border-(--sec-color)  focus-visible:border-(--sec-color)  focus-visible:ring-(--sec-color)  text-(--sec-color) placeholder:text-(--sec-color) "
              required
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="message"
              className="text-(--sec-color) text-base md:text-lg"
            >
              Message
            </FieldLabel>
            <Textarea
              id="message"
              placeholder="Votre message..."
              className=" h-50 border border-(--sec-color)  focus-visible:border-(--sec-color)  focus-visible:ring-(--sec-color)  text-(--sec-color) placeholder:text-(--sec-color) "
              name="message"
              required
            />
          </Field>
          <Input
            type="submit"
            value="Envoyer"
            className="bg-(--sec-color) text-(--main-color) hover:bg-(--main-color) hover:text-(--sec-color) border border-(--sec-color)  focus-visible:border-(--sec-color)  focus-visible:ring-(--sec-color)  text-base md:text-lg cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </form>

        <section>
          <p className="text-(--sec-color) text-base md:text-lg">
            Vous pouvez me retrouver sur
          </p>
        </section>
      </section>
    </section>
  );
};

export default Contact;
