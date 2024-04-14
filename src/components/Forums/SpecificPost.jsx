"use client";
import { postsData } from "@/app/data";
import React , {useState} from "react";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useGetAThread ,useReplyThread ,useLikeThread  , useLikeThread2} from "../../hooks/thread-hook";
import { useStateContext } from "@/app/StateContext";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import DataLoader from "../Shared/DataLoader";
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const Post = () => {
  const { user, setUser } = useStateContext();
  console.log("user")
  const userId = user?.userId
  const pathname = usePathname();
  const threadId = pathname.split("/forum/")[1].split("/")[0];
  const [userData, setUserData] = useState({

    userId: userId,
    threadId: threadId,
  });

 
 
  console.log(userId)
  


  


  const { data, isError } = useGetAThread(threadId);
  console.log(data)
  const { addResponse, isLoading,  error } =
  useLikeThread2();

  const handleLikeFunction = async () => {
    try {
      console.log("s")
      await addResponse(JSON.stringify(userData) );
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="bg-white font-normal font-poppins p-4 rounded-md">
      <h1 className=" text-3xl font-semibold mb-3 underline text-[#182822] leading-normal">
        {data?.title}
      </h1>

      <div className="flex items-center justify-start space-x-2 mb-5">
        <img
          src={data?.avatar}
          alt="janet andrews"
          className="w-12 h-12 rounded-full"
        />
        <div className="">
          <p className="text-lg">{data?.userName}</p>
          <p className="text-xs text-gray-500">{formatDate(data?.date)}</p>
        </div>
      </div>
      <p className="text-[#000] font-light leading-relaxed">
       {data?.tcontent}
      </p>
      <div className="flex items-center justify-between">
        <button className="flex items-center text-gray-600 mt-4" onClick={() => handleLikeFunction()}>
          <FaHeart className="text-[20px] mr-2" />
          <span className="text-[15px] font-semibold">{data?.likes.length}</span>
        </button>
        <div className="flex items-center gap-5">
          <FaFacebookF className="text-[18px] cursor-pointer" />
          <FaLinkedinIn className="text-[18px] cursor-pointer" />
          <FaXTwitter className="text-[18px] cursor-pointer" />
        </div>
      </div>

      <div className="bg-[#e7e9e8] w-full h-[1px] mt-4"></div>

      {true && (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold">{data?.replies.length} Comments</h3>
          {data?.replies.map((comment) => (
            <Comment key={comment} {...comment} />
          ))}
        </div>
      )}
    </div>
  );
};

const Comment = ({RuserName ,content,
  rAvatar,
  timeOfReply
  }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-md shadow">
      <div className="flex items-center space-x-2">
        <img
          src={rAvatar}
          alt="janet andrews"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-medium">{
RuserName}</p>
          <p className="text-xs text-gray-500">{formatDate(timeOfReply)}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-normal text-[#63716c]">
        {content}
      </p>
    </div>
  );
};

const SpecificPost = () => {

  
  return (
    <div className="w-[80%] py-20 mx-auto font-poppins">
      <Post  />
    </div>
  );
};

export default SpecificPost;
