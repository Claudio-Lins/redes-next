import Navbar from "../components/navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <div className="mx-auto py-[100px]">
            <Navbar />
            { children }
        </div>
    );
}
 
export default Layout;