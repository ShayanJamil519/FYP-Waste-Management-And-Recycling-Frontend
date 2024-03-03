import dynamic from "next/dynamic";

// import Dashboard from "@/components/Dashboard";
const Dashboard = dynamic(() => import("@/components/Dashboard"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
