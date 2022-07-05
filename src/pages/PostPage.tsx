import { gql, useQuery } from "@apollo/client";
import { format } from "date-fns";
import pt_BR from "date-fns/locale/pt-BR";
import { Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/layout/Footer/Footer";
import { SmallHeader } from "../components/layout/Header/SmallHeader";
import { Loading } from "../components/Loading/Loading";

interface IGetPost {
  title: string;
  slug: string;
  published: Date;
  content: {
    text: string;
  };
}

export const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const GET_POST_QUERY = gql`
    query GetPost($slug: String) {
      codelandia01(where: { slug: $slug }) {
        title
        slug
        published
        content {
          text
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<{ codelandia01: IGetPost }>(GET_POST_QUERY, {
    variables: {
      slug: slug
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Navigate replace to="/" />;
  }

  if (!data || !data.codelandia01) {
    return <Navigate replace to="/" />;
  }

  const formatedDate = format(new Date(data.codelandia01.published), "dd'/'MM'/'yyyy", {
    locale: pt_BR
  });

  return (
    <div className="flex flex-col w-full h-screen">
      <SmallHeader />
      <div className="flex flex-col flex-1 items-center px-8 md:p-0">
        <section className="bg-white mt-8 w-full md:w-2/3 px-8 py-4 rounded">
          <h1 className="font-bold text-4xl text-center font-lexend">{data.codelandia01.title}</h1>
          <span className="mt-8 block font-lexend font-bold text-sm text-zinc-400">
            {formatedDate}
          </span>
          <div className="flex-1 font-lexend font-light mt-8 text-xl">
            <span>{data.codelandia01.content.text}</span>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
