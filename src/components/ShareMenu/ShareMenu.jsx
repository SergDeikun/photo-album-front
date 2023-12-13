import {
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  ViberShareButton,
  ViberIcon,
} from 'react-share';

import { API_URL } from 'api/api-fetch';

import { Box } from './ShareMenu.styled';

const ShareMenu = ({ onClose, id }) => {
  return (
    <>
      <Box ref={onClose}>
        <TelegramShareButton url={`${API_URL}/album/${id}`}>
          <TelegramIcon size={30} round />
        </TelegramShareButton>
        <WhatsappShareButton url={`${API_URL}/album/${id}`}>
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
        <ViberShareButton url={`${API_URL}/album/${id}`}>
          <ViberIcon size={30} round />
        </ViberShareButton>
      </Box>
    </>
  );
};

export default ShareMenu;
