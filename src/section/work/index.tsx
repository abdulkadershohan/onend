import { sphere_Matrix, torus_Half_Standing, torus_Standing } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
type IData = {
    id?: number;
    title: string;
    url: string;
    image: string;
};
const data: IData[] = [
    {
        id: 1,
        title: "Conlete - Mobile App",
        url: "#",
        image: "/images/service1.png",
    },
    {
        id: 2,
        title: "NFT - Website",
        url: "#",
        image: "/images/service2.png",
    },
    {
        id: 3,
        title: "Nursury - Website",
        url: "#",
        image: "/images/service3.png",
    },
    {
        id: 4,
        title: "Conlete - Mobile App",
        url: "#",
        image: "/images/service1.png",
    },
    {
        id: 5,
        title: "NFT - Website",
        url: "#",
        image: "/images/service2.png",
    },
    {
        id: 6,
        title: "Nursury - Website",
        url: "#",
        image: "/images/service3.png",
    },
];
export default function Work() {
    return (
        <section id="work" className="relative" >
            <div className="container mx-auto  lg:w-7xl">
                <div className="grid md:grid-cols-[1fr_1fr] gap-4 px-2 md:px-0   ">
                    <div className="">
                        <h1 className="text-3xl md:text-[5.0625rem] font-medium text-[#000] leading-[6.25rem]  ">
                            Our Latest Work
                        </h1>
                        <Button variant={"ghost"} className=" cursor-pointer text-base ">
                            Our Case Studies <ArrowRight className="ml-2" />
                        </Button>

                    </div>
                    <div className="w-full max-w-5xl md:max-w-3xl xl:max-w-5xl mx-auto px-4 pb-0 md:pb-16">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {data.map((project) => (
                                    <CarouselItem
                                        key={project.id}
                                        className="pl-2 md:pl-4 lg:basis-1/2 xl:basis-1/3 "
                                    >
                                        <div className="p-1">
                                            <Card className="overflow-hidden border-0 shadow-none">
                                                <CardContent className="p-0">
                                                    <a
                                                        href={project.url}
                                                        className="group relative lg:block aspect-video overflow-hidden h-[562px]  w-[250px] lg:w-[325px]"
                                                    >
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className={
                                                                "h-[500px] w-full object-cover transition-all duration-300 group-hover:scale-110"
                                                            }
                                                        />
                                                        <div
                                                            className={
                                                                "absolute inset-0 bg-black/60 flex flex-col items-start justify-end p-6 opacity-100 transition-opacity duration-300 group-hover:opacity-100"
                                                            }
                                                        >
                                                            <h3 className="text-white text-xl font-semibold">
                                                                {project.title}
                                                            </h3>
                                                            <Button
                                                                variant={"ghost"}
                                                                className="cursor-pointer text-[#B6F214] mt-4 px-0 hover:bg-transparent hover:text-[#B6F214]"
                                                            >
                                                                Case Study <ArrowRight className="ml-2" />
                                                            </Button>
                                                        </div>
                                                    </a>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden lg:flex" />
                            <CarouselNext className="hidden lg:flex" />
                        </Carousel>
                    </div>
                </div>


            </div>
            <div className="bg-[#B6F214] relative z-200 overflow-hidden ">

                <div className="container mx-auto  lg:w-7xl py-16  ">
                    <div className="flex flex-col items-center justify-center space-y-10 relative ">

                        <span className="uppercase text-black text-center font-medium text-xl leading-5 block">
                            Start a project
                        </span>
                        <h1
                            className="text-6xl leading-16 text-center font-medium text-black "
                        >
                            Let’s work together
                        </h1>
                        <Button
                            variant={'outline'}
                            className="rounded-none cursor-pointer md:h-16 md:w-63 relative z-20"
                        >
                            Get Started <ArrowRight className="ml-2" />
                        </Button>
                        {/* left shape */}
                        <img src={torus_Half_Standing} alt="shape" className="absolute -left-20 -bottom-35 hidden lg:block" />
                        {/* right shape */}
                        <img src={torus_Standing} alt="shape" className="absolute -right-20 -bottom-25 hidden lg:block" />
                        <img src={torus_Standing} alt="shape" className="absolute right-0 bottom-0 md:-bottom-25 md:-right-35 lg:hidden" />

                    </div>
                </div>
            </div>
            <img
                src={sphere_Matrix}
                alt="sphere"
                className="absolute bottom-80 -left-10 h-[200px] w-[200px] hidden md:block z-10"

            />
        </section>
    );
}
