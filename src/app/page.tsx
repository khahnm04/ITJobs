import { CardCompanyItem } from "./components/card/CardCompanyItem";
import { Section1 } from "./components/section/Section1";
import { Title } from "./components/title/Title";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End Section 1 */}

      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="container">
          <Title text="Nhà tuyển dụng hàng đầu" />
          {/* Wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Item */}
            <CardCompanyItem />
          </div>
        </div >
      </div >
      {/* End Section 2 */}
    </>
  );
}
