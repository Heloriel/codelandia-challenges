import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { Loading } from "../components/Loading/Loading";
import { Pagination } from "../components/Pagination/Pagination";
import { Post } from "../components/Post/Post";
import { GlobalContext } from "../lib/GlobalContextProvider";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: {
    text: string;
  };
  published: string;
}

export const IndexPage = () => {
  const global = useContext(GlobalContext);

  const POSTS_PER_PAGE = 4;
  let offset = global.pageOffset;

  const GET_POSTS_QUERY = gql`
    query GetPostsQuery($postsPerPage: Int, $offset: Int) {
      codelandia01S(orderBy: published_DESC, first: $postsPerPage, skip: $offset) {
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

  const { loading, data } = useQuery<{ codelandia01S: Post[] }>(GET_POSTS_QUERY, {
    variables: {
      postsPerPage: 4,
      offset: 0
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.codelandia01S) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span className="text-gray-500 text-3xl italic">
          "Quando eu cheguei aqui tudo era mato..."
        </span>
      </div>
    );
  }

  return (
    <div className="w-full px-5 md:w-2/3 md:px-0 pt-24">
      <div>
        {data.codelandia01S.map((post) => {
          return (
            <Post key={post.id} date={post.published} slug={post.slug} title={post.title}>
              {post.content.text}
            </Post>
          );
        })}
      </div>
      <div className="flex flex-1 w-full min-h-[80px] max-h-[80px]">
        <Pagination itemsLength={data.codelandia01S.length} />
      </div>
    </div>
  );
};
