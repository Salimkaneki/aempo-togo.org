interface FilterTagProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}


export default function FilterTag({title, isActive = false, onClick}: FilterTagProps) {
    return (
        <div className="flex justify-center">
            <button 
                onClick={onClick}
                className={`text-xl font-medium px-5 py-2 cursor-pointer transition-colors ${
                    isActive 
                        ? "bg-primary text-white" 
                        : "bg-primary-light text-primary hover:bg-[#D0E8D3]"
                }`}
            >
                {title}
            </button>
        </div>
    );
}