import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"
import Layout from "../components/Layout"

const NotFound = () => {
  const meta = {}
  return (
    <Layout>
      <Head
        title="404"
        language=""
        meta={meta}
        description="Pagina niet gevonden. Page not found."
      />
      <div>
        <div style={{ float: "left", width: "50%" }}>
          <h2>Pagina niet gevonden</h2>
          <h3>Deze pagina bestaat niet!</h3>
          <p>
            U bent abusievelijk op deze pagina gestuit. Geen probleem! Klik op
            onderstaande link om u weer op de goede weg te krijgen.
          </p>
          <p>
            <Link to="/">Herstart</Link>
          </p>
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h2>Page not found</h2>
          <h3>This page does not exist!</h3>
          <p>
            You accidentally stumbled upon this page. No problem! Click on the
            link below to put you back on the right track.
          </p>
          <p>
            <Link to="/">Restart</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
