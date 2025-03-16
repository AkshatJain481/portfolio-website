import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="z-10 max-w-[600px] max-md:w-[350px]"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[85%] h-[75%] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner