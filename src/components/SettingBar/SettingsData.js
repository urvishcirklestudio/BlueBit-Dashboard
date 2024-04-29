import { RiHome3Line,RiLayout2Line } from "react-icons/ri";  
import { MdOutlineLightMode,MdLightMode } from "react-icons/md";
import defaultTheme from '../../assets/images/default.svg'
import borderTheme from '../../assets/images/border.svg'
import semiDarkTheme from '../../assets/images/semi-dark.svg'    
import ExpandedSidebar from '../../assets/images/expanded.svg'    
import CollapsedSidebar from '../../assets/images/collapsed.svg'    
import stickyNav from '../../assets/images/sticky.svg'    
import staticNav from '../../assets/images/static.svg'    
import hiddenNav from '../../assets/images/hidden.svg'    
import compactContent from '../../assets/images/compact.svg'    
import wideContent from '../../assets/images/wide.svg'    

const SettingsData = [
    { 
        badge:'Theming',
        setting:[
            {
                title:'Style (Mode)',
                option:[
                    {id:'lightTheme',name:'ThemeMode',value:'LightTheme',icon:MdOutlineLightMode,labelText:'Light'},
                    {id:'darkTheme',name:'ThemeMode',value:'DarkTheme',icon:MdLightMode,labelText:'Dark'}
                ]
            },
            {
                title:'Themes',
                option:[
                    {id:'defaultTheme', name:'ThemeView',value:'Default',image:defaultTheme,labelText:'Default'},
                    {id:'bordertTheme', name:'ThemeView',value:'Borderd',image:borderTheme,labelText:'Bordered'},
                    {id:'semiDarkTheme', name:'ThemeView',value:'SemiDark',image:semiDarkTheme,labelText:'Semi Dark'}
                ]
            },
            
        ]
    },
    { 
        badge:'Layout',
        setting:[
            {
                title:'Menu (Navigation)',
                option:[
                    {id:'expandedSidebar',name:'MenuType',value:'Expanded',image:ExpandedSidebar,labelText:'Expanded'},
                    {id:'collapsedSidebar',name:'MenuType',value:'Collapsed',image:CollapsedSidebar,labelText:'Collapsed'}
                ]
            },
            {
                title:'Navbar Type',
                option:[
                    {id:'stickyNav', name:'NavbarType',value:'Sticky',image:stickyNav,labelText:'Sticky'},
                    {id:'staticNav', name:'NavbarType',value:'Static',image:staticNav,labelText:'Static'},
                    {id:'hiddenNav', name:'NavbarType',value:'Hidden',image:hiddenNav,labelText:'Hidden'}
                ]
            },
            {
                title:'Container',
                option:[
                    {id:'compactContect', name:'Content',value:'Container',image:compactContent,labelText:'Compact'},
                    {id:'wideContent', name:'Content',value:'containeFluid',image:wideContent,labelText:'Wide'}, 
                ]
            },
        ]
 
    }
     
]

export default SettingsData