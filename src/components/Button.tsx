import { ReactChild, ReactChildren } from "react";


export interface ButtonProps {
    children?: string | ReactChild | ReactChildren | never | never[];
    textColor?: string; // format: <color>-<lvl>
    hoverTextColor?: string; 
    bgColor: string; // format: <color>-<lvl>
    className?: string;
}
 
const Button: React.FC<ButtonProps> = ({ children, hoverTextColor='white', bgColor, textColor=bgColor, className="" }: ButtonProps) => {
    return (
        <span className={`
            inline-block
            cursor-pointer
            px-4 py-2
            leading-none
            text-center
            border-${bgColor}
            text-${textColor}
            hover:bg-${bgColor}
            hover:text-${hoverTextColor}
            border-1.5
            transition-all
            font-normal ${className}
            `}>{ children }</span>
    );
}
 
export default Button;