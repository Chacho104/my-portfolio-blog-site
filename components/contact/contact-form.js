import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import { MdWavingHand } from "react-icons/md";

import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // pending, error, success
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message was sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <div className="topsvg">
        <MdWavingHand />
      </div>
      <div className={classes["form-section"]}>
        <div className={classes.hello}>
          <h1>Say hello!</h1>
        </div>
        <p>
          Great conversations that turn ideas into solutions often start with a
          simple hello...go right ahead!
        </p>
        <form className={classes.form} onSubmit={sendMessageHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                value={enteredName}
                onChange={(event) => setEnteredName(event.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              id="message"
              rows="2"
              required
              placeholder="Hello, great to meet you! Can you help me build a website for my online shoe store? Let me know, thanks"
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send message</button>
          </div>
        </form>
      </div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <div className="botsvg">
        <MdWavingHand />
      </div>
    </section>
  );
}

export default ContactForm;
