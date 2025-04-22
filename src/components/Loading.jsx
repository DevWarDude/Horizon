import { FadeLoader, GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center dark:bg-slate-950">
      <FadeLoader color="#4893ff" />
    </div>
  );
};

export default Loading;
