import Link from "next/link";
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
          <form action="" className="flex gap-x-[15px] mb-[30px]">
            <select
              name=""
              id=""
              className="w-[240px] h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]"
            >
              <option value="">Tất cả thành phố</option>
              <option value="">Hà Nội</option>
              <option value="">Đà Nẵng</option>
              <option value="">Hồ Chí Minh</option>
            </select>
            <input
              type="text"
              className="flex-1 h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]"
              placeholder="Nhập từ khóa..."
            />
            <button className="w-[240px] h-[56px] rounded-[4px] bg-[#0088FF] font-[500] text-[16px] text-white px-[20px] flex items-center justify-center gap-x-[10px] cursor-pointer">
              <IoIosSearch className="text-[26px]" /> Tìm kiếm
            </button>
          </form>
          <div className="flex items-center gap-x-[12px]">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="flex gap-x-[10px]">
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
    </>
  );
}
