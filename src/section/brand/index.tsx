
const brand = ['/images/brand1.png', '/images/brand2.png', '/images/brand3.png', '/images/brand4.png', '/images/brand5.png']
export default function Brand() {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-20">
                {
                    brand.map((item, index) => (
                        <img src={item} alt="brand" key={index}
                            className="h-auto w-40 sm:w-20  lg:w-40"
                        />
                    ))
                }
            </div>
        </section>
    )
}
