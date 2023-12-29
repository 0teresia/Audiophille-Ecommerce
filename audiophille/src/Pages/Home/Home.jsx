import { useContext } from "react"
import Header from "../../components/shared/Header"
import BringingYouTheBest from "../../Components/Shared/BringingYouTheBest"
import ShopNavbar from "../../Components/Shared/ShopNavbar"
import BlackUnderHeader from "./BlackUnderHeader"
import SampleProducts from "./SampleProducts"
import Footer from "../../Components/Shared/Footer/Footer"
import Lightbox from "../../components/shared/ui/Lightbox"
import Context from "../../context/Context"
import CartModal from "../../components/shared/CartModal"
import ModalShop from "../../Components/Shared/ModalShop"

const Home = () => {
  const { modals } = useContext(Context);
  const { shop, cart, lightbox } = modals;

  return (
    <> 
    <header className="relative w-full">
        <Header /> 
        <BlackUnderHeader />
        {cart && <CartModal />}
        {shop && <ModalShop />}
    </header>
    {lightbox && <Lightbox />}
    <main className="flex justify-center items-center w-full h-full">
        <div className="w-full md:w-[689px] xl:w-[1110px]">
          <section className="flex flex-col items-center mb-[120px] xl:mb-[160px]">
            <ShopNavbar />
            <SampleProducts />
            <BringingYouTheBest />
          </section>
        </div>
      </main>
    <Footer />
    </>
  )
}

export default Home