import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = (props: { children: JSX.Element }) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout