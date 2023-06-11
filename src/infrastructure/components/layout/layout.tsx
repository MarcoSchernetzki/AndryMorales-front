import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
};
