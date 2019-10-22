import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title={"Home"}>
    <h1>Welcom home!</h1>
    <Link>
      <a>Go to home</a>
    </Link>
    Welcome to the home page
  </Layout>
);
