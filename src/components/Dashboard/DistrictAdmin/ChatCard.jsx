import Link from "next/link";
import Image from "next/image";

const chatData = [
  {
    avatar: "/home/contact__avatar.jpg",
    name: "Shayan Khan",
    text: "Segregating Waste",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/home/contact__avatar.jpg",
    name: "Anas Ali",
    text: "How Landfills Work",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/home/contact__avatar.jpg",
    name: "Anas Khan",
    text: "How Recyling points Work",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/home/contact__avatar.jpg",
    name: "Abdullah Tariq",
    text: "How Much waste we Generate",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "/home/contact__avatar.jpg",
    name: "Aziz Khan",
    text: "How not to Decompose Waste",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/home/contact__avatar.jpg",
    name: "Murtuza Khan",
    text: "How to Recycle Waste",
    time: 32,
    textCount: 3,
    dot: 6,
  },
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border  bg-white py-6 xl:col-span-4 font-poppins">
      <h4 className="mb-6 px-7 text-xl font-semibold text-black ">Top Articles</h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-5 py-3 px-7 hover:bg-gray-3 "
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image src={chat.avatar} alt="User" width={57} height={56} />
              <span
                className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                  chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                } `}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
