import { collection, addDoc } from "firebase/firestore";
import { db } from "../collect/firebase";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [submited, setSubmited] = useState(false);

  const addEmail = async (e: any) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        name: name,
        university: university,
      });
      console.log("Document written with ID: ", docRef.id);
      setSubmited(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section
      id="contactus"
      className={`bg-white flex flex-row justify-around items-center px-5 ss:px-4 py-[10px]`}
    >
      <div className="flex flex-row justify-center ss:gap-36 gap-8 flex-wrap md:flex-nowrap w-full p-5 lg:p-10">
        <div className="flex flex-col items-center py-12 gap-[40px] w-full">
          <div className="flex grow items-center leading-[1em] font-medium text-typo-dark-blue text-4xl md:text-[56px]">
            Join our Waitlist
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="leading-4 font-semibold text-sm text-typo-grey text-center">
              If you are interested in publishing your research object in
              Publed, please join us by submiting your personal data
            </div>
          </div>
          {/* <div className="flex flex-col gap-3">
            <div className="uppercase text-typo-grey leading-[18px] font-semibold text-[16px]">
              Send an e-mail
            </div>
            <div className="text-typo-dark-blue text-[28px] font-normal">
              info@publed.io
            </div>
          </div> */}
        </div>
        <div className="flex flex-col bg-blue-20 px-12 py-12 gap-[48px] w-full shadow-md items-center">
          <div className="flex flex-col justify-between md:flex-row self-stretch w-full gap-10">
            <form className="flex flex-col w-full">
              <div className="flex flex-col items-start">
                <label>Name</label>
                <input
                  className="bg-blue-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-gray-50 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder=""
                  aria-label="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </form>

            <form className="flex flex-col w-full">
              <div className="flex flex-col items-start ">
                <label>Email</label>
                <input
                  className="bg-blue-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-gray-50 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder=""
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>

            <form className="flex flex-col w-full">
              <div className="flex flex-col items-start w-full ">
                <label>University</label>
                <input
                  className="bg-blue-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-gray-50 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder=""
                  aria-label="University"
                  value={email}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="flex justify-end">
            <button
              className="px-9 py-3 bg-dark-blue-60 rounded-[100px] font-notosans text-typo-white text-[16px] font-medium leading-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-regular-blue-60 duration-300"
              onClick={(e) => addEmail(e)}
            >
              Submit
            </button>
          </div>
        </div>
        {submited ? (
          <p className="text-typo-dark-blue text-sm md:text-md bg-white rounded-xl p-2 shadow-md">
            ☑ Thanks for joining us!
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default ContactUs;
