import "./base.css";
import { useGlobalContext } from "../../../Contexts";

const PopUp = () => {
  const { popUp } = useGlobalContext();

  return popUp ? (
    <div className="PopUp fixed w-[100%] h-[100%] flex justify-end items-baseline">
      <div className="card flex flex-col flex-wrap justify-center items-center rounded-b-lg"></div>
    </div>
  ) : (
    <></>
  );
};

export default PopUp;
