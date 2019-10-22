import Layout from "../components/Layout";

const ErrorPage = ({ statusCode }) => (
  <Layout title={"Error!"}>
    {(statusCode && "Could not load your user data: Status code ", statusCode)}
    <p>Couldn't get that page, sorry!</p>
  </Layout>
);

export default ErrorPage;
