import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Avatar from 'react-avatar';
import Cookies from 'js-cookie';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useMediaQuery } from 'react-responsive';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  EffectCards,
  EffectCoverflow,
  Navigation,
  Pagination,
  Keyboard,
} from 'swiper/modules';

import useGetCurrentUser from 'react-query/useGetCurrentUser';
import useDeleteAlbum from 'react-query/useDeleteAlbum';
import useUpdateUser from 'react-query/useUpdateUser';
import useLogout from 'react-query/useLogout';

import ShareButton from 'components/Buttons/ShareButton/ShareButton';
import ShareMenu from 'components/ShareMenu/ShareMenu';
import EditLinkBtn from 'components/Buttons/EditLinkBtn/EditLinkBtn';
import defaultCover from '../../images/cover.jpg';

import { showAlert } from 'helpers/showAlert';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  UserWrapper,
  UserForm,
  FieldWrapper,
  InputWrapper,
  SaveBtn,
  Field,
  LogOutBtn,
  SwiperContainer,
  SlideLink,
  Name,
  Title,
  AlmumsList,
  AlbumItem,
  AlbumCover,
  LinkAlbum,
  AlbumName,
  EditBox,
  ButtonWrapper,
  DeleteBtn,
} from './UserProfile.styled';

const UserProfile = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  const { mutateAsync: updateUser, isLoading: updateUserLoading } =
    useUpdateUser();
  const { mutateAsync: logout } = useLogout();
  const { mutateAsync: deleteAlbum } = useDeleteAlbum();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOpenShareMenu, setIsOpenShareMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    if (isLoading) {
      setProgress(100);
    }

    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser, isLoading]);

  const handleNameChange = e => {
    setName(e.target.value.trimStart());
    setSaveBtnVisible(currentUser.name !== e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value.trim());
    setSaveBtnVisible(currentUser.email !== e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setProgress(100);

    try {
      await updateUser(
        { name, email },
        {
          onSuccess: () => {
            setSaveBtnVisible(false);
          },
          onError: error => {
            // notifyError(error.response.data.message);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenShareMenu = id => {
    setIsOpenShareMenu(prevIsOpenShareMenu => ({
      ...prevIsOpenShareMenu,
      itemId: id,
    }));
  };

  const handleCloseShareMenu = () => {
    setIsOpenShareMenu(false);
  };

  const ref = useOnclickOutside(() => {
    setIsOpenShareMenu(false);
  });

  const handleDelete = async id => {
    try {
      await deleteAlbum(id, {
        //  TODO:перенести в хук

        onSuccess: () => {
          notifySuccess('album deleted');
        },
        onError: error => {
          notifyError(error.response.data.message);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowAlert = id => {
    showAlert(id, handleDelete);
  };

  const handleLogout = async () => {
    try {
      Cookies.remove('token', { path: '/' });
      navigate('/');

      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {currentUser && (
        <>
          <UserWrapper>
            <Avatar
              name={name}
              color={Avatar.getRandomColor('sitebase', [
                '#165954',
                '#ed6b5b',
                '#876d97',
              ])}
              round="100px"
              size="200px"
            />

            <UserForm
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              action=""
            >
              <FieldWrapper>
                <InputWrapper>
                  <label>
                    <Field
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </label>
                </InputWrapper>
              </FieldWrapper>

              <FieldWrapper>
                <InputWrapper>
                  <label>
                    <Field
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </label>
                </InputWrapper>
              </FieldWrapper>
              <SaveBtn
                title="Save Changes"
                disabled={updateUserLoading}
                isVisible={saveBtnVisible}
              />
            </UserForm>

            <LogOutBtn type="button" title="Log out" onClick={handleLogout} />
          </UserWrapper>

          {/* FriendsAlbums */}

          <Title>Friends albums</Title>
          <SwiperContainer
            slidesPerView={isMobile ? 1 : 3}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[
              EffectCards,
              EffectCoverflow,
              Navigation,
              Pagination,
              Keyboard,
            ]}
          >
            {currentUser.friendsAlbums &&
              currentUser.friendsAlbums.map(
                ({ _id: id, name, backgroundURL }) => {
                  console.log(currentUser.friendsAlbums);
                  return (
                    <SwiperSlide key={id}>
                      <SlideLink to={`/shared-album/${id}`}>
                        <AlbumCover
                          backgroundImg={backgroundURL || defaultCover}
                        >
                          <Name>{name}</Name>
                        </AlbumCover>
                      </SlideLink>
                    </SwiperSlide>
                  );
                }
              )}
            {isDesktop && (
              <>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </>
            )}
          </SwiperContainer>

          {/* Album list */}

          <Title>My Albums</Title>
          <AlmumsList>
            {currentUser &&
              currentUser.myAlbums.map(
                ({ _id: id, name, backgroundURL }, index) => {
                  return (
                    <AlbumItem key={id}>
                      <LinkAlbum to={`/album/${id}`}>
                        <AlbumCover
                          backgroundImg={backgroundURL || defaultCover}
                        />
                      </LinkAlbum>

                      <EditBox>
                        <ButtonWrapper>
                          <AlbumName>{name}</AlbumName>
                          <ShareButton
                            onClick={() => handleOpenShareMenu(id)}
                          />

                          <DeleteBtn onDelete={() => handleShowAlert(id)} />
                          <EditLinkBtn to={`/${id}/${name}/update`} />
                        </ButtonWrapper>
                      </EditBox>

                      {isOpenShareMenu && id === isOpenShareMenu.itemId && (
                        <ShareMenu
                          onCloseOutside={ref}
                          id={id}
                          onClose={handleCloseShareMenu}
                        />
                      )}
                    </AlbumItem>
                  );
                }
              )}
          </AlmumsList>
        </>
      )}
    </>
  );
};

export default UserProfile;
