interface NextSectionType {
    target: string;
}

function NextSectionChevron({target}: NextSectionType) {
    return (
        <a href={target} className="">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-12 h-12 lg:w-20 lg:h-20 animate-bounce mx-auto cursor-pointer relative -bottom-80"
                style={{ left: 0, bottom: -100, zIndex: 5 }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </a>
    );
}

export default NextSectionChevron;