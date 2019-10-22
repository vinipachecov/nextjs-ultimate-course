import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const About = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error />;
  }
  return (
    <Layout title={"About"}>
      <h1>About</h1>
      <Link href='/'>Go to home</Link>
      <p>A javascript programmer</p>
      <img src={user.avatar_url} alt='Vinicius' height='200px' />
    </Layout>
  );
};

About.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/vinipachecov");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  return { user: data, statusCode };
};

export default About;
