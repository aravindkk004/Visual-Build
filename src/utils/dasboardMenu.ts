import { Folder, Home, LayoutDashboardIcon, LogOut, Plus, WalletCardsIcon } from "lucide-react";

export const dashboardMenu = [
    {
        name: "Create",
        icon: Plus,
        path: "/dashboard",
    },
    {
        name: "Home",
        icon: Home,
        path: "/dashboard",
    },
    {
        name: "Projects",
        icon: Folder,
        path: "/dashboard/projects",
    },
    {
        name: "Templates",
        icon: LayoutDashboardIcon,
        path: "/dashboard/templates",
    },
    {
        name: "Billing",
        icon: WalletCardsIcon,
        path: "/dashboard/billing",
    },
    {
        name: "Logout",
        icon: LogOut,
        path: "/",
    },
]