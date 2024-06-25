

import Login from "./Login/page"
import Cart from "./Cart/page";
import GridCart from "./GridCart/page";
import Hart from "./Hart/page";

import Dashboard from "./Dashboard/page";
import Category from "./Component/UI/Category/page";


export default function Home() {
  return (
    <main className="  flex flex-col items-center justify-center min-h-full min-w-full ">
      
          {/* {<Login />} */}
          {/* {<Cart />} */}
          {/* {<GridCart />} */}
          {<Hart />}
          {/* {<Dashboard />} */}
          {/* {<Category />} */}
          
      
    </main>
  );
}
