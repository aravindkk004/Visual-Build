"use client";

import MobileBlocker from "@/components/MobileBlocker";
import { dashboardMenu } from "@/utils/dasboardMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-full bg-light-gray pt-4 pr-4">
      <MobileBlocker />
      <div className="xl:w-[5%] lg:w-[8%] bg-light-gray p-3 flex flex-col items-center">
        {dashboardMenu.map((items, index) => {
          const isActive =
            pathname === items.path ||
            (items.name === "Home" && pathname === "/dashboard");

          return (
            <Link href={items.path} key={index} className="my-3">
              <div className="flex flex-col items-center">
                <items.icon
                  className={`
                    w-6 h-6
                    ${
                      items.name === "Create"
                        ? "bg-primary rounded-full p-2 text-white w-10 h-10"
                        : isActive
                        ? "text-primary bg-[#e5ddf9] p-2 rounded-md h-10 w-10"
                        : "text-gray-500"
                    }
                  `}
                />
                <p
                  className={`text-[11px] mt-2 ${
                    isActive ? "text-primary font-semibold" : "text-gray-500"
                  }`}
                >
                  {items.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex-1 bg-white shadow-xl rounded-lg overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
