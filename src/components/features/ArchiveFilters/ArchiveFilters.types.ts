export interface ArchiveFilterOption {
    value: string;
    label: string;
}

export interface ArchiveFiltersProps {
    search: string;
    onSearchChange: (value: string) => void;

    area?: string;
    onAreaChange?: (value: string) => void;
    areaOptions?: readonly ArchiveFilterOption[];

    topic?: string;
    onTopicChange?: (value: string) => void;
    topicOptions?: readonly ArchiveFilterOption[]

    year?: string;
    onYearChange?: (value: string) => void;
    yearOptions?: readonly ArchiveFilterOption[];

    className?: string
}