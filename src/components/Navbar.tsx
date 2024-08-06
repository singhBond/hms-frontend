"use client"; // Ensure this is at the top of your file

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenu as NavigationMenuComponent,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Appointmentform from "./Appointmentform";

function CustomNavigationMenu() {
  return (
    < >
    <div className="bg-slate-100  hover:z-10 top-0 mx-auto rounded-full flex h-16 items-center gap-4 border-b bg-background  px-4 md:px-6">
      <div className=""> 
        <img src="/images/logo.png" alt="hmslogo" />
      </div>
      <NavigationMenuComponent>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>HOME </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="grid gap-1  p-2 md:w-[200px] lg:w-[200px] lg:grid-flow-row">
                  <ListItem href="/docs" title="Home Medical"></ListItem>
                  <ListItem
                    href="/docs/installation"
                    title="Home Clinic"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Home Dental Care"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Home Eye Care"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Home Prenatal Care"
                  ></ListItem>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuComponent>
            <NavigationMenuItem>
              <NavigationMenuTrigger>PAGES</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="grid gap-1  p-2 md:w-[200px] lg:w-[200px] lg:grid-flow-row">
                    <ListItem href="/docs" title="About Us"></ListItem>
                    <ListItem href="/docs" title="Service"></ListItem>
                    <ListItem href="/docs" title="Gallery"></ListItem>
                    <ListItem href="/docs" title="Pricing Table"></ListItem>
                    <ListItem href="/docs" title="UI Elements"></ListItem>
                    <ListItem href="/docs" title="Coming Soon"></ListItem>
                    <ListItem href="/docs" title="Error 404"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Terms And Condition"
                    ></ListItem>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuComponent>

          <NavigationMenuComponent>
            <NavigationMenuItem>
              <NavigationMenuTrigger>DOCTORS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1  p-2 md:w-[200px] lg:w-[200px] lg:grid-flow-row">
                  <ListItem href="/docs" title="Doctors"></ListItem>
                  <ListItem href="/docs" title="Doctor Detail"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuComponent>

          <NavigationMenuComponent>
            <NavigationMenuItem>
              <NavigationMenuTrigger>DEPARTMENTS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1  p-2 md:w-[200px] lg:w-[200px] lg:grid-flow-row">
                  <ListItem href="/docs" title="Departments"></ListItem>
                  <ListItem href="/docs" title="Cardiology"></ListItem>
                  <ListItem href="/docs" title="Neurology"></ListItem>
                  <ListItem href="/docs" title="Urology"></ListItem>
                  <ListItem href="/docs" title="Gynecological"></ListItem>
                  <ListItem href="/docs" title="Pediatrical"></ListItem>
                  <ListItem href="/docs" title="Laboratory"></ListItem>
                  <ListItem href="/docs" title="Department Detail"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuComponent>

          <NavigationMenuComponent>
            <NavigationMenuItem>
              <NavigationMenuTrigger>BLOG</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1  p-2 md:w-[200px] lg:w-[200px] lg:grid-flow-row">
                  <ListItem href="/docs" title="Standard"></ListItem>
                  <ListItem href="/docs" title="Checkboard"></ListItem>
                  <ListItem href="/docs" title="Masonry"></ListItem>
                  <ListItem href="/docs" title="Two Columns"></ListItem>
                  <ListItem href="/docs" title="Three Columns"></ListItem>
                  <ListItem href="/docs" title="Four Columns"></ListItem>
                  <ListItem href="/docs" title="Post Types"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuComponent>

          <NavigationMenuComponent>
            <NavigationMenuItem>
              <NavigationMenuTrigger>SHOP</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1  p-2 md:w-[200px] lg:w-[200px] lg:grid-flow-row">
                  <ListItem href="/docs" title="Shop"></ListItem>
                  <ListItem href="/docs" title="Shop Single"></ListItem>
                  <ListItem href="/docs" title="Shopping Cart"></ListItem>
                  <ListItem href="/docs" title="Checkout"></ListItem>
                  <ListItem href="/docs" title="Login"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuComponent>

          <NavigationMenuItem>
            <Link href="/docs" title="CONTACT">
              <NavigationMenuLink>CONTACT</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuComponent>

      <div>
        <Dialog>
          <DialogTrigger className="shadow-xl  rounded-full  w-full h-full   ">
            <Search className="m-2 size-6" />
          </DialogTrigger>
          <DialogContent className="min-h-16 w-">
            <div className="flex  items-center justify-between">
              <Input
                type="input"
                placeholder="search"
                className=" w-full mx-6"
              />
              <Button className=" bg-sky-700 h-full ">
                <Search />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-sky-700 ">Appointment</Button>
          </DialogTrigger>
          <DialogContent className=" bg-slate-100  ">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <Appointmentform />

            <DialogFooter className="mb-8 mr-8">
              <Button type="submit">Submit Now</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default CustomNavigationMenu;
