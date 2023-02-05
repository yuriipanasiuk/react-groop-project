import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ currentPage, totalPages, pages }) {
  const handlePageClick = e => {
    const page = e.target.innerText;
    currentPage(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        shape="rounded"
        onClick={handlePageClick}
        color="warning"
        page={Number(pages) || 1}
      />
    </Stack>
  );
}
