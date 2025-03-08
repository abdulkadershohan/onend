import { icon, icon1, icon2, icon3, icon4, icon5 } from "@/assets/svg";

type IDate = {
    id?: number;
    title: string;
    description: string;
    icon: string;
}
const data: IDate[] = [
    {
        id: 1,
        title: 'Web Design and Development',
        description: 'Product agency that relates people relations',
        icon: icon
    },
    {
        id: 2,
        title: 'Branded Mobile Apps',
        description: 'Product agency that relates people relations',
        icon: icon1
    },
    {
        id: 3,
        title: 'Strategy and Planning',
        description: 'Product agency that relates people relations',
        icon: icon2
    },
    {
        id: 4,
        title: 'Photography and Video',
        description: 'Product agency that relates people relations',
        icon: icon3
    },
    {
        id: 5,
        title: 'Digital Marketing',
        description: 'Product agency that relates people relations',
        icon: icon4
    },
    {
        id: 6,
        title: 'AR and 3D Animation',
        description: 'Product agency that relates people relations',
        icon: icon5
    },

]
export default function Service() {
    return (
        <section
            id="service"
            className="bg-gray-950 py-20"
        >
            <div className="container mx-auto lg:w-7xl text-white ">
                <div className="text-center space-y-10 ">
                    <span className="uppercase">
                        Our Best Services
                    </span>
                    <p
                        className="mt-4 font-medium text-3xl md:text-6xl leading-10 md:leading-15 "
                    >
                        We provide end-to-end solutions
                    </p>
                </div>
                <div className="grid md:grid-cols-[1fr_1fr] gap-4 mt-10 px-4 md:px-0 ">
                    {
                        data.map((item) => (
                            <div key={item.id} className="mt-10">
                                <ServiceCard
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
const ServiceCard = ({ title, description, icon }: IDate) => {
    return (
        <div className="flex space-x-4">
            <div>
                <img src={icon} alt="icon" />
            </div>
            <div>
                <h1 className="text-2xl font-medium">{title}</h1>
                <p className="text-gray-500 font-medium text-lg">{description}</p>
            </div>
        </div>
    )
}
