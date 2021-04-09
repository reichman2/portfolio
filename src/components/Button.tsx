import { ReactChild, ReactChildren } from "react";


export interface ButtonProps {
    children?: string | ReactChild | ReactChildren | never | never[];
    className?: string;
}
 
const Button: React.FC<ButtonProps> = ({ children, className="" }: ButtonProps) => {
    return (
        <span className={`
            inline-block
            cursor-pointer
            px-4 py-2
            leading-none
            text-center
            border-teal-600
            text-teal-600
            hover:bg-teal-600
            hover:text-white
            border-1.5
            transition-all
            font-normal ${className}
            `}>{ children }</span>
    );
}
 
export default Button;