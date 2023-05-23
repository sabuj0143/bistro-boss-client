import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'

const Recommends = () => {
    return (
        <section className="lilita my-16">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid pt-4 md:grid-cols-3">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[300px]" src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-center items-center p-5">
                        <h2 className="card-title">Salad</h2>
                        <p className="py-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div>
                            <button className="btn btn-outline btn-warning border-0 border-b-4">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[300px]" src={img2} alt="Shoes" /></figure>
                    <div className="card-body text-center items-center p-5">
                        <h2 className="card-title">Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div>
                            <button className="btn btn-outline btn-warning border-0 border-b-4">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[300px]" src={img3} alt="Shoes" /></figure>
                    <div className="card-body text-center items-center p-5">
                        <h2 className="card-title">Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div>
                            <button className="btn btn-outline btn-warning border-0 border-b-4">Add to cart</button>
                        </div>
                    </div>
                </div>
               
            </div>

        </section>
    );
};

export default Recommends;