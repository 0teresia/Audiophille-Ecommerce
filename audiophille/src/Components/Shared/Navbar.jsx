import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <div className="w-[200px] h-[300px] md:w-[429px] md:h-[100px] flex flex-col lg:flex-row justify-between">
        <NavItem text={"home"}/>
        <NavItem text={"headphones"}/>
        <NavItem text={"speakers"}/>
        <NavItem text={"earphones"}/>
    </div>
  )
}

export default Navbar