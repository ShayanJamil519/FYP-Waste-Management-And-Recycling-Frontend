"use client";
import React, { useState , useEffect } from "react";
import '../../../../index.css';
import { useGetAThread ,useReplyThread } from "../../../../hooks/thread-hook";
import { useStateContext } from "@/app/StateContext";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";



const Page = () => {

    const pathname = usePathname();
    const threadId = pathname.split("/user/")[1].split("/")[0];

    const { data, isError } = useGetAThread(threadId);
    const [isLoading, setIsLoading] = useState(false);
    const [replyList, setReplyList] = useState([]);
    const [reply, setReply] = useState("");
    const [title, setTitle] = useState("");
    const { user, setUser } = useStateContext();
    const [userData, setUserData] = useState({
        userId: user?._id,
        date : Date.now(),
        content: "",
      });
    //const { mutate: addMutate } = useReplyThread( JSON.stringify(threadId, userData));
    //const { mutate: addMutate } = useReplyThread(JSON.stringify(threadId), userData);
    const { addResponsee, error } =
    useReplyThread();
    useEffect(() => {
      console.log("data")
      console.log(data?.replies)
        const checkUser = () => {
            setReplyList(data?.replies);
            setTitle(data?.title);
        };
        checkUser();
    }, [data]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value,
        });
        console.log(userData.content)
      };

   const handleSubmitReply = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log("hold")
        console.log(threadId)
        console.log(userData.content)
        try {

          await addResponsee(threadId,userData);
          toast.success("Reply added succesfully");
        } catch (error) {
          // Handle error, e.g., display error message
          toast.error(error);
        }
      };

    return (
        <main className='replies'>
            <h1 className='repliesTitle'>{title}</h1>
    
            <form className='modal__content' onSubmit={handleSubmitReply}>
                <label htmlFor='reply'>Reply to the thread</label>
                <textarea
                    rows={5}
                    onChange={handleInputChange}
                    type='text'
                    name='content'
                    className='modalInput'
                />
    
                <button className='modalBtn'>SEND</button>
            </form>
    
            <div className='thread__container'>
                {replyList?.map((reply) => (
                    <div className='thread__item' key={reply}>
                        <p>{reply.content}</p>
                        <div className='react__container'>
                            <p style={{ opacity: "0.5" }}>by {reply.userId}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Page;