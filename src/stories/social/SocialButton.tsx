import React from 'react';
import UiSocialButton, { UiButtonProps } from './ui';
import FacebookSocialIcon from './assets/facebook';
import InstagramSocialIcon from './assets/instagram';
import LinkedinSocialIcon from './assets/linkedin';
import TwitterSocialIcon from './assets/twitter';
import YoutubeSocialIcon from './assets/youtube';

interface ButtonProps extends UiButtonProps {
  viewType: 'youtube' | 'facebook' | 'instagram' | 'linkedin' | 'twitter';
}

const SocialIcon = {
  facebook: FacebookSocialIcon,
  instagram: InstagramSocialIcon,
  linkedin: LinkedinSocialIcon,
  twitter: TwitterSocialIcon,
  youtube: YoutubeSocialIcon,
};

const SocialButton = ({ viewType, ...props }: ButtonProps) => {
  const Icon = SocialIcon[viewType];

  return (
    <UiSocialButton viewType={viewType} {...props}>
      {<Icon />}
    </UiSocialButton>
  );
};

export default SocialButton;
