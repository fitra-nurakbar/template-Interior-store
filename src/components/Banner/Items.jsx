import Product from "./Product";
import TagLine from "./TagLine";

export default function Items() {
  return (
    <div className="flex py-20 px-5">
      <TagLine />
      <Product />
    </div>
  );
}
