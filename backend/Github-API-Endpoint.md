# GitHub API Endpoints 🌐 [api.github.com](https://api.github.com)

A comprehensive list of GitHub API endpoints with their descriptions.

## User Endpoints 👤

- **Current User**: `current_user_url`  
  ```https://api.github.com/user```
- **User Authorizations**: `current_user_authorizations_html_url`  
  ```https://github.com/settings/connections/applications{/client_id}```
- **User Emails**: `emails_url`  
  ```https://api.github.com/user/emails```
- **User Keys**: `keys_url`  
  ```https://api.github.com/user/keys```
- **User Notifications**: `notifications_url`  
  ```https://api.github.com/notifications```

## Social Endpoints 🤝

- **Followers**: `followers_url`  
  ```https://api.github.com/user/followers```
- **Following**: `following_url`  
  ```https://api.github.com/user/following{/target}```
- **Starred Repos**: `starred_url`  
  ```https://api.github.com/user/starred{/owner}{/repo}```
- **Starred Gists**: `starred_gists_url`  
  ```https://api.github.com/gists/starred```

## Repository Endpoints 📚

- **Repositories**: `repository_url`  
  ```https://api.github.com/repos/{owner}/{repo}```
- **User Repos**: `current_user_repositories_url`  
  ```https://api.github.com/user/repos{?type,page,per_page,sort}```
- **Org Repos**: `organization_repositories_url`  
  ```https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}```
- **Public Gists**: `public_gists_url`  
  ```https://api.github.com/gists/public```

## Search Endpoints 🔍

- **Code Search**: `code_search_url`  
  ```https://api.github.com/search/code?q={query}{&page,per_page,sort,order}```
- **Commit Search**: `commit_search_url`  
  ```https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}```
- **Issue Search**: `issue_search_url`  
  ```https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}```
- **Repo Search**: `repository_search_url`  
  ```https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}```
- **User Search**: `user_search_url`  
  ```https://api.github.com/search/users?q={query}{&page,per_page,sort,order}```
- **Topic Search**: `topic_search_url`  
  ```https://api.github.com/search/topics?q={query}{&page,per_page}```
- **Label Search**: `label_search_url`  
  ```https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}```

## Organization Endpoints 🏢

- **Organizations**: `organization_url`  
  ```https://api.github.com/orgs/{org}```
- **User Orgs**: `user_organizations_url`  
  ```https://api.github.com/user/orgs```
- **Org Teams**: `organization_teams_url`  
  ```https://api.github.com/orgs/{org}/teams```

## Miscellaneous Endpoints 🎉

- **Emojis**: `emojis_url`  
  ```https://api.github.com/emojis```
- **Events**: `events_url`  
  ```https://api.github.com/events```
- **Feeds**: `feeds_url`  
  ```https://api.github.com/feeds```
- **Gists**: `gists_url`  
  ```https://api.github.com/gists{/gist_id}```
- **Hub**: `hub_url`  
  ```https://api.github.com/hub```
- **Rate Limit**: `rate_limit_url`  
  ```https://api.github.com/rate_limit```
- **Authorizations**: `authorizations_url`  
  ```https://api.github.com/authorizations```
- **Issues**: `issues_url`  
  ```https://api.github.com/issues```

---

> ℹ️ Note: Replace placeholders like `{owner}`, `{repo}`, `{org}`, `{query}` etc. with actual values when using the endpoints. Parameters in curly braces are optional.