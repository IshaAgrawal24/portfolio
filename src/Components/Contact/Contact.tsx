import React, { ChangeEvent, useState } from "react";
import "./Contact.css";
interface contactI {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  const [contact, setContact] = useState<contactI>({
    name: "",
    email: "",
    message: "",
  });
  const [showError, setShowError] = useState<boolean>(false);
  const { name, email, message } = contact;

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    property: string
  ) => {
    setContact({ ...contact, [property]: event.target.value });
  };

  const sendForm = () => {
    console.log("click");
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name === "" || email === "" || message === "") setShowError(true);
    else if (emailValidation.test(email)) setShowError(true);
    else setShowError(false);
  };
  return (
    <>
      <div className="py-4" id="contact">
        <h1 className="text-center text-bold text-4xl text-white">
          Contact Me
        </h1>
        <p className="text-white text-center tracking-wider pt-3">
          Let's keep in touch
        </p>
        <p className="heading-underline"></p>
        <div className="">
          <form action="#" className="flex-col justify-center">
            <div className="rounded-md border border-red my-3 w-[400px] mx-auto">
              <input
                className=" py-2 px-4 rounded-md text-[#cbc8c8] w-[100%]"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={(event) => onChangeHandler(event, "name")}
                value={name}
              />
            </div>
            <div className="rounded-md border border-red my-3 w-[400px] mx-auto">
              <input
                className="rounded-md py-2 px-4 text-[#cbc8c8] w-[100%]"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={(event) => onChangeHandler(event, "email")}
                value={email}
              />
            </div>
            <div className="rounded-md border border-red my-3 w-[400px] mx-auto">
              <textarea
                className="rounded-md py-2 px-4 text-[#cbc8c8] w-[100%]"
                placeholder="Enter your message"
                rows={4}
                cols={45}
                onChange={(event) => onChangeHandler(event, "message")}
                value={message}
              ></textarea>
            </div>
            
          </form>
          <div className="my-3 w-[400px] mx-auto">
              <button
                className="w-[100%] bg-[#661214] text-[#cbc8c8] rounded-md py-2 px-4"
                onClick={sendForm}
              >
                Send
              </button>
            </div>
        </div>
      </div>
      {showError && (
        <div className={`showError`}>
          <p className="bg-[#661214]">Fields are missing!</p>
          <button onClick={() => setShowError(false)}>X</button>
        </div>
      )}
    </>
  );
};

export default Contact;
