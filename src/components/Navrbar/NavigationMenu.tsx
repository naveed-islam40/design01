import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavigationMenuOption = ({
  child,
  links,
  handleSelectOption,
  selectedOption,
}: {
  child: React.ReactNode;
  links: { name: string; href: string }[];
  handleSelectOption?: (option: string) => void;
  selectedOption?: string;
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[16px]">
            {child}
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-white shadow-md px-2 rounded-lg">
            <ul className="w-[100px] md:w-[130px] lg:w-[150px] ">
              {links.map((link, index) => (
                <li key={index} className="py-1 w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      href={"#"}
                      className={`block w-full hover:bg-gray-200 py-1 px-3 rounded-md ${
                        selectedOption === link.name ? "bg-gray-200" : ""
                      }`}
                      onClick={() => {
                        if (handleSelectOption) {
                          handleSelectOption(link.name);
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuOption;
