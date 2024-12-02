// src/hooks/usePagination.ts
import { useState } from 'react';

export const usePagination = (itemsPerPage: number, totalItems: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return { currentPage, nextPage, prevPage, totalPages };
};
