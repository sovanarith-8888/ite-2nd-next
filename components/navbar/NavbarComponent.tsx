"use client"
import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuItems } from "./menu";

type MenuItem = {
  name: string,
  path: string,
  active: boolean
}

export default function NavbarComponent()  {
  // Getting path from url /home/profile/defailt
  const pathName = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(menuItems);

  const updateActiveMenu = (currentPathName: string) => {
    const newMenuActive = menu.map((item) => {
      if(currentPathName === item.path){
        return {...item, active: true}
      }else{
        return {...item, active:false}
      }
    })
    setMenu(newMenuActive);
  }

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {
          menu.map((item,index)=>(
            // <NavbarLink href={item.path} key={index} as={Link} active={item.active}
            //   onClick={()=> updateActiveMenu(item.path)}>
            //   {item.name}
            // </NavbarLink>
              <NavbarLink href={item.path} key={index} as={Link} active={item.path === pathName}>
              {item.name}
            </NavbarLink>
          ))
        }
      </NavbarCollapse>
    </Navbar>
  );
}
  