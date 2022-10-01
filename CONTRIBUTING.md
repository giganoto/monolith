[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/giganoto-com/monolith/pulls)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/giganoto-com/monolith)

At Giganoto, we warmly welcome contributions through collaboration. We are excited to see that you want to contribute!. There are many ways in which one could contribute to this project and every contribution is equally appreciated here. Navigate through the following to understand more about contributing here.

# New to Git

Follow these resources: https://lab.github.com and https://try.github.com/

# Contributing to Giganoto website

Please follow these steps and note these guidelines to begin contributing:

1. The first step is to set up the local development environment. See [this](#how-to-contribute) on how to do the same.
1. Take a look at the existing [Issues](https://github.com/giganoto-com/monolith/issues) or [create a new issue!](https://github.com/giganoto-com/monolith/issues/new)
1. A good way to easily start contributing is to pick and work on a [good first issue](https://github.com/giganoto-com/monolith/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) or [help wanted](https://github.com/giganoto-com/monolith/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22). We try to make these issues as clear as possible and provide basic info on how the code should be changed, and if something is unclear feel free to ask for more information on the issue.
1. Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

# How to Contribute

## Prerequisites

Make sure you have the following prerequisites installed on your operating system before you start contributing:

- [Nodejs](https://nodejs.org/en/) version 16.14 or above.

  To verify run:

  ```
  node -v
  ```

- [Yarn](https://yarnpkg.com) version 1.2 or above.

  To verify run:

  ```
  yarn -v
  ```

## Set up your Local Development Environment

Follow the following instructions to start contributing.

**1.** Fork [this](https://github.com/giganoto-com/monolith) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<YOUR-GITHUB-USERNAME>/monolith.git
```

**3.** Navigate to the project directory.

```
cd .\monolith\front-end\next-ui\    
```

**4.** Install the dependencies for running the site.

```
yarn install
```

**5.** Create a new branch.

```
git checkout -b <your_branch_name>
```



**6.** Run the site locally to preview changes.

```
yarn dev
```

This will run a local webserver with "live reload" conveniently enabled at `localhost/3000`.

**7.** Make desired changes to files.

**8.** Track your changes.

```
git add  <file_name>
```

**9.** Commit your changes.


```
git commit  -m "<your commit message>"
```

**10.** Push the committed changes in your local branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**11.** Once you’ve committed and pushed all of your changes to GitHub, go to the page for your fork on GitHub, select your development branch, and click the _pull request button_. Please ensure that you compare your feature branch to the desired branch of the repo you are supposed to make a PR to.

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the Monolith website project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**



## All the best! 🥇
