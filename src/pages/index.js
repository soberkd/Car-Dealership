import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"

const links = [
  {
    text: "New",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Used",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of cars ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },

]

const samplePageLinks = [
  { text: "Home", url: "using-typescript" },
  { text: "Services", url: "using-ssr" },
  { text: "Blog", url: "using-dsg" },
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Here we are in our car dealership</h1>
      <p>proceding with moderation</p>
    </div>
  </Layout>
)
  // <Layout
  //   <div className={styles.textCenter}>
  //     <Navbar/>
  //     <StaticImage
  //       src="../images/example.png"
  //       loading="eager"
  //       width={64}
  //       quality={95}
  //       formats={["auto", "webp", "avif"]}
  //       alt=""
  //       style={{ marginBottom: `var(--space-3)` }}
  //     />
  //     <h1>
  //       Welcome to <b>AutoCar_KO!</b>
  //     </h1>
  //     <p className={styles.intro}>
  //       <b>Example pages:</b>{" "}
  //       {samplePageLinks.map((link, i) => (
  //         <React.Fragment key={link.url}>
  //           <Link to={link.url}>{link.text}</Link>
  //           {i !== samplePageLinks.length - 1 && <> · </>}
  //         </React.Fragment>
  //       ))}
  //       <br />
  //       We are now up to date
  //     </p>
  //   </div>
  //   <ul className={styles.list}>
  //     {links.map(link => (
  //       <li key={link.url} className={styles.listItem}>
  //         <a
  //           className={styles.listItemLink}
  //           href={`${link.url}${utmParameters}`}
  //         >
  //           {link.text} ↗
  //         </a>
  //         <p className={styles.listItemDescription}>{link.description}</p>
  //       </li>
  //     ))}
  //   </ul>
  //   {moreLinks.map((link, i) => (
  //     <React.Fragment key={link.url}>
  //       <a href={`${link.url}${utmParameters}`}>{link.text}</a>
  //       {i !== moreLinks.length - 1 && <> · </>}
  //     </React.Fragment>
  //   ))}
  // </Layout>

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
