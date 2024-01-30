import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { ReactElement } from "react";

interface ServiceItem {
  id: number;
  icon: ReactElement;
  title: string;
  desc: string;
}

export const serviceData: ServiceItem[] = [
  {
    id: 1,
    icon: <TbTruckDelivery />,
    title: "Free Delivery",
    desc: "Orders from all item",
  },
  {
    id: 2,
    icon: <RiRefund2Fill />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    id: 3,
    icon: <TbDiscount />,
    title: "Special Discounts",
    desc: "On Order Over $99.00",
  },
  {
    id: 4,
    icon: <MdOutlineSupportAgent />,
    title: "24/7 Customer Support",
    desc: "Contact us 24 hours a day",
  },
];
