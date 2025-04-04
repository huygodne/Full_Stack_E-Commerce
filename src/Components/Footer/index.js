import { LuShirt } from 'react-icons/lu';
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt /></span>
                        <span className="ml-2">Everyday fresh products</span>
                    </div>

                    <div class="col d-flex align-items-center">
                        <span> <TbTruckDelivery /> </span>
                        <span class="ml-2">Free delivery for order over $70</span>
                    </div>
                    <div class="col d-flex align-items-center">
                        <span ><TbRosetteDiscount /></span>
                        <span class="ml-2">Daily Mega Discounts</span>
                    </div>
                    <div class="col d-flex align-items-center">
                        <span ><LuShirt /></span>
                        <span class="ml-2">Best price on the market</span>
                    </div>
                </div>

                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>FRUIT & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BREAKFAST & DAIRY</h5>
                        <ul>
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Honey</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Yogurt</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>MEAT & SEAFOOD</h5>
                        <ul>
                            <li><Link to="#">Breakfast Sausage</Link></li>
                            <li><Link to="#">Dinner Sausage</Link></li>
                            <li><Link to="#">Beef</Link></li>
                            <li><Link to="#">Chicken</Link></li>
                            <li><Link to="#">Sliced Deli Meat</Link></li>
                            <li><Link to="#">Shrimp</Link></li>
                            <li><Link to="#">Wild Caught Fillets</Link></li>
                            <li><Link to="#">Crab and Shellfish</Link></li>
                            <li><Link to="#">Farm Raised Fillets</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BEVERAGES</h5>
                        <ul>
                            <li><Link to="#">Water</Link></li>
                            <li><Link to="#">Sparkling Water</Link></li>
                            <li><Link to="#">Soda & Pop</Link></li>
                            <li><Link to="#">Coffee</Link></li>
                            <li><Link to="#">Milk & Plant-Based Milk</Link></li>
                            <li><Link to="#">Tea & Kombucha</Link></li>
                            <li><Link to="#">Drink Boxes & Pouches</Link></li>
                            <li><Link to="#">Craft Beer</Link></li>
                            <li><Link to="#">Wine</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BREADS & BAKERY</h5>
                        <ul>
                            <li><Link to="#">Fresh Bread</Link></li>
                            <li><Link to="#">Bagels</Link></li>
                            <li><Link to="#">Pastries</Link></li>
                            <li><Link to="#">Croissants</Link></li>
                            <li><Link to="#">Specialty Cakes</Link></li>
                            <li><Link to="#">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="copyright mt-3 pt-3 pb-3 d-flex">
                    <p class="mb-0">Copyright 2024. All rights reserved.</p>
                    <ul class="list list-inline ml-auto mb-0">
                        <li class="list-inline-item">
                            <Link to="#"><FaFacebookF /></Link>
                        </li>
                        <li class="list-inline-item">
                            <Link to="#"><FaTwitter /></Link>
                        </li>
                        <li class="list-inline-item">
                            <Link to="#"><FaInstagram /></Link>
                        </li>
                    </ul>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
