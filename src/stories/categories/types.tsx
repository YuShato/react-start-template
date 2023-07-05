export interface CategoryProps {
  id: number;
  name: string;
}

export interface CategoriesProps {
  list: CategoryProps[] | [];
  title: string;
}
