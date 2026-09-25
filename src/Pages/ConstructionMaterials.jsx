import Header from '../Components/Header'
import FooterTop from '../Components/FooterTop';
import Footer from '../Components/Footer';

import Cement from '../images/Cement & Concrete.jpg'
import Steel from '../images/Steel & TMT.jpg'
import Bricks from '../images/Bricks & Blocks.jpg'
import Sand from '../images/Sand & Aggregates.jpg'
import Pipes from '../images/Pipes & Fitting.jpg'
import Hardware from '../images/Hardware & Tools.avif'

const ConstructionMaterials = () => {

  const constructionCategories = [
    {
      title: "Cement & Concrete",
      products: "15 Products",
      description: "Quality cement and concrete materials for strong construction.",
      image: Cement,
    },
    {
      title: "Steel & TMT",
      products: "12 Products",
      description: "Strong and durable steel products for every project.",
      image: Steel,
    },
    {
      title: "Bricks & Blocks",
      products: "10 Products",
      description: "Reliable bricks and blocks for walls and structures.",
      image: Bricks,
    },
    {
      title: "Sand & Aggregates",
      products: "8 Products",
      description: "Quality sand and aggregates for construction work.",
      image: Sand,
    },
    {
      title: "Pipes & Fittings",
      products: "18 Products",
      description: "Durable pipes and fittings for plumbing and infrastructure.",
      image: Pipes,
    },
    {
      title: "Hardware & Tools",
      products: "25 Products",
      description: "Essential tools and hardware for construction projects.",
      image: Hardware,
    },
  ];
  return (
    <>
      <Header />

      <section className="w-full py-12 sm:py-16 lg:py-20 bg-[var(--bg-primary2)] mt-20">

        <div className="w-full max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center mb-8 sm:mb-10 lg:mb-12">

            <p className="text-sm sm:text-base font-medium text-[var(--bg-primary)] mb-2">
              Build With Confidence
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Construction Materials
            </h2>

            <p className="max-w-[680px] mx-auto mt-3 text-sm sm:text-base text-gray-500 leading-6">
              Reliable construction materials for residential, commercial and
              infrastructure projects.
            </p>

          </div>


          {/* Construction Cards */}

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-7 max-w-[1000px] mx-auto">

            {constructionCategories.map((item, index) => (

              <div
                key={index}
                className="group relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                {/* Image */}

                <div className="relative w-full h-[160px] sm:h-[250px] overflow-hidden bg-gray-100">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5">

                    <span className="text-white text-xs sm:text-sm font-medium">
                      {item.products}
                    </span>

                  </div>

                </div>


                {/* Content */}

                <div className="p-3 sm:p-5">

                  <h3 className="text-sm sm:text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="hidden sm:block mt-2 text-sm text-gray-500 leading-5">
                    {item.description}
                  </p>

                  <button
                    className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-[var(--bg-primary)]"
                  >
                    Explore Materials

                    <span className="ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* <FooterTop /> */}
      <Footer />
    </>
  )
}

export default ConstructionMaterials