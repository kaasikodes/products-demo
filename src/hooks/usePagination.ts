import { useCallback, useState } from "react";
import { TablePaginationConfig } from "antd/es/table";

const DEFAULT_PAGE_SIZE = 5;

export const usePagination = ({
  pageSize = DEFAULT_PAGE_SIZE,
}: { pageSize?: number } = {}) => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize,
    total: 0,
    showSizeChanger: false,
  });

  const resetPagination = useCallback(() => {
    setPagination((prev) => ({
      ...prev,
      current: 1,
    }));
  }, []);

  const offset =
    pagination.current && pagination.current !== 1
      ? (pagination.pageSize ?? DEFAULT_PAGE_SIZE) * (pagination.current - 1)
      : 0;
  const onChange = (newPagination: TablePaginationConfig | number) => {
    if (typeof newPagination === "number") {
      setPagination((prev) => ({
        ...prev,

        current: newPagination,
      }));
    } else {
      setPagination((prev) => ({
        ...prev,
        ...newPagination,
      }));
    }
  };
  return {
    onChange,
    pagination: {
      ...pagination,
      limit: pagination.pageSize,
      offset,
    },
    resetPagination,
  };
};
