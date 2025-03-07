import { sphere_Matrix } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
type IData = {
    id?: number;
    title: string;
    url: string;
    image: string;
}
const data: IData[] = [
    {
        id: 1,
        title: 'Conlete - Mobile App',
        url: '#',
        image: '/images/service1.png'
    },
    {
        id: 2,
        title: 'NFT - Website',
        url: '#',
        image: '/images/service2.png'
    },
    {
        id: 3,
        title: 'Nursury - Website',
        url: '#',
        image: '/images/service3.png'
    },
    {
        id: 4,
        title: 'Conlete - Mobile App',
        url: '#',
        image: '/images/service1.png'
    },
    {
        id: 5,
        title: 'NFT - Website',
        url: '#',
        image: '/images/service2.png'
    },
    {
        id: 6,
        title: 'Nursury - Website',
        url: '#',
        image: '/images/service3.png'
    },

]
export default function Work() {
    return (
        <section
            id="work"
        >
            <div className="container mx-auto  lg:lg:w-7xl ">
                <div className="grid md:grid-cols-[1fr_1fr] gap-4 px-2 md:px-0   ">
                    <div className="relative">
                        <h1 className="text-3xl md:text-[5.0625rem] font-medium text-[#000] leading-[6.25rem]  ">
                            Our Latest Work
                        </h1>
                        <Button
                            variant={'ghost'}
                            className=" cursor-pointer text-base "

                        >
                            Our Case Studies <ArrowRight className="ml-2" />
                        </Button>
                        <img src={sphere_Matrix}
                            alt="sphere"
                            className="absolute -left-25 -bottom-20 h-[200px] w-[200px] hidden md:block "
                        />
                    </div>
                    <div className="w-full  max-w-5xl mx-auto px-4 pb-0 md:pb-16">
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
                                        className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                                    >
                                        <div className="p-1">
                                            <Card className="overflow-hidden border-0 shadow-none">
                                                <CardContent className="p-0">
                                                    <a
                                                        href={project.url}
                                                        className="group relative block aspect-video overflow-hidden h-[562px]  w-[250px] md:w-[325px]"
                                                    >
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className={"h-[500px] w-full object-cover transition-all duration-300 group-hover:scale-110"}
                                                        />
                                                        <div className={"absolute inset-0 bg-black/60 flex flex-col items-start justify-end p-6 opacity-100 transition-opacity duration-300 group-hover:opacity-100"}>
                                                            <h3 className="text-white text-xl font-semibold">
                                                                {project.title}
                                                            </h3>
                                                            <Button
                                                                variant={'ghost'}
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
            <div
                className="bg-gray-950 py-20"
            >
                11
            </div>
        </section>
    )
}
