export interface SocialItemProps {
  id: string;
  link: string;
  viewType: 'email' | 'facebook' | 'linkedin' | 'twitter';
}

export interface SocialListProps {
  list: SocialItemProps[] | [];
}
