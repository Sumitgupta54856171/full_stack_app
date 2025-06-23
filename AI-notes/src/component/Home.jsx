import Slide from "./Slide";
import CategoryGrid from "./Showcase";
import Middle from "./Middle";
import Footer from "./Footer";
function Home(){
    return(<>
    <div className="box-border grid grid-row[100px_100px_100px_100px] overflow-auto">
        <section>
        <Slide></Slide>
        </section>
        <section className="border-0 border-blue-200 gride-">
         <CategoryGrid/>
        </section>
        <section>
            <Middle></Middle>
        </section>
     <section>
   <Footer></Footer>
     </section>
    </div>
    </>)
}
export default Home;