# base2.io

The Base Two website.

- [Github Project Board](https://github.com/orgs/b2io/projects/15)
- [Design Files (Zeplin)](https://app.zeplin.io/project/5fff21e06012bf1d470820c3)
- [Design Files (Google Drive)](https://drive.google.com/drive/folders/1VpkOfCsSGP40DSx85mYPChncMDwlNiTV?usp=sharing)
- [Case Study Copy](https://drive.google.com/drive/folders/1jptdTwNI3IIGkf4HuCmWTYvk_4WYdNNP?usp=sharing)
- [Animation Guide](https://drive.google.com/file/d/19yUdEdYmql6whrRMhZ_Ai36hzEolJTBW/view?usp=sharing)
- [Styleguide / Brand Guidelines](https://drive.google.com/file/d/10ITrRxfICmhs3MP-dlMnzVh8TjJCZwOQ/view?usp=sharing)
- [Logos](https://drive.google.com/drive/folders/1RGmWu8Z7SLSWrsxI55wn55HIrmIbU-Nl?usp=sharing)

## Development

### Setup & Tools

<details>
<summary>Prerequisites (git, npm, stylelint)</summary>

You'll need to set up Git and NPM before you can run this project locally. The setup for these is slightly different depending on your OS.

1. Git - Follow the [Git instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git for your OS.

1. Clone the repo

   ```bash
   # Either using SSH
   > git clone git@github.com:b2io/base2.io.git

   # Or using HTTPS
   > git clone https://github.com/b2io/base2.io.git

   ```

1. NVM / Node

   It is recommended that you install NVM (Node Version Manager) rather than Node directly because NVM allows you to switch node versions more easily, which is necessary when you hop between different projects. Please use **Node v18.x (currently 18.17.1)** for this project as it is the long-term supported version, and what Vercel will use for the build.
   Node can be downloaded via the link above or via your OS's package manager below.

   - Mac users can install and maintain Node through the package manager [Homebrew](https://brew.sh/) or by going to the [Node website](https://nodejs.org/en/download/):

     ```
     brew install node
     ```

   - Windows users can install NVM via [nvm-windows](https://github.com/coreybutler/nvm-windows). If, instead, you choose to install Node directly an installer can be downloaded from the [Node website](https://nodejs.org/en/download/) or by using the package manager [Chocolatey](https://chocolatey.org/install):

     ```
     choco install nodejs-lts -y
     ```

1. `stylelint`

`stylelint` has been setup on this project to lint the css-syntax of styled components. This linting runs as part of the husky pre-commit hooks (e.g. `npm run lint:css`). It is recommended that you install the [`stylelint` VS Code extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) so that you get warnings within your IDE. If you find the extension throwing warnings for unrelated files (such as markdown files) you can add a global `.stylelintrc` file to your personal root directory (i.e. the same location as your `.gitconfig`) that includes the following:

```
{
   "ignoreFiles": ["**/*.md"]
}
```

</details>

**Install Packages**

```
npm i
```

**Local Development**

Starts local development on port 3000.

```
npm run dev
```

**Build & Run**

Build and run built assets on port 3001.

```
npm run build
npm start
```

**Storybook**

Starts storybook on port 6006. Storybook is a demonstration home for the library of components and a good starting point for creating more.

```
npm run storybook
```

### Development Workflow

1. Go to the Github project board in [Github](https://github.com/orgs/b2io/projects/15/views/1) to find a development task from the `Todo` column.
   <details>
    <summary>If a new card is needed</summary>   
    If you need to create a new card then click the `Add item` button in Github's footer, enter title, and select the correct card label

   - **story:** A user-focused feature written as a user story.
   - **task:** A development task or chore that isn't written as a user story.
   - **fix:** A task that corrects an issue with the application.

   </details>

2. Assign yourself to the card
3. Track time in Harvest via Github by clicking the `Open Harvest Time Tracking` option next to `Harvest Time Tracking` in the Github card. This will start a timer in Harvest with the card's name and a link to the card.
4. Update the card's status to be `In Progress`
5. Create a new branch off of the `main` branch prefixed with the card id (e.g. `702-short-desc-of-task`).
6. When committing add `#comment` within the contents of the commit message if you'd like it to be included in the Github card as a commit. Example:

   ```
   WIP: add commit message example

   #702 #comment
   ```

7. When creating a PR

   1. Ensure that the PR's destination is the correct base branch (e.g. `main`)
   2. Give it a title prefixed with its card type and a short description (e.g. `task: update readme to include dev workflow`)
   3. Provide a description that explains what was changed, why it was changed, and any other information that may help the reviewer (e.g. screenshots or proof of successful tests)
   4. Include the Github card number and `#comment` to communicate which card it closes and to link the commit in Github. E.g.:

      ```
      Closes [#702](https://github.com/b2io/base2.io/issues/702) #comment
      Update readme to include development workflow instructions. This includes
      - updates to nvm/node installation
      - Github usage
      - branch creation
      - PR creation
      ```

8. Update the card's status to be `In Review`
9. Once the PR is approved and it is ready to be merged
10. Use the `Squash and merge` button in Github
11. Update the commit message if and as needed
12. `Confirm squash and merge`
13. Delete the branch
14. Update the card's status to be `Done`
