import React from 'react';
import UiSocialButton, { UiButtonProps } from './ui';
import FacebookSocialIcon from './assets/facebook';
import InstagramSocialIcon from './assets/instagram';
import LinkedinSocialIcon from './assets/linkedin';
import TwitterSocialIcon from './assets/twitter';
import YoutubeSocialIcon from './assets/youtube';

interface ButtonProps extends UiButtonProps {
  viewtype: 'youtube' | 'facebook' | 'instagram' | 'linkedin' | 'twitter';
}

const SocialIcon = {
  facebook: FacebookSocialIcon,
  instagram: InstagramSocialIcon,
  linkedin: LinkedinSocialIcon,
  twitter: TwitterSocialIcon,
  youtube: YoutubeSocialIcon,
};

const SocialButton = ({ viewtype, ...props }: ButtonProps) => {
  const Icon = SocialIcon[viewtype];

  return (
    <UiSocialButton viewtype={viewtype} {...props}>
      {<Icon />}
    </UiSocialButton>
  );
};

export default SocialButton;
