export interface SizeItemTypes {
  id: string;
  label: string;
  title: string;
}

export interface SizeItemProps {
  size: SizeItemTypes;
  activeSize: string;
}

export interface SizesListProps {
  sizes: SizeItemTypes[];
  activeSize: string;
}
