##Git Work Flow##

#TO START WORKING#

1.Fork the repo

2.Clone to local computer

`$ git remote add upstream organization_url`

3.From  master, checkout feature_branch

`$ git co -b feature_branch`

_NAME BRANCH AFTER IT'S PURPOSE_
Work on the branch....

4.Add & commit branch(dont push)

`$git add .`
`$git commit -m 'what i did'`

5.Add upstream commits to feature  branch

`$ git pull --rebase upstream master`

_If there is a merge conflict, resolve the conflicts and proceed_

`$git --rebase continue`
`$git add .`

_After merge conflicts resolves/no conflicts  originally_

`$git push origin branch`

6.Github submission (see below) 

Update your local master

7.Update your local master
`$ git pull upstream master`

#to start working on next feature
8.Go to step 4

#Github submition#
Go to GitHub and send pull request to the fire-devil organization branch.

2 people from the organization must read before a pull of lengthy or important code is accepted. 1 person only can accept code that is short or trivial.

#REFERENCES#
http://www.thumbtack.com/engineering/linear-git-history/
