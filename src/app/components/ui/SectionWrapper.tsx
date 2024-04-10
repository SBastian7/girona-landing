import NextSectionChevron from "./NextSectionChevron";

interface SectionWrapperProps {
    id: string;
    bgSrc: string;
    content: React.ReactNode;
    title?: string;
    nextSection?: string;
}

function SectionWrapper({ id, title, content, bgSrc, nextSection }: SectionWrapperProps) {
    return (
        <div id={id} className={`text-center py-10 md:py-24 ${bgSrc}`} style={{ minHeight: '100vh' }}>
            <div className="text-3xl md:text-4xl xl:text-5xl gothamFont uppercase font-extrabold">
                {title}
            </div>
            <div className="flex flex-col justify-center items-center h-full gap-6 w-full pt-24">
                <div className="md:text-xl xl:text-2xl md:w-4/6 lg:w-3/6 xl:w-7/12 flex flex-col gap-10">
                    {content}
                </div>
            </div>
            {nextSection && <NextSectionChevron target={`#${nextSection}`} />}
        </div>
    );
}

export default SectionWrapper;