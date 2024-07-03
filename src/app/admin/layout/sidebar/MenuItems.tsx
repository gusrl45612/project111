import {
  IconLayoutDashboard,
  IconUser,
  IconTools,
  IconMessages,
  IconUsers,
  IconBuilding,
  IconTool,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "메인",
    icon: IconLayoutDashboard,
    href: "/admin",
  },
  // {
  //   navlabel: true,
  //   subheader: "Utilities",
  // },
  {
    id: uniqueId(),
    title: "고객관리",
    icon: IconUser,
    href: "/admin/customer",
  },
  {
    id: uniqueId(),
    title: "AS 관리",
    icon: IconTool,
    href: "/admin/customer/as",
  },
  {
    id: uniqueId(),
    title: "시공관리",
    icon: IconTools,
    href: "/admin/construction",
  },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  {
    id: uniqueId(),
    title: "메세지관리",
    icon: IconMessages,
    href: "/admin/message",
  },
  {
    id: uniqueId(),
    title: "사원관리",
    icon: IconUsers,
    href: "/admin/employee",
  },
  {
    id: uniqueId(),
    title: "업체관리",
    icon: IconBuilding,
    href: "/admin/company",
  },


];

export default Menuitems;
