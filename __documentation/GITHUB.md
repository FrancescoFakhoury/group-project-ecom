# GitHub

1. Decide which team member will have the `master` repository for your project.
2. That person will create a new repository, or use this one.
3. The rest of the team will fork that repository.

⚠️ Most important thing is that the rest of the team that work from _that_ repository and not this one.

![gitflow](../server/assets/git_remote_flow.png)

### Individual worflow

1. `git stash`
2. `git pull origin HEAD`
3. `git stash apply`
4. // Check your files for any merges that needs to be done.
5. `git add .`
6. `git commit -m "your commit message"`
7. `git push origin HEAD`

The rest of the team can now pull your changes into their repos.

1. `git stash`
2. `git pull origin HEAD`
3. `git stash apply`

If you happen to work in some of the same files as a teammate, you will probably have conflicts. Use the VS Code UI to navigate these and resolve them. _If you get into weird state and start to panic, see someone, say something._
