import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import Map from '@/components/Map';
import 'react-toastify/dist/ReactToastify.css';
import { env } from '@/next.config';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        env.emailjsServiceId,
        env.emailjsTemplateId,
        form.current as string | HTMLFormElement,
        env.emailjsPublicKey
      )
      .then(
        (result) => {
          toast.success('Message Sent Successfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          const myForm = document.getElementById(
            'myForm'
          ) as HTMLFormElement & { reset: () => void };
          if (!myForm) return null;
          myForm.reset();
        },
        (error) => {
          toast.error('Ops Message Not Sent!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="jun_lair_contact">
          <div className="jun_lair_title">
            <div className="title_flex">
              <div className="left">
                <span>Contact</span>
                <h3>Get in Touch</h3>
              </div>
            </div>
          </div>

          <Map />

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="first">
                <ul>
                  <li>
                    <input
                      type="email"
                      name="from_name"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </li>
                </ul>
              </div>
              <div className="jun_lair_button">
                <button type="submit" className="ib-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
