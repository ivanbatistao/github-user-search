import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const UserInfo = () => {
  const [numberOfInternalRepos, setNumberOfInternalRepos] = useState(0);
  const [loading, setLoading] = useState(true);

  const {
    userData: {
      login,
      name,
      avatar_url,
      followers,
      following,
      public_repos,
      bio,
      html_url,
    },
  } = useContext(AppContext);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${login}/repos`
        );

        const userRepos = await response.json();
        setNumberOfInternalRepos(userRepos.length);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchRepos();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      <div>
        <h2>{name || login}</h2>
        <img src={`${avatar_url}`} width={50} height={50}></img>
      </div>
      <div>
        <div>
          <div>
            <h3>Followers</h3>
            <p>{followers}</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>{following}</p>
          </div>
          <div>
            <h3>Public repos</h3>
            <p> {public_repos}</p>
          </div>
          {numberOfInternalRepos && (
            <>
              <div>
                <h3>Internal repos</h3>
                <p> {numberOfInternalRepos}</p>
              </div>
            </>
          )}
        </div>
        <div>
          <h3>Bio</h3>
          <p>{bio}</p>
        </div>
      </div>
      <footer>
        {' '}
        <a href={`${html_url}`} target='__blank'>
          Open Github
        </a>
      </footer>
    </main>
  );
};

export default UserInfo;
