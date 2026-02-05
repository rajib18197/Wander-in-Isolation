"use client";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  Search,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  Filter,
  X,
  Download,
  Settings,
} from "lucide-react";

// ============================================================================
// STYLED COMPONENTS - Separation of presentation logic
// ============================================================================

const TableContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 250px;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: black;
  font-size: 14px;
  transition: all 0.2s;
  color: "black";

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 18px;
  height: 18px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  background: white;
  color: black;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  &:active {
    background: #f3f4f6;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  max-height: ${(props) => props.maxHeight || "600px"};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const Thead = styled.thead`
  background: #f9fafb;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
  cursor: ${(props) => (props.sortable ? "pointer" : "default")};
  user-select: none;
  white-space: nowrap;
  position: relative;

  &:hover {
    background: ${(props) => (props.sortable ? "#f3f4f6" : "#f9fafb")};
  }
`;

const ThContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const SortIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? "#3b82f6" : "#9ca3af")};
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background 0.15s;

  &:hover {
    background: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Td = styled.td`
  padding: 12px 16px;
  color: #1f2937;
`;

const FilterPanel = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;

  display: ${(props) => (props.show ? "block" : "none")};
`;

const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
`;

const FilterSelect = styled.select`
  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  min-width: 150px;
  color: black;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const FilterInput = styled.input`
  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  color: black;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const FilterChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #3b82f6;
  color: white;
  border-radius: 16px;
  font-size: 13px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const RemoveFilterButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;

  &:hover {
    color: #dbeafe;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const TableFooter = styled.div`
  padding: 12px 20px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #6b7280;
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const PageButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  background: ${(props) => (props.active ? "#3b82f6" : "white")};
  color: ${(props) => (props.active ? "white" : "#374151")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${(props) => (props.active ? "#2563eb" : "#f9fafb")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
`;

// ============================================================================
// UTILITY FUNCTIONS - Single Responsibility Principle
// ============================================================================

/**
 * Sorts data based on column configuration
 * @param {Array} data - Array of objects to sort
 * @param {string} sortColumn - Column key to sort by
 * @param {string} sortDirection - 'asc' or 'desc'
 * @param {Object} columnConfig - Column configuration with custom sort functions
 */
const sortData = (data, sortColumn, sortDirection, columnConfig) => {
  if (!sortColumn) return data;

  const column = columnConfig.find((col) => col.key === sortColumn);

  return [...data].sort((a, b) => {
    let aVal = a[sortColumn];
    let bVal = b[sortColumn];

    // Use custom comparator if provided (supports complex sorting logic)
    if (column?.sortComparator) {
      return sortDirection === "asc"
        ? column.sortComparator(aVal, bVal)
        : column.sortComparator(bVal, aVal);
    }

    // Default comparison logic
    if (typeof aVal === "string") aVal = aVal.toLowerCase();
    if (typeof bVal === "string") bVal = bVal.toLowerCase();

    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
};

/**
 * Filters data based on search term and active filters
 * Strategy Pattern - allows different filtering strategies
 */
const filterData = (data, searchTerm, activeFilters, columns) => {
  let filtered = data;

  // Global search across searchable columns
  if (searchTerm) {
    filtered = filtered.filter((row) =>
      columns.some((col) => {
        if (col.searchable === false) return false;
        const value = String(row[col.key] || "").toLowerCase();
        return value.includes(searchTerm.toLowerCase());
      })
    );
  }

  // Apply column-specific filters
  activeFilters.forEach((filter) => {
    filtered = filtered.filter((row) => {
      const value = String(row[filter.column] || "").toLowerCase();
      const filterValue = filter.value.toLowerCase();

      switch (filter.operator) {
        case "equals":
          return value === filterValue;
        case "contains":
          return value.includes(filterValue);
        case "startsWith":
          return value.startsWith(filterValue);
        case "endsWith":
          return value.endsWith(filterValue);
        case "notEquals":
          return value !== filterValue;
        default:
          return true;
      }
    });
  });

  return filtered;
};

/**
 * Paginates data array
 * Pure function - no side effects
 */
const paginateData = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
};

/**
 * Exports data to CSV format
 * Utility function for data export
 */
const exportToCSV = (data, columns, filename = "export.csv") => {
  const headers = columns.map((col) => col.label).join(",");
  const rows = data.map((row) =>
    columns
      .map((col) => {
        const value = row[col.key];
        // Escape quotes and wrap in quotes if contains comma
        const escaped = String(value || "").replace(/"/g, '""');
        return escaped.includes(",") ? `"${escaped}"` : escaped;
      })
      .join(",")
  );

  const csv = [headers, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

// ============================================================================
// CUSTOM HOOKS - Encapsulation of complex logic
// ============================================================================

/**
 * Custom hook for table state management
 * Separates state logic from presentation (Single Responsibility)
 */
const useTableState = (initialData, columns, options = {}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState(
    options.defaultSortColumn || null
  );
  const [sortDirection, setSortDirection] = useState(
    options.defaultSortDirection || "asc"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(options.pageSize || 10);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  // Memoized processed data - prevents unnecessary recalculations
  const processedData = useMemo(() => {
    let result = initialData;
    result = filterData(result, searchTerm, activeFilters, columns);
    result = sortData(result, sortColumn, sortDirection, columns);
    return result;
  }, [
    initialData,
    searchTerm,
    activeFilters,
    sortColumn,
    sortDirection,
    columns,
  ]);

  // Memoized pagination data
  const paginatedData = useMemo(() => {
    if (options.pagination === false) return processedData;
    return paginateData(processedData, currentPage, pageSize);
  }, [processedData, currentPage, pageSize, options.pagination]);

  const totalPages = Math.ceil(processedData.length / pageSize);

  // Reset to first page when filters change (better UX)
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeFilters]);

  return {
    searchTerm,
    setSearchTerm,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    activeFilters,
    setActiveFilters,
    showFilterPanel,
    setShowFilterPanel,
    processedData,
    paginatedData,
    totalPages,
  };
};

// ============================================================================
// SUB-COMPONENTS - Composition Pattern
// ============================================================================

/**
 * TableHeaderComponent - Handles search, filters, and actions
 * Composition: breaks down complex UI into manageable pieces
 */
const TableHeaderComponent = ({
  searchTerm,
  onSearchChange,
  onToggleFilter,
  onExport,
  showFilterPanel,
}) => (
  <TableHeader>
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="Search across all columns..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </SearchContainer>
    <ActionButtons>
      <Button onClick={onToggleFilter}>
        <Filter />
        {showFilterPanel ? "Hide" : "Show"} Filters
      </Button>
      <Button onClick={onExport}>
        <Download />
        Export CSV
      </Button>
    </ActionButtons>
  </TableHeader>
);

/**
 * FilterPanelComponent - Advanced filtering interface
 * Separated for maintainability
 */
const FilterPanelComponent = ({
  show,
  columns,
  activeFilters,
  onAddFilter,
  onRemoveFilter,
}) => {
  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("contains");
  const [filterValue, setFilterValue] = useState("");

  const operators = [
    { value: "contains", label: "Contains" },
    { value: "equals", label: "Equals" },
    { value: "startsWith", label: "Starts With" },
    { value: "endsWith", label: "Ends With" },
    { value: "notEquals", label: "Not Equals" },
  ];

  const handleAddFilter = () => {
    if (selectedColumn && filterValue) {
      onAddFilter({
        column: selectedColumn,
        operator: selectedOperator,
        value: filterValue,
      });
      setFilterValue("");
    }
  };

  return (
    <FilterPanel show={show}>
      <FilterRow>
        <FilterSelect
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
        >
          <option value="">Select Column</option>
          {columns
            .filter((col) => col.filterable !== false)
            .map((col) => (
              <option key={col.key} value={col.key}>
                {col.label}
              </option>
            ))}
        </FilterSelect>
        <FilterSelect
          value={selectedOperator}
          onChange={(e) => setSelectedOperator(e.target.value)}
        >
          {operators.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </FilterSelect>
        <FilterInput
          type="text"
          placeholder="Filter value..."
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddFilter()}
        />
        <Button onClick={handleAddFilter}>Add Filter</Button>
      </FilterRow>

      {activeFilters.length > 0 && (
        <div>
          {activeFilters.map((filter, index) => (
            <FilterChip key={index}>
              {columns.find((c) => c.key === filter.column)?.label}{" "}
              {filter.operator} "{filter.value}"
              <RemoveFilterButton onClick={() => onRemoveFilter(index)}>
                <X />
              </RemoveFilterButton>
            </FilterChip>
          ))}
        </div>
      )}
    </FilterPanel>
  );
};

/**
 * TableHeaderRow - Renders sortable column headers
 * Encapsulates sorting UI logic
 */
const TableHeaderRow = ({ columns, sortColumn, sortDirection, onSort }) => {
  const handleSort = (columnKey, sortable) => {
    if (!sortable) return;

    if (sortColumn === columnKey) {
      // Toggle direction or clear sort
      if (sortDirection === "asc") {
        onSort(columnKey, "desc");
      } else {
        onSort(null, "asc"); // Clear sort
      }
    } else {
      onSort(columnKey, "asc");
    }
  };

  return (
    <Thead>
      <tr>
        {columns.map((column) => {
          const sortable = column.sortable !== false;
          const isSorted = sortColumn === column.key;

          return (
            <Th
              key={column.key}
              sortable={sortable}
              onClick={() => handleSort(column.key, sortable)}
            >
              <ThContent>
                <span>{column.label}</span>
                {sortable && (
                  <SortIcon active={isSorted}>
                    {!isSorted && <ChevronsUpDown size={16} />}
                    {isSorted && sortDirection === "asc" && (
                      <ChevronUp size={16} />
                    )}
                    {isSorted && sortDirection === "desc" && (
                      <ChevronDown size={16} />
                    )}
                  </SortIcon>
                )}
              </ThContent>
            </Th>
          );
        })}
      </tr>
    </Thead>
  );
};

/**
 * TableBody - Renders data rows with custom cell rendering
 * Supports custom render functions per column
 */
const TableBody = ({ data, columns }) => {
  if (data.length === 0) {
    return (
      <Tbody>
        <tr>
          <Td colSpan={columns.length}>
            <EmptyState>No data to display</EmptyState>
          </Td>
        </tr>
      </Tbody>
    );
  }

  return (
    <Tbody>
      {data.map((row, rowIndex) => (
        <Tr key={rowIndex}>
          {columns.map((column) => (
            <Td key={column.key}>
              {/* Custom cell renderer pattern - allows flexible cell content */}
              {column.render
                ? column.render(row[column.key], row)
                : row[column.key]}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

/**
 * Pagination Component - Handles page navigation
 * Separated for reusability across different table instances
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
}) => {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Smart page number generation (shows limited page buttons)
  const getPageNumbers = () => {
    const pages = [];
    const maxButtons = 5;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first page
      pages.push(1);

      // Calculate range around current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        end = 3;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 2;
      }

      if (start > 2) pages.push("...");

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) pages.push("...");

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <TableFooter>
      <div>
        Showing {startItem} to {endItem} of {totalItems} entries
      </div>
      <PaginationContainer>
        <PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>

        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} style={{ padding: "6px" }}>
              ...
            </span>
          ) : (
            <PageButton
              key={page}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageButton>
          )
        )}

        <PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </PaginationContainer>
    </TableFooter>
  );
};

// ============================================================================
// MAIN TABLE COMPONENT - Composition of all sub-components
// ============================================================================

/**
 * DataTable - Main component using composition pattern
 * Props:
 * - data: Array of objects to display
 * - columns: Array of column configurations
 *   - key: string (required) - data field name
 *   - label: string (required) - column header
 *   - sortable: boolean (default: true)
 *   - filterable: boolean (default: true)
 *   - searchable: boolean (default: true)
 *   - render: function(value, row) - custom cell renderer
 *   - sortComparator: function(a, b) - custom sort function
 * - options: Configuration object
 *   - pagination: boolean (default: true)
 *   - pageSize: number (default: 10)
 *   - defaultSortColumn: string
 *   - defaultSortDirection: 'asc' | 'desc'
 *   - maxHeight: string (default: '600px')
 */
const DataTable = ({ data, columns, options = {} }) => {
  // Use custom hook for state management (separation of concerns)
  const {
    searchTerm,
    setSearchTerm,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
    currentPage,
    setCurrentPage,
    activeFilters,
    setActiveFilters,
    showFilterPanel,
    setShowFilterPanel,
    processedData,
    paginatedData,
    totalPages,
  } = useTableState(data, columns, options);

  // Event handlers using useCallback to prevent unnecessary re-renders
  const handleSort = useCallback((column, direction) => {
    setSortColumn(column);
    setSortDirection(direction);
  }, []);

  const handleAddFilter = useCallback((filter) => {
    setActiveFilters((prev) => [...prev, filter]);
  }, []);

  const handleRemoveFilter = useCallback((index) => {
    setActiveFilters((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleExport = useCallback(() => {
    exportToCSV(processedData, columns, "table-export.csv");
  }, [processedData, columns]);

  return (
    <TableContainer>
      <TableHeaderComponent
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onToggleFilter={() => setShowFilterPanel(!showFilterPanel)}
        onExport={handleExport}
        showFilterPanel={showFilterPanel}
      />

      <FilterPanelComponent
        show={showFilterPanel}
        columns={columns}
        activeFilters={activeFilters}
        onAddFilter={handleAddFilter}
        onRemoveFilter={handleRemoveFilter}
      />

      <TableWrapper maxHeight={options.maxHeight}>
        <StyledTable>
          <TableHeaderRow
            columns={columns}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <TableBody
            data={options.pagination === false ? processedData : paginatedData}
            columns={columns}
          />
        </StyledTable>
      </TableWrapper>

      {options.pagination !== false && processedData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={processedData.length}
          pageSize={options.pageSize || 10}
        />
      )}
    </TableContainer>
  );
};

// ============================================================================
// DEMO IMPLEMENTATION
// ============================================================================

const Demo = () => {
  // Sample data for demonstration
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
      department: "Engineering",
      salary: 85000,
      joinDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Designer",
      department: "Design",
      salary: 75000,
      joinDate: "2021-06-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
      department: "Engineering",
      salary: 95000,
      joinDate: "2020-03-10",
      status: "Active",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "Developer",
      department: "Engineering",
      salary: 82000,
      joinDate: "2022-08-01",
      status: "Active",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Designer",
      department: "Design",
      salary: 72000,
      joinDate: "2023-02-14",
      status: "Active",
    },
    {
      id: 6,
      name: "Diana Prince",
      email: "diana@example.com",
      role: "Product Manager",
      department: "Product",
      salary: 105000,
      joinDate: "2019-11-30",
      status: "Active",
    },
    {
      id: 7,
      name: "Evan Davis",
      email: "evan@example.com",
      role: "Developer",
      department: "Engineering",
      salary: 88000,
      joinDate: "2021-09-15",
      status: "On Leave",
    },
    {
      id: 8,
      name: "Fiona Green",
      email: "fiona@example.com",
      role: "HR Manager",
      department: "HR",
      salary: 78000,
      joinDate: "2020-07-22",
      status: "Active",
    },
    {
      id: 9,
      name: "George Wilson",
      email: "george@example.com",
      role: "DevOps Engineer",
      department: "Engineering",
      salary: 92000,
      joinDate: "2021-04-18",
      status: "Active",
    },
    {
      id: 10,
      name: "Hannah Lee",
      email: "hannah@example.com",
      role: "Designer",
      department: "Design",
      salary: 76000,
      joinDate: "2022-12-05",
      status: "Active",
    },
    {
      id: 11,
      name: "Ian Martinez",
      email: "ian@example.com",
      role: "Developer",
      department: "Engineering",
      salary: 84000,
      joinDate: "2023-01-20",
      status: "Active",
    },
    {
      id: 12,
      name: "Julia Anderson",
      email: "julia@example.com",
      role: "QA Engineer",
      department: "Engineering",
      salary: 70000,
      joinDate: "2022-05-10",
      status: "Active",
    },
  ];

  // Column configuration with custom renderers and sort functions
  const columns = [
    {
      key: "id",
      label: "ID",
      sortable: true,
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      // Custom renderer for styling
      render: (value) => <strong>{value}</strong>,
    },
    {
      key: "email",
      label: "Email",
      sortable: true,
      render: (value) => (
        <a href={`mailto:${value}`} style={{ color: "#3b82f6" }}>
          {value}
        </a>
      ),
    },
    {
      key: "role",
      label: "Role",
      sortable: true,
    },
    {
      key: "department",
      label: "Department",
      sortable: true,
    },
    {
      key: "salary",
      label: "Salary",
      sortable: true,
      // Custom renderer for formatting
      render: (value) => `$${value.toLocaleString()}`,
      // Custom sort comparator for numeric values
      sortComparator: (a, b) => a - b,
    },
    {
      key: "joinDate",
      label: "Join Date",
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value) => (
        <span
          style={{
            padding: "4px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: 500,
            background: value === "Active" ? "#d1fae5" : "#fef3c7",
            color: value === "Active" ? "#065f46" : "#92400e",
          }}
        >
          {value}
        </span>
      ),
    },
  ];

  // Table options configuration
  const tableOptions = {
    pagination: true,
    pageSize: 10,
    defaultSortColumn: "name",
    defaultSortDirection: "asc",
    maxHeight: "600px",
  };

  return (
    <div style={{ padding: "20px", background: "#f3f4f6", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h1
          style={{
            marginBottom: "24px",
            color: "#1f2937",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Advanced Data Table Component
        </h1>

        <div
          style={{
            marginBottom: "20px",
            padding: "16px",
            background: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "12px",
              color: "#374151",
            }}
          >
            Features Included:
          </h2>
          <ul
            style={{
              color: "#6b7280",
              fontSize: "14px",
              lineHeight: "1.8",
              marginLeft: "20px",
            }}
          >
            <li>
              <strong>Global Search:</strong> Search across all columns
              simultaneously
            </li>
            <li>
              <strong>Column Sorting:</strong> Click column headers to sort
              (ascending/descending/clear)
            </li>
            <li>
              <strong>Advanced Filtering:</strong> Multiple filter operators
              (contains, equals, starts with, etc.)
            </li>
            <li>
              <strong>Pagination:</strong> Smart pagination with ellipsis for
              large page counts
            </li>
            <li>
              <strong>CSV Export:</strong> Export filtered/sorted data to CSV
              file
            </li>
            <li>
              <strong>Custom Renderers:</strong> Flexible cell rendering with
              custom functions
            </li>
            <li>
              <strong>Responsive Design:</strong> Horizontal and vertical
              scrolling for large datasets
            </li>
            <li>
              <strong>Reusable Architecture:</strong> Composition pattern with
              separated concerns
            </li>
          </ul>
        </div>

        <DataTable data={sampleData} columns={columns} options={tableOptions} />

        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            background: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#374151",
            }}
          >
            How to Use:
          </h3>
          <p style={{ marginBottom: "8px" }}>
            1. <strong>Search:</strong> Type in the search box to filter across
            all columns
          </p>
          <p style={{ marginBottom: "8px" }}>
            2. <strong>Sort:</strong> Click on column headers to sort data
          </p>
          <p style={{ marginBottom: "8px" }}>
            3. <strong>Filter:</strong> Click "Show Filters" to add
            column-specific filters
          </p>
          <p style={{ marginBottom: "8px" }}>
            4. <strong>Export:</strong> Click "Export CSV" to download the
            current view
          </p>
          <p>
            5. <strong>Navigate:</strong> Use pagination controls at the bottom
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the main DataTable component for use in other applications
export default Demo;
