# Task CPT0: Project setup and onboarding
This first task will help you setup your development environment and get familiar with the platform. You will be installing the pre-requisite softwares, learn how to use Git, and setup a new NodeJs project.

The AC (Acceptance Criteria) below define the requirements for the task. Your goal is to implement all the requirements as described in the Acceptance Criteria.

To get started follow the setup instructions and task workflow sections in the task overview. Once your environment is setup correctly you can start working on the Acceptance Criteria.
___
## Environment Setup (One Time)
The steps below only need to be done once for the project
1. Install Pre-Requisites
	- You will need to install the following software to get started:
		- [NodeJS](https://nodejs.org/en/download/) _(Node 14.0.0 or later version)_
		- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
		- An [IDE](https://www.codecademy.com/articles/what-is-an-ide) for development ([VSCode](https://code.visualstudio.com/) is recommended)

	- You may also want to install the [Codestream](https://www.codestream.com/) plugin for your IDE. This is optional but may be needed later if you want feedback from your mentor on your code.

2. Setup Git
	- Open the terminal run the following commands:
	```git
		git config --global user.name "Your Name"
		git config --global user.email youremail@example.com
	````
3. Clone the Git Repository
	- Cloning a git repository basically creates a local copy of the repository on your system. It will download any source code that is already present in the remote repository.<br>
	- To clone the repository, follow the steps below:
		1. Copy the Git url from the details tab
		2. Open a terminal and navigate to a suitable directory in your system to clone the repository.
		3.  Run `git clone COPIED_REPOSITORY_URL crypto_tracker`
		4.  Provide the credentials when prompted. Credentials are also available in the Details tab
		5.  You will now have the code available in the `crypto_tracker` directory. This will be your working directory.
		6.  You can now continue to the Task Workflow section
___
## Task Workflow
The steps below will need to be repeated for every task
1. Check out the task Branch
	- SkillReactor platform will create a branch for the component you are working on when you initiate the task. Once resources are initialized you can see the branch name in the Details Tab. You can visit [this link](https://www.atlassian.com/git/tutorials/using-branches) to learn more about git branches.

	- To checkout the branch for this task, follow the steps below:
		1.  Copy the branch name from details tab
		2.  Navigate to your working directory (`crypto_tracker`)
		3.  Run `git fetch`
		4.  Run `git checkout COPIED_BRANCH_NAME`
	- ___Note:___ _You will have to do this whenever you start a new task that has a different branch to what you are currently on_
2. Implement the Requirements
	- You can now start implementing the requirements as defined by the Acceptance Criteria on this page. Some tasks can be completed from the terminal, but for most tasks you will want to open the working directory in your IDE.

	- Acceptance Criteria for each requirement can be found on this page in the Task overview. To view the specific details about a given Acceptance Criteria click into it and you will see a popup.
3. Push your code to the Remote Repository
	- Once you have implemented the solution and would like to submit it for verification, you will need to push it to the remote repository as per steps below.
	
		1. Navigate to your working directory (`crypto_tracker`)
		2.  Run `git add -A`. This will add all the files for [staging](https://www.atlassian.com/git/tutorials/saving-changes)
		3.  Run `git commit -m "MESSAGE"`. This will save all staged files to your local repository. (MESSAGE could be any text for e.g. "Implementation of AC1")
		4.  Run `git push`. This will upload all the changes in your local repository to the remote repository.

4. Submit your solution
	1. You can now run `node skillreactor/submit.js` to submit your solution for verification.
	2.  Once verification is complete, you can see the results on the platform. Every AC will indicate whether it passed or failed. If an AC failed, you can click on it to get more details.
	3.  If all the requirements are met you will be able to move to the next task.
___
## Acceptance Criteria
### __AC1: A new NodeJs project has been initialized__
NodeJs projects are initialized using npm (Node package manager). Npm normally comes bundled with NodeJs installation, so you should already have it in your system if NodeJs has been installed.

Node packages are represented by `package.json` file. To learn more about this file and how to create it please see [this link](https://docs.npmjs.com/creating-a-package-json-file)

The project should be initiated with the following properties:
* Package Name: `skillreactor_project`
* Version: `1.0.0`
* Description: `My first node project`

The rest of the fields can be left empty or the default value.

Once you have created the package.json file, push the file to the remote repository. After pushing your changes you can run `node skillreactor/submit` to submit your solution.
	