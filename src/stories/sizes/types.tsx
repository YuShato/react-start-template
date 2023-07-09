export interface SizeItemTypes {
  id: string;
  label: string;
  title: string;
}

export interface SizeItemProps {
  activeSize: string;
  size: SizeItemTypes;
}

export interface SizesListProps {
  activeSize: string;
  sizes: SizeItemTypes[];
}
