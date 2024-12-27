import Header from "@/app/component/Header";
import Grid9x9 from "@/app/component/grid/Grid9x9";

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
        <Grid9x9 />
      </div>
    </div>
  );
}
