import { gql, useQuery } from "@apollo/client";
import ReactPaginate from "react-paginate";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

import "./Pagination.css";

interface IPageClicked {
  selected: number;
}

interface IPaginationProps {
  postsPerPage: number;
}

export const Pagination = ({ postsPerPage }: IPaginationProps) => {
  const GET_TOTAL_POSTS = gql`
    query GetPostsQuery {
      codelandia01S {
        id
      }
    }
  `;

  const { page, setPage } = useContext(PageContext);

  const { data } = useQuery<{ codelandia01S: {}[] }>(GET_TOTAL_POSTS);

  const totalPages = Math.ceil((data ? data.codelandia01S.length : 0) / postsPerPage);

  function handleClick(data: IPageClicked) {
    setPage(data.selected);
  }

  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={(data) => handleClick(data)}
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        className="pagination-container"
        activeLinkClassName="active-link"
        pageLinkClassName="page-link"
        previousLinkClassName={"previous-link"}
        nextLinkClassName="next-link"
        nextClassName={"next-list"}
        breakLinkClassName="break-link"
        forcePage={page}
        disabledClassName="disabled-pagination"
        disabledLinkClassName="disabled-pagination"
      />
    </>
  );
};
