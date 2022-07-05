import { gql, useQuery } from "@apollo/client";
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

export const IndexPage = () => {
  const GET_POSTS_QUERY = gql`
    query GetPostsQuery {
      codelandia01S(orderBy: published_DESC) {
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

  const { loading, data } = useQuery<{ codelandia01S: Post[] }>(GET_POSTS_QUERY);

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
