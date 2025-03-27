import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <RingLoader color="#fa6f06" size={75} />;
    </div>
  );
};

export default Loading;
