import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <p>About Us</p>
        <p>Souces</p>
        <p>Waves Experience</p>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
