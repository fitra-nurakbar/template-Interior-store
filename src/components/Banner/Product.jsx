export default function Product() {
  return (
    <div className="flex-1 flex justify-center relative">
      <span className="absolute w-[370px] h-[370px] rounded-full bg-[#C4C4C4] top-[15%]"></span>
      <img
        className="relative w-96"
        src="src/assets/product/chair.svg"
        alt="Grey Chair"
      />
    </div>
  );
}
