import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { IGlobalContext, GlobalContext } from "../../lib/GlobalContextProvider";

import "./Pagination.css";

interface IPageClicked {
  selected: number;
}

interface IPaginationProps {
  itemsLength: number;
}

export const Pagination = (props: IPaginationProps) => {
  const totalPages = Math.ceil(props.itemsLength / 2);
  const global = useContext(GlobalContext);

  function handleClick(data: IPageClicked) {
    console.log(global.pageOffset);
    global.updateContext({ pageOffset: data.selected });
    console.log(global.pageOffset);
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
        previousLinkClassName="previous-link"
        nextLinkClassName="next-link"
        nextClassName="next-list"
        breakLinkClassName="break-link"
      />
    </>
  );
};
