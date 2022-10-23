import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  console.log(user);
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
    </div>
  );
};
