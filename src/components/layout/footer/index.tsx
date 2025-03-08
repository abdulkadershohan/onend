import { facebook, instagram, twitter } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <section className="bg-gray-950 text-white">
            <div className="container mx-auto lg:w-7xl py-20 px-4 md:px-0">
                <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-4">
                    <div className="space-y-10 text-center">
                        <img src='/logo.png' alt="logo" className="w-32 h-auto" />
                        <div className="flex gap-4 ">
                            <img src={twitter} alt="twitter" className="w-6 h-6" />
                            <img src={facebook} alt="facebook" className="w-6 h-6" />
                            <img src={instagram} alt="instagram" className="w-6 h-6" />
                        </div>

                    </div>
                    <div>
                        <div className="grid space-y-4">
                            <a className="text-2xl font-medium leading-11 w-fit"
                                href="#work"
                            >Work</a>
                            <a className="text-2xl font-medium leading-11 w-fit"
                                href="#about"
                            >About</a>

                            <a className="text-2xl font-medium leading-11 w-fit"
                                href="#"
                            >careers</a>

                        </div>
                    </div>
                    <div>
                        <div className="grid space-y-4">
                            <a className="text-2xl font-medium leading-11 w-fit"
                                href="#"
                            >Service</a>
                            <a className="text-2xl font-medium leading-11 w-fit"
                                href="#"
                            >Blog</a>
                            <a className="text-2xl font-medium leading-11 w-fit"
                                href="#"
                            >Contact us</a>



                        </div>
                    </div>
                    <div className="space-y-10">

                        <p className="font-medium text-2xl md:text-3xl md:leading-10">
                            Subscribe to our Newsletter
                        </p>
                        <form className="flex space-y-2">
                            <Input
                                type="email"
                                required
                                placeholder="Enter email"
                                className="w-40 md:w-60 h-14 -mr-2 bg-white text-black rounded-sm placeholder:uppercase"
                            />
                            <Button
                                className="bg-[#B6F214] h-14 hover:bg-[#B6F714] rounded-sm rounded-l-none cursor-pointer  text-black"
                                type="submit" title="Submit">
                                Submit <ArrowRight className="ml-2" />
                            </Button>
                        </form>

                    </div>
                </div>

            </div>
            <hr className="bg-gray-50" />
            <div className="container mx-auto lg:w-7xl py-10 text-center">
                <p className="text-sm md:text-lg leading-4">
                    All Rights Reserved @ <span className="text-[#B6F214]">
                        Onend Solutions   </span>
                </p>
            </div>
        </section>
    )
}
