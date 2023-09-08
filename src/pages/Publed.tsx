import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../collect/firebase";

const Publed = () => {
  const [emails, setExistingEmails] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const existingEmails = querySnapshot.docs.map(
          (doc) => doc.data().email
        );

        // Remove duplicates using a filter function
        const uniqueEmails = existingEmails.filter((email, index, self) => {
          return self.indexOf(email) === index;
        });

        setExistingEmails(uniqueEmails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      id="publ3d"
      className={`bg-white flex flex-row justify-center items-center px-5 ss:px-4 py-[10px]`}
    >
      <div className="flex flex-col justify-center ss:gap-20 gap-8 flex-wrap md:flex-nowrap w-full p-5 lg:p-10">
        <ul>
          {emails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div>
      <h2>Registered: {emails.length}</h2>
    </section>
  );
};

export default Publed;
