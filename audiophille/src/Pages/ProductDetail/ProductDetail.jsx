import { useContext } from "react";
import BringingYouTheBest from "../../Components/Shared/BringingYouTheBest.jsx";
import Footer from "../../Components/Shared/Footer/Footer.jsx";
import Header from "../../components/shared/Header";
import ShopNavbar from "../../Components/Shared/ShopNavbar.jsx";
import Context from "../../context/Context";
import Product from "./Product";
import Features from "./ui/Features";
import InTheBox from "./UI/InTheBox.jsx";
import Gallery from "./Gallery.jsx";
import MayAlsoLike from "./MayAlsoLike";
import Lightbox from "../../components/shared/ui/Lightbox";
import CartModal from "../../components/shared/CartModal";
import ModalShop from "../../Components/Shared/ModalShop.jsx";
import GoBack from "../../components/shared/ui/GoBack";

const ProductDetail = () => {
  const { product, modals } = useContext(Context);  
  const { features, gallery, productIncludes, others } = product;
  const { shop, cart, lightbox } = modals;

  return (
    <>
    <header className="w-full">
      <Header />
    </header>
    {cart && <CartModal />}
    {shop && <ModalShop />}
    {lightbox && <Lightbox />}
    <main className="flex flex-col items-center w-full xl:w-[1110px]">
      <section className="flex flex-col items-center mb-[120px] xl:mb-[160px]">
        <GoBack />
        <div className="flex flex-col gap-[120px] xl:gap-[160px] my-[120px] xl:my-[160px] ml-72">
        <Product product={product} imagePath={product.imagePath} />
          <div className="flex flex-row xl:flex-row">
          <Features features={features} />
          <InTheBox productIncludes={productIncludes} />
          </div>
          <Gallery gallery={gallery}/>
          <MayAlsoLike others={others}/>
        </div>
        <ShopNavbar />
        <BringingYouTheBest />
      </section>
    </main>
    <Footer />
    </>
  )
}

export default ProductDetail