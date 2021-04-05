import Navigation from './Navigation';

export interface HeaderProps {
  currPage: string;
}
 
const Header: React.FC<HeaderProps> = ({ currPage }: HeaderProps) => {
  return ( 
    <header>
      <Navigation currPage={ currPage } />
    </header>
  );
}
 
export default Header;