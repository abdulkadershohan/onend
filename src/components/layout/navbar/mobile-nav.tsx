
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

type Menu = {
    title: string;
    url: string;
};
export default function MobileNav({ menu }: { menu: Menu[] }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <SheetTrigger asChild>
                <Button
                    variant={'ghost'}
                    size={'icon'}
                    className="rounded-full cursor-pointer flex md:hidden"
                >
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent >
                <SheetHeader >
                    <SheetTitle />
                    <SheetDescription />
                </SheetHeader>
                <div className="grid gap-4 py-4 ">
                    {menu.map((item) => (
                        <a
                            key={item.title}
                            href={item.url}
                            onClick={() => setIsOpen(false)}
                            className="text-black hover:bg-gray-300 font-medium leading-5 uppercase text-center p-2 hover:text-gray-950"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>

            </SheetContent>
        </Sheet>
    )
}
