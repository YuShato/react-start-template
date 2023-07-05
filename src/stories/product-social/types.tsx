export interface SocialItemProps {
  id: string;
  link: string;
  viewtype: 'email' | 'facebook' | 'linkedin' | 'twitter';
}

export interface SocialListProps {
  list: SocialItemProps[] | [];
}
