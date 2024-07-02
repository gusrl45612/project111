import {
  IconLayoutDashboard,
  IconUser,
  IconTools,
  IconMessages,
  IconUsers,
  IconBuilding,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "메인",
    icon: IconLayoutDashboard,
    href: "/",
  },
  // {
  //   navlabel: true,
  //   subheader: "Utilities",
  // },
  {
    id: uniqueId(),
    title: "고객관리",
    icon: IconUser,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "시공관리",
    icon: IconTools,
    href: "/utilities/shadow",
  },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  {
    id: uniqueId(),
    title: "메세지관리",
    icon: IconMessages,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "사원관리",
    icon: IconUsers,
    href: "/authentication/register",
  },
  {
    id: uniqueId(),
    title: "업체관리",
    icon: IconBuilding,
    href: "/authentication/register",
  },


];

export default Menuitems;
