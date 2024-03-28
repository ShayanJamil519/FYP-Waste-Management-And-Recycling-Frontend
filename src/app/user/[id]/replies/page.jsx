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
    const { mutate: addMutate } = useReplyThread(JSON.stringify(threadId), userData);
    useEffect(() => {
        const checkUser = () => {
            setReplyList(data?.replies);
            setTitle(data?.title);
        };
        checkUser();
    }, [data?.replies , data?.title]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value,
        });
        console.log(userData.title)
      };

   const handleSubmitReply = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        addMutate(
          {},
          {
            onSuccess: (response) => {
              console.log(response)
              toast.success(response?.data?.message);
              setThreadList(response?.data?.threads);
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
        <main className='replies'>
            <h1 className='repliesTitle'>{title}</h1>
    
            <form className='modal__content' onSubmit={handleSubmitReply}>
                <label htmlFor='reply'>Reply to the thread</label>
                <textarea
                    rows={5}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    type='text'
                    name='reply'
                    className='modalInput'
                />
    
                <button className='modalBtn'>SEND</button>
            </form>
    
            <div className='thread__container'>
                {replyList?.map((reply) => (
                    <div className='thread__item' key={reply}>
                        <p>{reply.text}</p>
                        <div className='react__container'>
                            <p style={{ opacity: "0.5" }}>by {reply.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Page;