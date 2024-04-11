interface ButtonTypes {
    title: string;
    link?: string;
    variant?: string;
    action?: () => void;
}

function Button({ title, link, variant, action }: ButtonTypes) {

    const handleClick = () => {
        action ? action() : window.open(link)
    }

    return (
        <div className={`bg-${variant ? variant : 'primary'} hover:bg-opacity-95 px-8 py-3 cursor-pointer montiliviFont text-center text-2xl md:text-3xl rounded-full`} onClick={handleClick}>
            {title}
        </div>
    );
}

export default Button;