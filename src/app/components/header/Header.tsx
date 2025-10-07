import Link from "next/link"
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      <header className="bg-[#000071] py-[15px]">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#" className="font-[800] text-[28px] text-white">
              28.ITJobs
            </Link>
            {/* Menu */}
            <nav className="">
              <ul className="flex gap-x-[30px]">
                <li className="inline-flex items-center gap-x-[8px] relative group/sub-1">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Việc Làm IT
                  </Link>
                  <FaAngleDown className="text-[16px] text-white" />
                  <ul className="bg-[#000065] absolute top-[100%] left-0 w-[280px] rounded-[4px] hidden group-hover/sub-1:block">
                    <li className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096] group/sub-2">
                      <Link href="#" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo kỹ năng
                      </Link>
                      <FaAngleRight className="text-[16px] text-white" />
                      <ul className="bg-[#000065] absolute top-[0] left-[100%] w-[280px] rounded-[4px] hidden group-hover/sub-2:block">
                        <li className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                          <Link href="#" className="font-[600] text-[16px] text-white">
                            ReactJS
                          </Link>
                        </li>
                        <li className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                          <Link href="#" className="font-[600] text-[16px] text-white">
                            NodeJS
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                      <Link href="#" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo công ty
                      </Link>
                      <FaAngleRight className="text-[16px] text-white" />
                    </li>
                  </ul>
                </li>
                <li className="inline-flex items-center gap-x-[8px]">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Top Công Ty IT
                  </Link>
                  <FaAngleDown className="text-[16px] text-white" />
                </li>
                <li className="inline-flex items-center gap-x-[8px]">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Nhà Tuyển Dụng
                  </Link>
                  <FaAngleDown className="text-[16px] text-white" />
                </li>
              </ul>
            </nav>
            {/* Account */}
            <div className="font-[600] text-[16px] text-white inline-flex gap-x-[5px]">
              <Link href="#" className="">
                Đăng Nhập
              </Link>
              <span className="">/</span>
              <Link href="#" className="">
                Đăng Nhập
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}