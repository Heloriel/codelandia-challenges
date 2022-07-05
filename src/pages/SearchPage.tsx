import { gql, useQuery } from "@apollo/client";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { Post } from "../components/Post/Post";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: {
    text: string;
  };
  published: string;
}

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  if (!searchParams.get("search")) {
    return <Navigate replace to={"/"} />;
  }

  const SEARCH_POSTS_QUERY = gql`
    query PostSearch($search: String) {
      codelandia01S(where: { _search: $search }, orderBy: publishedAt_DESC) {
        id
        slug
        title
        published
        content {
          text
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<{ codelandia01S: Post[] }>(SEARCH_POSTS_QUERY, {
    variables: {
      search: searchParams.get("search")
    }
  });

  if (loading) {
    return <Loading />;
  }

  console.log(data);

  if (!data || !data.codelandia01S || error || data.codelandia01S.length == 0) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <span className="text-gray-500 text-3xl italic mb-8">Nenhuma postagem encontrada.</span>
        <Link
          to={"/"}
          className="bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2 text-white font-bold rounded"
        >
          Página Inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-5 md:w-2/3 md:px-0 pt-24">
      {data.codelandia01S.map((post) => {
        return (
          <Post key={post.id} date={post.published} slug={post.slug} title={post.title}>
            {post.content.text}
          </Post>
        );
      })}
    </div>
  );
};
