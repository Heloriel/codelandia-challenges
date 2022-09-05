import { Item } from "../Item/Item";

export const ItemList = () => {
  return (
    <ul className="home-item-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      <li className="group">
        <Item id={"01"} />
      </li>
      <li className="group">
        <Item id={"02"} />
      </li>
      <li className="group">
        <Item id={"03"} />
      </li>
      <li className="group">
        <Item id={"04"} />
      </li>
      <li className="group">
        <Item id={"05"} />
      </li>
      <li className="group">
        <Item id={"06"} />
      </li>
      <li className="group">
        <Item id={"07"} />
      </li>
      <li className="group">
        <Item id={"08"} />
      </li>
    </ul>
  );
};
