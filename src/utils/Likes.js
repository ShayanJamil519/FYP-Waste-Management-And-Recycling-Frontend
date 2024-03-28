import React from "react";
import '../index.css';
import { useLikeThread } from "../hooks/thread-hook";
import { useStateContext } from "@/app/StateContext";

const Likes = ({ numberOfLikes, threadId }) => {
    console.log("in alike component")
    console.log(threadId)
    //const { mutate: addMutate } = useLikeThread(JSON.stringify(threadId));
    //const likeMutation = useLikeThread();
    const { user, setUser } = useStateContext();
    const userId = user._id
    const { addResponse, isLoading, isError, error } =
    useLikeThread();

    const handleLikeFunction = async (threadId ,userId) => {
      console.log("in alike component 2")
      console.log(threadId)
        try {

          await addResponse(threadId);
          // Handle success, e.g., show a success message or update state
        } catch (error) {
          // Handle error, e.g., display error message
          console.log(error)
        }
      };

    /*const handleLikeFunction = () => {
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
    };*/

    return (
        <div className='likes__container'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4 likesBtn'
                onClick={() => handleLikeFunction(threadId)}
            >
                <path d='M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z' />
            </svg>
            <p style={{ color: "#434242" }}>
                {numberOfLikes === 0 ? "" : numberOfLikes}
            </p>
        </div>
    );
};

export default Likes;