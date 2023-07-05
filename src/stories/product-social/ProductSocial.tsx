import React from 'react';
import GrayFacebook from './assets/icons/GrayFacebook';
import GrayLinkedin from './assets/icons/GrayLinkedin';
import GrayMessage from './assets/icons/GrayMessage';
import GrayTwitter from './assets/icons/GrayTwitter';
import UiSocial, { UiButtonProps } from './ui';
import { SocialListProps } from './types';

const SocialIcon = {
  facebook: GrayFacebook,
  linkedin: GrayLinkedin,
  twitter: GrayTwitter,
  email: GrayMessage,
};

const ProductSocialButton = ({ viewtype, ...props }: UiButtonProps) => {
  const Icon = SocialIcon[viewtype];

  return (
    <UiSocial.Button viewtype={viewtype} {...props}>
      {<Icon />}
    </UiSocial.Button>
  );
};

const ProductSocialList = ({ list }: SocialListProps) => {
  if (!list || !list.length) {
    return null;
  }

  return (
    <UiSocial>
      <UiSocial.Title>Share this products:</UiSocial.Title>

      <UiSocial.List>
        {list.map((item) => (
          <ProductSocialButton key={item.id} viewtype={item.viewtype} {...item} />
        ))}
      </UiSocial.List>
    </UiSocial>
  );
};

export default ProductSocialList;
