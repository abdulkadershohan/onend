import { graphics, shape } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Banner() {
    return (
        <section
            id="banner"
            className="bg-[#B6F214] pb-60"
        >

            <div className='container  mx-auto '>
                <div className="grid md:grid-cols-[2fr_1fr] gap-4 py-20 px-2 md:px-0 ">
                    <div className="space-y-10 relative text-center md:text-start " >
                        <h1
                            className="text-4xl md:text-[5.0625rem] font-medium text-[#000] leading-10 md:leading-[6.25rem] "
                        >
                            Let's build products together for life
                        </h1>
                        <div>
                            <span
                                className="font-normal text-xl md:text-3xl leading-10"
                            >Onend is a digital solution for a product agency that <br />relates people relations, story development.</span>
                        </div>
                        <Button
                            variant={'outline'}
                            className="rounded-none cursor-pointer md:h-16 md:w-63 "
                        >
                            Get Started <ArrowRight className="ml-2" />
                        </Button>
                        <img src={shape} alt="shape" className="absolute right-38 -bottom-10 hidden md:block" />
                        <img src={shape} alt="shape" className="absolute -right-2 -bottom-2  md:hidden h-16" />
                        <img src={graphics} alt="graphics" className="absolute -left-55 -bottom-95 h-[658px] w-[658px] hidden md:block z-10" />
                        <img src={graphics} alt="graphics" className="absolute -left-12 -bottom-10 h-[200px] w-[200px] md:hidden" />
                    </div>
                    <img src="/images/banner.png" alt="banner" className="md:w-[515px] md:h-[394px] z-10 " />

                </div>
            </div>


        </section>


    )
}
