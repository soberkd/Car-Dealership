import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>About</h1>
    <p>CarAuto_KO is a premier car dealership that prides itself on providing top-quality vehicles and 
      exceptional customer service. Our knowledgeable sales staff is here to help you find the perfect 
      car to fit your needs and budget. We offer a wide selection of new and pre-owned vehicles, 
      including popular makes and models from top manufacturers. In addition to our selection of cars, 
      we also offer financing options and a fully-equipped service center to help you keep your vehicle 
      running smoothly. Come visit us at CarAuto_KO and see why we are the go-to dealership for so many 
      car buyers in the area. Our commitment to excellence and customer satisfaction sets us apart from 
      the competition. Thank you for considering CarAuto_KO for all of your car-buying needs.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
