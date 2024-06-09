import Link from "next/link";
import Image from "next/image";
import { useGetTopViewedThreads } from "../../../hooks/districtAdmin-hook"; // Adjust the path as needed

const ChatCard = () => {
  const { data, isLoading, error } = useGetTopViewedThreads();
  console.log("thread Data")
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="col-span-12 rounded-sm border  bg-white py-6 xl:col-span-4 font-poppins">
      <h4 className="mb-6 px-7 text-xl font-semibold text-black ">Top Articles</h4>

      <div>
        {data.map((thread, key) => (
          <Link
            href={`/thread/${thread._id}`} // Assuming there's a route for thread details
            className="flex items-center gap-5 py-3 px-7 hover:bg-gray-3 "
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image src={thread.avatar || "/default_avatar.jpg"} alt={thread.name} width={57} height={56} />
              {/* <span
                className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                  thread.dot === 6 ? "bg-meta-6" : `bg-meta-${thread.dot}`
                } `}
              ></span> */}
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {thread.userName}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {thread.title}
                  </span>
                  <span className="text-xs"> . {thread.date} </span>
                </p>
              </div>
              {/* {thread.tcontent !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {thread.tcontent}
                  </span>
                </div>
              )} */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
