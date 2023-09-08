import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../collect/firebase";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LuSchool2 } from "react-icons/lu";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");

  const addEmail = async (e: any) => {
    e.preventDefault();

    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const existingEmails = querySnapshot.docs.map((doc) => doc.data().email);

      if (email) {
        if (existingEmails.includes(email)) {
          toast.success("Already registered, thank you!");
        } else {
          if (email) {
            const docRef = await addDoc(collection(db, "users"), {
              email: email,
              name: name,
              university: university,
            });
            console.log("Document written with ID: ", docRef.id);
            setName("");
            setUniversity("");
            setEmail("");
            toast.success("Thanks for joining us!");
          }
        }
      } else {
        toast.error("Please insert your data");
      }
    } catch (e) {
      toast.error("Error!");
    }
  };

  return (
    <section
      id="joinus"
      className={`bg-white flex flex-row justify-center items-center px-5 ss:px-4 py-[10px]`}
    >
      <div className="flex flex-col justify-center ss:gap-20 gap-8 flex-wrap md:flex-nowrap w-full p-5 lg:p-10">
        <div className="flex flex-col items-center py-10 gap-[40px] w-full">
          <div className="flex grow items-center leading-[1em] font-medium text-typo-dark-blue text-4xl md:text-[56px]">
            Join our Waitlist
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="leading-4 font-semibold text-sm text-typo-grey text-center">
              If you are interested in publishing your research object in
              Publed, please join us by submiting your personal data
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-blue-20 px-12 py-10 gap-[48px] w-full sm:w-1/2 lg:w-1/4 shadow-md items-center mx-auto">
          <div className="flex flex-col justify-between self-stretch w-full gap-10">
            <form className="flex flex-col w-full">
              <div className="flex flex-col items-start">
                <div className="flex flex-row justify-start items-center gap-2 w-full ">
                  <BsFillPersonVcardFill />
                  <label>Name</label>
                </div>
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
                <div className="flex flex-row justify-start items-center gap-2 w-full ">
                  <MdAlternateEmail />
                  <label>Email</label>
                </div>
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
                <div className="flex flex-row justify-start items-center gap-2 w-full ">
                  <LuSchool2 />
                  <label>Afilliation</label>
                </div>
                <input
                  className="bg-blue-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-gray-50 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="University of ..., Research Group ... "
                  aria-label="University"
                  value={university}
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
          <Toaster />
        </div>
        <div className="flex flex-col gap-3 justify-center mx-auto py-10">
          <div className="text-typo-dark-blue leading-[18px] font-semibold text-[20px] md:text-[28px]">
            How Can We Help You?
          </div>
          <div className="w-full flex flex-row gap-2 justify-center items-center">
            <rect className="w-2 h-2 bg-dark-blue-60"></rect>
            <div className="uppercase text-typo-grey leading-[18px] font-semibold text-[14px] text-center">
              Send us an e-mail
            </div>
          </div>
          <a href="mailto:info@publed.io">
            <div className="text-typo-dark-blue text-[28px] font-normal text-center">
              info@publed.io
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
