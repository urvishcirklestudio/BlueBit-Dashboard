 
import { useSelector } from 'react-redux';

// Define a function to get the isDark mode value
const useDarkmode = () => {
  // Use useSelector hook to access Redux store state
  const isDark = useSelector(state => state.settingReducer.ThemeMode);  
  return isDark;
}

export default useDarkmode;
