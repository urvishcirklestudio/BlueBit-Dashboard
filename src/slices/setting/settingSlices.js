import {  createSlice } from "@reduxjs/toolkit";
import themeConfigData from "../../configs/themeConfigData";

const getlocaldata = (localData,defaultsval) => {
    let themevalue = localStorage.getItem(localData);
    return themevalue ? JSON.parse(themevalue):defaultsval; 
};
 
const setLocalSetting=(name,val)=>{ 
    window.localStorage.setItem(name,JSON.stringify(val));
}
const {settings}= themeConfigData; 
const initialState ={ 
    ThemeMode: getlocaldata('ThemeMode',settings.ThemeMode), /*LightTheme,DarkTheme*/
    ThemeView:getlocaldata('ThemeView',settings.ThemeView),/*Default,Borderd,SemiDark*/
 
    MenuType:getlocaldata('MenuType',settings.MenuType), /*Expanded,Collapsed */
    NavbarType:getlocaldata('NavbarType',settings.NavbarType),/*Sticky, Static, Hidden */
    Content:getlocaldata('Content',settings.Content),/*Container, ContainerFluid*/
    Direction:getlocaldata('Direction',settings.Direction),/*LTR,RTL */    
    showNavMenu:false
}
 
const settingSlice = createSlice({
    name:'sattings',
    initialState,
    reducers:{
        changeThemeMode:(state,action) =>{
            state.ThemeMode =action.payload
        },
        changeMenuType:(state,action) =>{  
            state.MenuType = !state.MenuType;
        },
        changeSettings:(state,action)=>{ 
            const {name,value} = action.payload;
            // console.log(name,value);
            switch (name) {
                case 'ThemeMode':
                    state.ThemeMode=value;
                    setLocalSetting('ThemeMode',value);

                    break;
                case 'ThemeView':
                    state.ThemeView=value;
                    setLocalSetting('ThemeView',value);
                    break;
                case 'MenuType':
                    state.MenuType=value;
                    setLocalSetting('MenuType',value);
                    break;
                case 'NavbarType':
                    state.NavbarType=value;
                    setLocalSetting('NavbarType',value);
                    break;
                case 'Content':
                    state.Content=value;
                    setLocalSetting('Content',value);
                    break;
                default:
                    return state;
            };
            
        },
        resetSettings:(state,action)=>{  
            state.ThemeMode= 'LightTheme', 
            state.ThemeView='Default', 
            state.MenuType='Expanded', 
            state.NavbarType='Sticky',
            state.Content='Container',
            state.Direction='LTR';
            setLocalSetting('ThemeMode','LightTheme');
            setLocalSetting('ThemeView','Default');
            setLocalSetting('MenuType','Expanded');
            setLocalSetting('NavbarType','Sticky');
            setLocalSetting('Content','Container');
            setLocalSetting('Direction','LTR');
        }, 
    }
})

export const {changeTheme,changeMenuType,changeSettings,resetSettings,} = settingSlice.actions;
export default settingSlice.reducer