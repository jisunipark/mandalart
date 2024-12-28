import Button from "@/app/component/Button";
import Header from "@/app/component/Header";
import Chart from "@/app/component/grid/Chart";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-48 flex flex-col items-center justify-center gap-8 pb-48 pt-176">
        <h2 className="text-32 font-medium">
          나만의 만다라트 계획표를 쉽게 만들어 보세요
        </h2>
        <input
          type="text-300"
          placeholder="제목을 입력하세요"
          className="text-center text-64 font-bold leading-90 focus:outline-none"
        />
        <Chart />
        <div className="flex cursor-pointer gap-16">
          <Button>이미지로 저장</Button>
          <Button>초기화</Button>
        </div>
      </div>
    </div>
  );
}
