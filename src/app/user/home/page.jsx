"use client";
import React, { useState } from "react";
import '../../../index.css';
import { useCreateThread } from "../../../hooks/thread-hook";
import { useStateContext } from "@/app/StateContext";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";


const Page = () => {
    const [thread, setThread] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useStateContext();
    const [userData, setUserData] = useState({
        userId: user?._id,
        title: "",
      });

      const { mutate: addMutate } = useCreateThread(JSON.stringify(userData));

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value,
        });
        console.log(userData.title)
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        addMutate(
          {},
          {
            onSuccess: (response) => {
              toast.success(response?.data?.message);
              
              setIsLoading(false);
            },
            onError: (response) => {
              console.error("An error occurred:");
              console.log(response);
              console.log(response.response.data.message);
              toast.error(response.response.data.message);
              setIsLoading(false);
            },
          }
        );
      };
    
    return (
        <>
            <main className='home'>
                <h2 className='homeTitle'>Create a Thread</h2>
                <form className='homeForm' onSubmit={handleSubmit}>
                    <div className='home__container'>
                        <label htmlFor='thread'>Title / Description</label>
                        <input
                            type='text'
                            name='title'
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    {isLoading ? (
                  <FaSpinner className="animate-spin" /> // Show spinner if isLoading is true
                ) : (
                    <button className='homeBtn'>CREATE THREAD</button>
                )}
                    
                </form>
            </main>
        </>
    );
};

export default Page;