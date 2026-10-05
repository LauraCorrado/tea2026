import { SearchInput, Select } from "@/components/ui";
import type { ArchiveFiltersProps } from "./ArchiveFilters.types";

export function ArchiveFilters({
  search,
  onSearchChange,

  area,
  onAreaChange,
  areaOptions,

  year,
  onYearChange,
  yearOptions,

  className = "",
}: ArchiveFiltersProps) {
  return (
    <div
      className={`
        grid
        gap-4
        md:grid-cols-2
        xl:grid-cols-4

        ${className}
      `}
    >
      <SearchInput
        label="Cerca un nostro lavoro"
        value={search}
        onChange={onSearchChange}
        placeholder="Inizia a digitare..."
      />

      {areaOptions && onAreaChange && (
        <Select
          label="Filtra per ambito"
          options={areaOptions}
          value={area ?? ""}
          onChange={onAreaChange}
          placeholder="Seleziona ambito..."
        />
      )}

      {yearOptions && onYearChange && (
        <Select
          label="Filtra per anno"
          options={yearOptions}
          value={year ?? ""}
          onChange={onYearChange}
          placeholder="Seleziona anno..."
        />
      )}
    </div>
  );
}