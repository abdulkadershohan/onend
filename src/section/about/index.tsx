import { Sphere_Bowl_Top_Quarter0002, Sphere_Bowl_Top_Quarter0003 } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section id='about'>
            <div className="container mx-auto lg:w-7xl -mt-70 space-y-10 relative ">
                <img src='/images/video.png' alt="video" className="w-full h-[802px] relative z-20 pb-10 " />
                <div className="text-center space-y-10 ">
                    <span className="uppercase ">
                        Who We Are
                    </span>
                    <p
                        className="font-medium text-3xl md:text-5xl leading-10 md:leading-15 mt-4"
                    >
                        Onend is a digital solution for a product agency
                        that relates people relations with products, story development, and other services.

                    </p>
                    <Button
                        className="bg-[#B6F214] hover:bg-[#B6F21470] text-[#000] rounded-none cursor-pointer md:h-16 md:w-63 "
                    >
                        Get a free consultation <ArrowRight className="ml-2" />
                    </Button>
                </div>
                <img src={Sphere_Bowl_Top_Quarter0003} alt="sphere"
                    className="absolute  -left-35 -bottom-26" />

                <img src={Sphere_Bowl_Top_Quarter0002} alt="sphere"
                    className="absolute  -right-20 -bottom-30  md:-bottom-80" />

            </div>


        </section>
    )
}
