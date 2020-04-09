# GitHub

1. Decide which team member will have the `master` repository for your project.
2. That person will create a new repository, or use this one.
3. The rest of the team will fork that repository.

⚠️ Most important thing is that the rest of the team that work from _that_ repository and not this one.

![gitflow](../server/assets/git_remote_flow.png)

### Individual worflow

1. When you start working on a task, ALWAYS create a new branch and name it according to the task.
2. Work on this branch ...
3. Push your code to your repo. `git push origin HEAD`
4. Go onto Github and create a PR _that targets upstream, and not yout repo_
5. Let the rest of the team know that you have a PR for review. (provide the link in Slack for convenience)
6. Team members may request changes or explanations.
7. if so, make changes, commit them and `git push origin HEAD` again. This will automatically update your PR.
8. Once they have approved, go ahead and merge it.
9. `git checkout master` to return to the master branch
10. `git pull upstream master` to readd your merged changes.
11. create a new branch for the next task,
12. rinse and repeat...

The rest of the team can now pull your changes into their repos.

1. `git stash`
2. `git pull upstream master`
3. `git stash apply`

If you happen to work in some of the same files as a teammate, you will probably have conflicts. Use the VS Code UI to navigate these and resolve them. _If you get into weird state and start to panic, see someone, say something._

### github commands

| commands                                                       | description                                                                                                                                |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `git clone <REPO_CLONE_URL>`                                   | copy repo to your computer                                                                                                                 |
| `git remote -v`                                                | list the remotes that are set up                                                                                                           |
| `git remote add upstream <REMOTE_CLONE_URL_YOU_WANT_TO_TRACK>` | In this case, you will go to the master team member's repo and take that url to create your link to it. We call it upstream by convention. |
| `git stash`                                                    | put away all of the work you've been doing.                                                                                                |
| `git pull upstream master`                                     | Grab all of the new changes (from others and yourself)                                                                                     |
