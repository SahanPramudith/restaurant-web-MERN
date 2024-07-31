import Home from "../Componnent/Home/Home.jsx";
import About from "../Componnent/Aboute/Aboute.jsx";
import Contact from "../Componnent/Contact/Contact.jsx";
import Menue from "../Componnent/Menue/Menue.jsx"
import Pizza from "../Componnent/Menue/Pizza/Pizza.jsx";
import Burger from "../Componnent/Menue/Burger/Burger.jsx";
import Chicken from "../Componnent/Menue/Chicken/Chicken.jsx";
import SeaFood from "../Componnent/Menue/Seafood/SeaFood.jsx";
import Coffy from "../Componnent/Menue/Coffy/Coffy.jsx"


const rout = [
    {
        name: "Home",
        component: <Home />,
        path: '/home',
        key: 'home'

    },
    {
        name: "About",
        component: <About />,
        path: '/abou',
        key: 'abote'

    },
    {
        name: "Contact",
        component: <Contact />,
        path: '/contact',
        key: 'contact'

    },
    {
        component: <Pizza />,
        path: '/pizza',
        key: 'pizaa'

    },
    {
        component: <Burger />,
        path: '/burger',
        key: 'burger'

    },
    {
        component: <Chicken />,
        path: '/chicken',
        key: 'chicken'

    },
    {
        component: <SeaFood />,
        path: '/seaFood',
        key: 'chicken'

    },
    {
        component: <Coffy />,
        path: '/Coffy',
        key: 'chicken'

    }
]
export default rout;