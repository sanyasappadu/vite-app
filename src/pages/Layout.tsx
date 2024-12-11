import { Outlet, Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react"
 
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
const Layout = () => {
  const { setTheme } = useTheme()

  return (
    <>
      <nav className="text-black dark:text-white bg-gray-100 dark:bg-gray-900">

        <Menubar>
  <MenubarMenu>
  
  
    <MenubarTrigger><Link to="/blogs">Blogs</Link></MenubarTrigger>
    <MenubarTrigger><Link to="/">Home</Link></MenubarTrigger>
    <MenubarTrigger><Link to="/contact">Contact</Link></MenubarTrigger>
    <MenubarTrigger>File</MenubarTrigger>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </MenubarMenu>
    </Menubar>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;