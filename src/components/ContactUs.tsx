import { collection, addDoc } from "firebase/firestore";
import { db } from "../collect/firebase";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addTodo = async (e: any) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        name: name,
        university: "University of Minho",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section
      id="contactus"
      className={`bg-white flex flex-row justify-around items-center px-5 ss:px-4 py-[120px]`}
    >
      <div className="flex flex-row justify-center ss:gap-36 gap-12 flex-wrap md:flex-nowrap w-full p-5 lg:p-10">
        <div className="flex flex-col items-start py-12 gap-[48px] w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-3">
              <rect className="h-3 w-3 bg-regular-blue-60"></rect>
              <div className="uppercase leading-[1em] font-semibold text-[20px] text-typo-grey">
                Contact Us
              </div>
            </div>
            <div className="flex grow items-start leading-[1em] font-normal text-typo-dark-blue text-[28px] md:text-[56px]">
              How Can We Help?
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="uppercase text-typo-grey leading-[18px] font-semibold text-[16px]">
              Send an e-mail
            </div>
            <div className="text-typo-dark-blue text-[28px] font-normal">
              info@publed.io
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-secondary-typo-white px-16 py-12 gap-[48px] w-full">
          <div className="flex flex-col justify-between md:flex-row self-stretch w-full gap-10">
            <form className="flex flex-col w-full">
              <div className="flex flex-col items-start border-b border-black">
                <label>Name</label>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder=""
                  aria-label="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </form>

            <form className="flex flex-col w-full">
              <div className="flex flex-col items-start border-b border-black">
                <label>Email</label>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder=""
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="flex justify-end">
            <button
              className="px-9 py-3 bg-dark-blue-60 rounded-[100px] font-notosans text-typo-white text-[16px] font-medium leading-[20px]"
              onClick={(e) => addTodo(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
