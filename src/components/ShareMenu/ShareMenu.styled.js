import styled from 'styled-components';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import { TelegramIcon, WhatsappIcon, ViberIcon } from 'react-share';

export const Box = styled.div`
  position: absolute;
  bottom: 70px;
  right: 109px;
  background-color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.borderRadius.small};
  /* border-width: 20px 10px 0; */
  padding: 12px;

  @media ${p => p.theme.device.desktop} {
    right: 104px;
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

//* Telegram

export const TelegranIc = styled(TelegramIcon)`
  width: 50px;
  height: 50px;
  /* border: 1px solid ${p => p.theme.colors.white}; */
  border-radius: 7px;

  @media ${p => p.theme.device.desktop} {
    width: 30px;
    height: 30px;
  }
`;

export const TooltipTelegram = styled.span`
  position: absolute;
  top: 17px;
  left: -96px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  padding: 3px 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  border-radius: ${p => p.theme.borderRadius.small};
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s linear;

  ${ButtonItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

//* Whatsapp

export const WhatsappIc = styled(WhatsappIcon)`
  width: 50px;
  height: 50px;
  /* border: 1px solid ${p => p.theme.colors.white}; */
  border-radius: 7px;

  @media ${p => p.theme.device.desktop} {
    width: 30px;
    height: 30px;
  }
`;

export const TooltipWhatsapp = styled.span`
  position: absolute;
  top: 62px;
  left: -105px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  padding: 3px 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  border-radius: ${p => p.theme.borderRadius.small};
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s linear;

  ${ButtonItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

//* Viber

export const ViberIc = styled(ViberIcon)`
  width: 50px;
  height: 50px;
  /* border: 1px solid ${p => p.theme.colors.white}; */
  border-radius: 7px;

  @media ${p => p.theme.device.desktop} {
    width: 30px;
    height: 30px;
  }
`;

export const TooltipViber = styled.span`
  position: absolute;
  top: 108px;
  left: -64px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  padding: 3px 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  border-radius: ${p => p.theme.borderRadius.small};
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s linear;

  ${ButtonItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const CloseBtn = styled(CloseButton)`
  position: static;
  padding: 0;

  svg {
    fill: ${p => p.theme.colors.red};
    width: 50px;
    height: 50px;
  }

  @media ${p => p.theme.device.desktop} {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
