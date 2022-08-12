import { Outlet } from "../../node_modules/react-router-dom/index";
import TopHeader from '../components/TopHeader';

const Layout = ()=>{
  return(
    <main>
      <Outlet/>
    </main>
  )
}
export default Layout