

import Login from "./Login/page"
import Dashboard from "./Dashboard/page";
import Category from "./Component/UI/Category/page";


export default function Home() {
  return (
    <main className=" container flex flex-col  items-center justify-center min-h-full min-w-full ">
      
          {<Login />}
          {/* {<Dashboard />} */}
          {/* {<Category />} */}
          
      
    </main>
  );
}
