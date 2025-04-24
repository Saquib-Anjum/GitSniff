import React, { useState, useCallback, useEffect } from "react";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Spinner from "../components/Spinner";
import SortRepos from "../components/SortRepos";
import Search from "../components/Search";
import { toast } from "react-hot-toast";
import axios from "axios";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username = "Saquib-Anjum") => {
      setLoading(true);
      const headers = {
        authorization:`token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
      try {
        // Get user profile
        const userRes = await axios.get(
          `https://api.github.com/users/${username}`,{headers}
        );
        const userProfile = userRes.data;

        // Get user repos in a separate request
        const reposRes = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        const repos = reposRes.data;

        // Sort repos by default (recent first)
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        console.log("User profile:", userProfile);
        console.log("Repos:", repos);

        setRepos(repos);
        setUserProfile(userProfile);

        return { userProfile, repos };
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);
  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);
    const { userProfile, repos } = await getUserProfileAndRepos(username);
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
  };

  //sort repos here
  const onSort = async(sortType)=>{
    if(sortType==="recent"){
      repos.sort((a,b)=> new Date(b.created_at) -  new Date(a.created_at));//recent will be first
    }

    else if(sortType==="stars"){
      repos.sort((a,b)=> (b.stargazers_count) -  (a.stargazers_count));//most stars will be in first
    }
    else if (sortType==="forks"){
      repos.sort((a,b) => (b.forks_count) -  (a.forks_count));
    }
    setSortType(sortType);
    setRepos([...repos]);
  }

  if (loading) return <Spinner />;

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && (
        <SortRepos sortType={sortType} setSortType={setSortType} onSort={onSort}/>
      )}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && <ProfileInfo userProfile={userProfile} />}
        <Repos repos={repos} />
      </div>
    </div>
  );
};

export default HomePage;
