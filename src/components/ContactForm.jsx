import React, { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqyjpzz");
  const navigate = useNavigate();
  if (state.succeeded) {
    navigate("/thanks");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] py-10 flex flex-col gap-6 z-30 text-teal-500"
        action="https://formspree.io/f/mnqyjpzz"
      >
        <div className="w-full flex flex-col gap-4">
          <label className="font-semibold text-teal-500" htmlFor="name">
            Name :
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="py-3 px-6 outline-teal-600 rounded-md shadow-md shadow-teal-600 "
            autoComplete="off"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="w-full flex flex-col gap-4">
          <label className="font-semibold text-teal-500" htmlFor="email ">
            Email Address :
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="py-3 px-6 outline-teal-600 rounded-md shadow-md shadow-teal-600 "
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="w-full flex flex-col gap-4">
          <label className="font-semibold text-teal-500" htmlFor="institusi">
            Institusi :
          </label>
          <input
            id="institusi"
            type="text"
            name="institusi"
            className="py-3 px-6 outline-teal-600 rounded-md shadow-md shadow-teal-600 "
          />
          <ValidationError
            prefix="Institusi"
            field="institusi"
            errors={state.errors}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <label className="font-semibold text-teal-500" htmlFor="message">
            Message :
          </label>
          <textarea
            id="message"
            name="message"
            className="py-3 px-6 h-36 outline-teal-600 rounded-md shadow-md shadow-teal-600 "
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="py-3 px-8 bg-teal-600 shadow-teal-600  shadow-md text-slate-200 w-max font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
