import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

function ContactsPage() {
  return (
    <Fragment>
      <Head>
        <title>C&C Solutions | Contact Me</title>
        <meta
          name="description"
          content="Say hello! This could be the beginning of wonderful web development experience!"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactsPage;
