export interface Car {
    vin?;
    year;
    brand;
    color;
}

export interface LazyLoadEvent {
      first?: number;
      rows?: number;
      sortField?: string;
      sortOrder?: number;
      multiSortMeta?: SortMeta[];
      filters?: {[s: string]: FilterMetadata;};
      globalFilter?: any;
}

export interface SortMeta {
      field: string;
      order: number;
}

export interface FilterMetadata {
      value?: any;
      matchMode?: string;
}

export interface SelectItem {
      label?: string;
      value: any;
      styleClass?: string;
      icon?: string;
      title?: string;
      disabled?: boolean;
}
