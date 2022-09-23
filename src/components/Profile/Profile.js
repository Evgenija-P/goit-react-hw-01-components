import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  UserWrapper,
  UserAvatar,
  UserTitle,
  UserText,
  UserStats,
  StatsItem,
  StatsText,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <UserWrapper>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserTitle>{username}</UserTitle>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </UserWrapper>

      <UserStats>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </UserStats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
