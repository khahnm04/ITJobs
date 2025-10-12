import { CardJobItem } from "@/app/components/card/CardJobItem";
import { Pagination } from "@/app/components/pagination/Pagination";
import { Section1 } from "@/app/components/section/Section1";
import { Metadata } from "next";

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
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Item */}
            <CardJobItem />
          </div>

          {/* Phân trang */}
          <Pagination />

        </div>
      </div>
      {/* Hết Kết quả tìm kiếm */}
    </>
  )
}