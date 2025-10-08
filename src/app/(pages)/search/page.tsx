/* eslint-disable @next/next/no-img-element */
import { Section1 } from "@/app/components/section/Section1";
import { Metadata } from "next";
import Link from "next/link";
import { FaBriefcase, FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Kết quả tìm kiếm công việc...",
};

export default function SearchPage() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End Section 1 */}

      {/* Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="container">
          <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
            76 việc làm <span className="text-[#0088FF]">reactjs</span>
          </h2>

          {/* Bộ lọc */}
          <div
            className="bg-white rounded-[8px] py-[10px] px-[20px] flex flex-wrap gap-[12px] mb-[30px]"
            style={{
              boxShadow: "0px 4px 20px 0px #0000000F"
            }}
          >
            <select
              name=""
              id=""
              className="w-[148px] h-[36px] rounded-[20px] bg-white border border-[#DEDEDE] px-[18px] font-[400] text-[16px] text-[#414042]"
            >
              <option value="">Cấp bậc</option>
              <option value="">Intern</option>
              <option value="">Fresher</option>
              <option value="">Junior</option>
              <option value="">Middle</option>
              <option value="">Senior</option>
              <option value="">Manager</option>
            </select>
            <select
              name=""
              id=""
              className="w-[206px] h-[36px] rounded-[20px] bg-white border border-[#DEDEDE] px-[18px] font-[400] text-[16px] text-[#414042]"
            >
              <option value="">Hình thức làm việc</option>
              <option value="">Tại văn phòng</option>
              <option value="">Làm từ xa</option>
              <option value="">Linh hoạt</option>
            </select>
          </div>

          {/* Danh sách công việc */}
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
              <div className="relative text-center">
                <div
                  className="w-[116px] aspect-square mt-[20px] mb-[20px] mx-auto rounded-[8px] bg-white"
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
                <h3 className="font-[700] text-[18px] text-[#121212] mb-[6px] mx-[16px] line-clamp-2">
                  Frontend Engineer (ReactJS)
                </h3>
                <div className="font-[400] text-[14px] text-[#121212] mb-[12px]">
                  LG CNS Việt Nam
                </div>
                <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                  1.000$ - 1.500$
                </div>
                <div className="flex items-center justify-center gap-[8px] mb-[6px] text-[14px]">
                  <FaUserTie className="text-[16px]" /> Fresher
                </div>
                <div className="flex items-center justify-center gap-[8px] mb-[6px] text-[14px]">
                  <FaBriefcase className="text-[16px]" /> Tại văn phòng
                </div>
                <div className="flex items-center justify-center gap-[8px] mb-[6px] text-[14px]">
                  <FaLocationDot className="text-[16px]" /> Ha Noi
                </div>
                <div className="mt-[12px] mb-[20px] flex justify-center flex-wrap gap-[8px]">
                  <div className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    ReactJS
                  </div>
                  <div className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    NextJS
                  </div>
                  <div className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    JavaScript
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
      {/* Hết Kết quả tìm kiếm */}
    </>
  )
}