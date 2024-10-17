// Results.tsx
import Image from "next/image";

const Results: React.FC = () => {
    return (
        <section id="Results" className="bg-gray-100 py-10">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
                <Image src="/1.png" alt="" width={150} height={150} />
                <Image src="/2.png" alt="" width={150} height={150} />
                <Image src="/3.png" alt="" width={150} height={150} />
                <Image src="/4.png" alt="" width={150} height={150} />
            </div>
        </section>
    );
};

export default Results;
