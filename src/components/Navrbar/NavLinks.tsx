import Link from "next/link";

const NavLink = ({
  href,
  children,
  dropdownIcon,
  setDropdownOpen,
  isDropDownOpen,
}: {
  href: string;
  children: string;
  dropdownIcon?: React.ReactNode;
  setDropdownOpen?: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  isDropDownOpen?: boolean;
}) => {
  return (
    <div className="relative group flex items-center gap-2 hover:text-blue-600">
      <Link
        href={href}
        className={`text-gray-700 hover:text-blue-600 font-semibold text-[17px] ${
          isDropDownOpen ? "text-blue-600" : ""
        }`}
      >
        {children}
        <span
          className={`absolute -bottom-7 left-0 h-[4px] rounded-lg bg-blue-600 transition-all duration-300 ease-in-out ${
            isDropDownOpen ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </Link>
      {dropdownIcon && setDropdownOpen && (
        <p
          className={`cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out ${
            isDropDownOpen ? "text-blue-600" : ""
          }`}
          onClick={() =>
            setDropdownOpen((prev: any) => ({
              ...prev,
              [children]: !prev[children],
            }))
          }
        >
          {dropdownIcon}
        </p>
      )}
    </div>
  );
};

export default NavLink;
