import { BooksProvider } from "./Books";

const Providers = ({children}) => {
    return(
        <BooksProvider>
            {children}
        </BooksProvider>
       
    )
}
export default Providers;