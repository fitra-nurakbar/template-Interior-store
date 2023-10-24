import Button from "../Button";

export default function TagLine() {
  return (
    <div className="flex-1">
      <div className="flex gap-3 items-center mb-4">
        <span className="bg-[#E8A04C] text-white rounded-lg font-bold py-1 px-3">
          New
        </span>
        <p className="text-xs">Now equipment can be requested as needed</p>
      </div>
      <h1 className="text-7xl leading-[82px] mb-5">
        Home decoration with <b>the best design & price</b>
      </h1>
      <h2 className="text-lg">
        Come on, decorate your home with quality equipment without worrying
        about your wallet being empty
      </h2>
      <Button name={"Shop Now"} />
    </div>
  );
}
