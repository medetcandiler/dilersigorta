import Loader from "@/components/Loader";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-[300px]">
      <Loader isSectionLoader={false} />
    </div>
  );
};

export default loading;
