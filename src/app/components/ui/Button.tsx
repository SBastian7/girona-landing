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
        <div className={`bg-${variant ? variant : 'primary'} hover:bg-opacity-95 px-6 py-3 cursor-pointer montiliviFont text-3xl`} onClick={handleClick}>
            {title}
        </div>
    );
}

export default Button;