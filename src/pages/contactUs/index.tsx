import { yupResolver } from '@hookform/resolvers/yup';
import Input from 'components/comman/input';
import JotFormIframe from 'components/shared/form';
import useScrollTriggeredCountUp from 'hooks/useScrollTriggeredCountUp';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactSchema } from './validations/contactSchema';
import { usePostContactInfo } from './services/contactUs.service';

const ContactUs = () => {
  const [formMessage, setFormMessage] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const projectCount = useScrollTriggeredCountUp(ref, 100); // 0 to 100 count-up

  const staffCount = useScrollTriggeredCountUp(ref, 30);
  const machineryCount = useScrollTriggeredCountUp(ref, 80);

  const {
    postContactInfoAPI,
    isLoading: submitApiLoader,
    isError,
  } = usePostContactInfo();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isLoading },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const submitContactForm = async (value: any) => {
    try {
      const formData = new FormData();

      formData.append('email', value.email);
      formData.append('name', value.name);
      formData.append('message', value.message);

      const data: any = await postContactInfoAPI(formData);

      if (data.status == 200) {
        setFormMessage(true);
      }
    } catch (error) {
      console.error(`Error in the contact form submission ::: ${error} `);
    }
  };
  return (
    <>
      <div className="bg-primary pb-20">
        <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
          <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10 top-4 sm:top-8 md:top-12 lg:top-16 text-white">
            <p>CONTACT US</p>
            <div
              id="contactUs"
              className="absolute font-800 text-shadow-xl  text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10"
              style={{ WebkitTextStroke: '.3px white' }}
            >
              LET'S CHAT
            </div>
          </div>

          <div className="mt-10 md:mt-20 lg:mt-24 grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-x-4 text-center items-center">
            <div className=" p-4 md:col-span-7 lg:col-span-7 text-gray-300">
              <p className="text-left sm:text-sm md:text-xl">
                <span className="text-secondary text-xl md:text-2xl lg:text-3xl underline">
                  Let's Discuss Your Project!
                </span>
                We understand that every construction project is unique. Whether
                you're building your dream home, renovating a commercial space,
                or embarking on a large-scale development, our team of
                experienced professionals is here to guide you every step of the
                way.
              </p>
              <br />
              <p className="text-left sm:text-sm md:text-xl">
                Contact us today to schedule a free consultation, discuss your
                project vision, and receive a customized quote. We look forward
                to working with you to bring your project to life!
              </p>
            </div>

            <div className=" p-4 md:col-span-5 lg:col-span-5">
              <div className="bg-white py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded-lg">
                {formMessage == false ? (
                  <>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                      Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                      Get your free quote/Any feedback
                    </p>

                    <form
                      className=""
                      onSubmit={handleSubmit(submitContactForm)}
                    >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your email
                        </label>
                        <Input
                          error={errors.email}
                          register={register}
                          type="text"
                          name="email"
                          id="email"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          placeholder="name@jpporjects.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 mt-4"
                        >
                          Name
                        </label>
                        <Input
                          error={errors.name}
                          name="name"
                          register={register}
                          type="text"
                          id="name"
                          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 mt-4"
                        >
                          Your message
                        </label>
                        <Input
                          register={register}
                          type="textarea"
                          error={errors.message}
                          name="message"
                          id="message"
                          rows={6}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Leave a comment..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="py-3 px-5 mt-4 text-sm font-medium text-center bg-primary text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                      >
                        Send message
                      </button>
                    </form>
                  </>
                ) : (
                  <h2 className="text-bold text-lg">
                    Thanks for submission, we'll contact you soon
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className=" h-full mb-28 bg-white shadow-2xl -mt-14">
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 ">
            <div className="text-center p-4 text-primary">
              <p className=" font-bold text-lg md:text-xl lg:text-3xl">
                Projects
              </p>
              <p className="text-secondary font-bold text-3xl md:text-4xl lg:text-4xl">
                <span ref={ref}>{projectCount}+</span>
              </p>
            </div>

            <div className="text-center p-4 text-primary">
              <p className=" font-bold text-lg md:text-xl lg:text-3xl">Staff</p>
              <p className="text-secondary font-bold text-3xl md:text-4xl lg:text-4xl">
                <span ref={ref}>{staffCount}+</span>
              </p>
            </div>

            <div className="text-center p-4 text-primary">
              <p className=" font-bold text-lg md:text-xl lg:text-3xl">
                Machinery
              </p>
              <p className="text-secondary font-bold text-3xl md:text-4xl lg:text-4xl">
                <span ref={ref}>{machineryCount}+</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
