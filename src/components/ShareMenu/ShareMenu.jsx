import {
  TelegramShareButton,
  WhatsappShareButton,
  ViberShareButton,
} from 'react-share';

import {
  Box,
  ButtonList,
  ButtonItem,
  // TgBtn,
  TelegranIc,
  TooltipTelegram,
  WhatsappIc,
  TooltipWhatsapp,
  ViberIc,
  TooltipViber,
  CloseBtn,
} from './ShareMenu.styled';

const BASE_URL = 'https://b06v9stz-3001.euw.devtunnels.ms';

const ShareMenu = ({ onCloseOutside, id, onClose }) => {
  return (
    <>
      <Box ref={onCloseOutside}>
        <ButtonList>
          <ButtonItem>
            <TelegramShareButton url={`${BASE_URL}/album/${id}/access`}>
              <TelegranIc bgStyle={{ fill: 'transparent' }} />
            </TelegramShareButton>
            <TooltipTelegram>Telegram</TooltipTelegram>
          </ButtonItem>
          <ButtonItem>
            <WhatsappShareButton url={`${BASE_URL}/album/${id}`}>
              <WhatsappIc bgStyle={{ fill: 'transparent' }} />
            </WhatsappShareButton>
            <TooltipWhatsapp>Whatsapp</TooltipWhatsapp>
          </ButtonItem>
          <ButtonItem>
            <ViberShareButton url={`${BASE_URL}/album/${id}`}>
              <ViberIc bgStyle={{ fill: 'transparent' }} />
            </ViberShareButton>
            <TooltipViber>Viber</TooltipViber>
          </ButtonItem>
          <ButtonItem>
            <CloseBtn onClose={onClose} />
          </ButtonItem>
        </ButtonList>
      </Box>
    </>
  );
};

export default ShareMenu;
