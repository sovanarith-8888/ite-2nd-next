"use client"
import Link from "next/link";

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function NavbarComponent()  {
  const path = usePathname();
  console.log(path)
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/Next.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" as={Link} active>
          Home
        </NavbarLink>
        <NavbarLink href="/about" as={Link}>About</NavbarLink>
        <NavbarLink href="/services" as={Link}>Services</NavbarLink>
        <NavbarLink href="/pricing" as={Link}>Pricing</NavbarLink>
        <NavbarLink href="/contact" as={Link}>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
  