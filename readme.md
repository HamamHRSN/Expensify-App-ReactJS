# Git Commands

git init - Create a new git Repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files to your staging area
git log - View recent commits
git remote -v    -  View Origin repo url for Fetching and pushing





# To Create SSH keys on github 
- use git bash
1- ls -a ~/.ssh
2- ssh-keygen -t rsa -b 4096 -C "hamam@example.com"
3- ls -a ~/.ssh
4- eval $(ssh-agent -s)
5- ssh-add ~/.ssh/id_rsa
6- clip < ~/.ssh/id_rsa.pub
7- pest what i copy on a new ssh key with what i copy from 6 and is ending by my email
8- ssh -T git@github.com         (yes)
9- git remote add origin git@github.com/HamamHRSN/Expensify-App.git
10- git push -u origin master     (for first time and one time only)
9- adding the two code of new repozetory