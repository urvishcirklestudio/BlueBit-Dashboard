import { RiHome3Line,RiLayout2Line } from "react-icons/ri";  
import { RiCircleLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const SidebarData = [
    { 
        title:'Dashboard',
        icon:RiHome3Line,
        childLinks:[
            {LinkName:'Analytics',routeLinks:'/'},
            {LinkName:'CRM',routeLinks:'crm'},
            {LinkName:'eCommerce',routeLinks:'ecommerce'},
            {LinkName:'Logistics',routeLinks:'logistics'},
            {LinkName:'Academy',routeLinks:'academy'},
        ]
    },
    { 
        Heading:'APP & PAGES',
        title:'Layouts',
        mainLinkName:'Email',
        mainRouteLinks:'email',
        icon:HiOutlineMail, 
        childLinks:[]
    }, { 
        title:'Layouts',
        mainLinkName:'Email',
        mainRouteLinks:'email',
        icon:HiOutlineMail, 
        childLinks:[]
    } 
]

export default SidebarData