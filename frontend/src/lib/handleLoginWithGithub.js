export const handleLoginWithGithub = () => {
    window.open(`${import.meta.env.VITE_BASE_URL}/api/auth/github`, "_self");
  };