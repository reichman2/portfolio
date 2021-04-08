import { ReactChild, ReactChildren } from "react";


export interface CardProps {
  children?: string | ReactChild | ReactChildren | never | never[];
  className?: string;
}
 
const Card: React.FC<CardProps> = ({ children, className }: CardProps) => {
  return (
    <div className={`card rounded-md px-5 py-4 shadow-md transition-all hover:shadow-lg bg-white ${className}`}>
      { children }
    </div>
  );
}
 
export default Card;