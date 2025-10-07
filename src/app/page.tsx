/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#000065] py-[60px]">
        <div className="container">
          <h1 className="font-[700] text-[28px] text-white mb-[30px] text-center">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form action="" className="flex gap-x-[15px] gap-y-[12px] md:flex-nowrap flex-wrap mb-[30px]">
            <select
              name=""
              id=""
              className="md:w-[240px] w-full h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]"
            >
              <option value="">Tất cả thành phố</option>
              <option value="">Hà Nội</option>
              <option value="">Đà Nẵng</option>
              <option value="">Hồ Chí Minh</option>
            </select>
            <input
              type="text"
              className="md:flex-1 w-full h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]"
              placeholder="Nhập từ khóa..."
            />
            <button className="md:w-[240px] w-full h-[56px] rounded-[4px] bg-[#0088FF] font-[500] text-[16px] text-white px-[20px] flex items-center justify-center gap-x-[10px] cursor-pointer">
              <IoIosSearch className="text-[26px]" /> Tìm kiếm
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[15px]">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <Link href={"#"} className="border-[#414042] border-[1px] bg-[#121212] hover:bg-[#414042] rounded-[20px] px-[22px] py-[8px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                ReactJS
              </Link>
              <Link href={"#"} className="border-[#414042] border-[1px] bg-[#121212] hover:bg-[#414042] rounded-[20px] px-[22px] py-[8px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                Javascript
              </Link>
              <Link href={"#"} className="border-[#414042] border-[1px] bg-[#121212] hover:bg-[#414042] rounded-[20px] px-[22px] py-[8px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 1 */}

      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="container">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Nhà tuyển dụng hàng đầu
          </h2>
          {/* Wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Item */}
            <Link
              href=""
              className="rounded-[8px] border border-[#DEDEDE] relative"
              style={{
                background: "background: linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img
                src="/assets/images/card-bg.svg"
                className="absolute top-0 left-0 w-full h-auto"
                alt=""
              />
              <div className="relative">
                <div
                  className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[16px] mx-auto rounded-[8px] bg-white"
                  style={{
                    boxShadow: "0px 4px 24px 0px #0000001F"
                  }}
                >
                  <img
                    src="/assets/images/demo-cong-ty-1.png"
                    className="w-full h-full object-contain p-[10px]"
                    alt=""
                  />
                </div>
                <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] sm:mb-[24px] mb-[16px] mx-[16px] text-center line-clamp-2">
                  LG Electronics Development Vietnam (LGEDV)
                </h3>
                <div className="bg-[#F7F7F7] py-[12px] px-[16px] flex flex-wrap items-center sm:justify-between justify-center gap-[12px]">
                  <div className="font-[400] text-[14px] text-[#414042]">
                    Ho Chi Minh
                  </div>
                  <div className="inline-flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
                    <FaUserTie className="text-[16px] text-[#000096]" /> 5 việc làm
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div >
      </div >
      {/* End Section 2 */}
    </>
  );
}
