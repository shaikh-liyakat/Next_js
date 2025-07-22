"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
        <Menu  setActive={setActive}>
        <HoveredLink href="./dashboard" >
        <MenuItem setActive={setActive} active={active} item="Dashboard"/>  
        </HoveredLink>

        <HoveredLink href="./store" >
        <MenuItem setActive={setActive} active={active} item="Store"/>  
        </HoveredLink>

        <HoveredLink href="./about" >
        <MenuItem setActive={setActive} active={active} item="About Us"/>  
        </HoveredLink>

         {/* <MenuItem setActive={setActive} active={active} item="About us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
         
    </div>
  );
}
