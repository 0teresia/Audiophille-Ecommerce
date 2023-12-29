import { useContext } from "react";
import BringingYouTheBest from "../../Components/Shared/BringingYouTheBest";
import Footer from "../../Components/Shared/Footer/Footer";
import Header from "../../components/shared/Header";
import ShopNavbar from "../../Components/Shared/ShopNavbar";
import CategoryHeader from "./CategoryHeader";
import Context from "../../context/Context";
import ProductPreview from "./ProductPreview";
import Lightbox from "../../components/shared/ui/Lightbox";
import CartModal from "../../components/shared/CartModal";
import ModalShop from "../../Components/Shared/ModalShop";

const Category = () => {
  const { productList, modals } = useContext(Context)
  const { shop, cart, lightbox } = modals;

  return (
    <>
    <header className="w-full">
      <Header />
      <CategoryHeader />
      {cart && <CartModal />}
      {shop && <ModalShop />}
    </header>
    {lightbox && <Lightbox />}
    <main className="flex flex-col items-center w-[1050px] md:w-[689px] xl:w-[1110px]">
      <section className="flex flex-col items-center mb-[120px] xl:mb-[160px]">
        <div className="flex flex-col-reverse gap-[120px] xl:gap-[160px] my-[120px] xl:my-[160px]">
        {productList.map(productObject => {
          return <ProductPreview key={productObject.id} product={productObject}/>
        })}
        </div>
        <ShopNavbar />
        <BringingYouTheBest />
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Category
