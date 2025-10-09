/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import { FaBriefcase, FaUserTie } from "react-icons/fa";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Chi tiết công việc",
  description: "Mô tả trang chi tiết công việc...",
};

export default function JobDetailPage() {
  return (
    <>
      {/* Chi tiết công việc */}
      <div className="pt-[30px] pb-[60px]">
        <div className="container">
          {/* Wrap */}
          <div className="flex gap-[20px]">

            {/* Left */}
            <div className="w-[65%]">
              {/* Thông tin công việc */}
              <div className="rounded-[8px] border border-[#DEDEDE] p-[20px]">
                <h1 className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                  Front End Developer ( Javascript, ReactJS)
                </h1>
                <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">
                  LG CNS Việt Nam
                </div>
                <div className="font-[700] text-[20px] text-[#0088FF] mb-[20px]">
                  1.000$ - 1.500$
                </div>
                <Link href="#" className="bg-[#0088FF] rounded-[4px] p-[14px] font-[700] text-[16px] text-white mb-[20px] block text-center">
                  Ứng tuyển
                </Link>
                <div className="grid grid-cols-3 gap-x-[16px] mb-[20px]">
                  <img
                    src="/assets/images/demo-banner-1.jpg"
                    alt=""
                    className="w-full aspect-[232/145] rounded-[4px] object-cover"
                  />
                  <img
                    src="/assets/images/demo-banner-2.jpg"
                    alt=""
                    className="w-full aspect-[232/145] rounded-[4px] object-cover"
                  />
                  <img
                    src="/assets/images/demo-banner-3.jpg"
                    alt=""
                    className="w-full aspect-[232/145] rounded-[4px] object-cover"
                  />
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] text-[14px]">
                  <FaUserTie className="text-[16px]" /> Fresher
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] text-[14px]">
                  <FaBriefcase className="text-[16px]" /> Tại văn phòng
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] text-[14px]">
                  <FaLocationDot className="text-[16px]" /> Ha Noi
                </div>
                <div className="flex flex-wrap gap-[8px]">
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
              {/* Thông tin công việc */}
            </div>

            {/* Right */}
            <div className="flex-1">
              {/* Thông tin công ty */}
              <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
                <div className="flex gap-[12px]">
                  <div className="w-[100px] aspect-square rounded-[4px] truncate">
                    <img
                      src="/assets/images/demo-cong-ty-2.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-[700] text-[18px] text-[#121212] mb-[10px]">
                      LG CNS Việt Nam
                    </div>
                    <Link href="#" className="flex items-center gap-[8px] font-[400] text-[16px] text-[#0088FF]">
                      xem công ty <FaArrowRightLong className="text-[16px]" />
                    </Link>
                  </div>
                </div>
                <div className="mt-[20px] flex flex-col gap-[10px]">
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Mô hình công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      Sản phẩm
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Quy mô công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      151 - 300 nhân viên
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Thời gian làm việc
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      Thứ 2 - Thứ 6
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Làm việc ngoài giờ
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      Không có OT
                    </div>
                  </div>
                </div>
              </div>
              {/* Hết Thông tin công ty */}

            </div>

          </div>
        </div>
      </div>
      {/* Hết Chi tiết công việc */}
    </>
  )
}