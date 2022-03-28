# Task CPT10: Create a simple static landing page
In this task we want to create the first page our customers will arrive at. The users will be able to read about our product and features. The task will involve creating a static page with product and features using React Framework. In subsequent tasks User registration and login will be added.

To get you started, the branch for this task already includes boilerplate code required for React. Please see the README file in the branch to get started

## **Wireframes & Media**
![Static landing page](CPT10.png)

## **Acceptance Criteria**
Given I am a new potential customer

When I open the product landing page

### **AC1:** Then I can see product logo on the top left
The logo image will be on the top left corner. You can find the image in the "src" directory with the name `logo.png`. The container tag should have **id attribute** with value `logo`.

Please see [this link](https://create-react-app.dev/docs/adding-images-fonts-and-files) for information on how to load images in React

### **AC2:** And I can see the Company Name right next to the logo
Company Name should be `Crypto Tracker`. It should be wrapped in a Container tag which has an **id attribute** with value `company_name`.

### **AC3:** And I can see a Product details section containing a Product Headline
Product Headline should be `Crypto Tracker: All your crypto in one place`. Product headline should be wrapped in a tag which has an **id attribute** with value `product_headline`.


### **AC4:** And I can also see product description in the product details section
Product Description should be:
`Crypto Tracker is a web app that allows you to easily manage your Crypto currency holdings in one place. Keep track of the prices and your profit/loss trends.`
Product description should be wrapped in a Container tag which has an **id attribute** with a value `product_description`

### **AC5:** And I can see a Features section marked with a headline "Features"
Features headlines should simply say `Features` and should be wrapped in a tag that has an **id attribute** with value `features_heading`

### **AC6:** And I can see a list of features in the features section
Features list should consist of the following features:
1. Add/Remove Crypto Assets
2. Track Prices
3. View PnL

Features list should be wrapped in a tag which has an **id attribute** with value `features_list`. And every feature itself should be wrapped in tag which has a `class` attribute with value `feature`.

### **AC7:** And I can see a footer with a copyrights notice
Copyright notice should be `Copyright Crypto Tracker` and must be wrapped in a tag with `id` attribute having value `copyright_notice`.

### **AC8:** And I can also see social media links in the footer
Social media links will be wrapped in a tag with **id attribute** having value `sm_links`. This will contain the following social media image links:
1. Facebook: Should be wrapped in a tag having an **id value** of `sm_facebook`
2. Linkedin: Should be wrapped in a tag having an **id value** of `sm_linkedin`
3. Twitter: Should be wrapped in a tag having an **id value** of `sm_twitter`
The images for the icons are available under sm_icons directory. You can point all links to https://skillreactor.io for now


## Task Workflow
The steps below will need to be repeated for every task

### 1. Check out the task Branch
SkillReactor platform will create a branch for the component you are working on when you initiate the task. Once resources are initialized you can see the branch name in the Details Tab. You can visit [this link](https://www.atlassian.com/git/tutorials/using-branches) to learn more about git branches.

To checkout the branch for this task, follow the steps below:
1.  Copy the branch name from details tab
2.  Navigate to your working directory (`crypto_tracker`)
3.  Run `git fetch`
4.  Run `git checkout COPIED_BRANCH_NAME`

___Note:___ _You will have to do this whenever you start a new task that has a different branch to what you are currently on_

### 2. Implement the Requirements
You can now start implementing the requirements as defined by the Acceptance Criteria on this page. Some tasks can be completed from the terminal, but for most tasks you will want to open the working directory in your IDE.

Acceptance Criteria for each requirement can be found on this page in the Task overview. To view the specific details about a given Acceptance Criteria click into it and you will see a popup.
### 3. Push your code to the Remote Repository
Once you have implemented the solution and would like to submit it for verification, you will need to push it to the remote repository as per steps below.

1. Navigate to your working directory (`crypto_tracker`)
2.  Run `git add -A`. This will add all the files for [staging](https://www.atlassian.com/git/tutorials/saving-changes)
3.  Run `git commit -m "MESSAGE"`. This will save all staged files to your local repository. (MESSAGE could be any text for e.g. "Implementation of AC1")
4.  Run `git push`. This will upload all the changes in your local repository to the remote repository.

### 4. Submit your solution
1. You can now run `node skillreactor/submit.js` to submit your solution for verification.
2.  Once verification is complete, you can see the results on the platform. Every AC will indicate whether it passed or failed. If an AC failed, you can click on it to get more details.
3.  If all the requirements are met you will be able to move to the next task.

## Further Information

**Programming Language**

All tasks will support Typescript. TypeScript is an open-source language developed by Microsoft, it builds on JavaScript, by adding static type definitions. It is a superset of Javascript and if you can write Javascript you can easily transition to Typescript. More information on Typescript can be found [here](https://www.typescriptlang.org/)

**Framework**

This UI task will be implemented using ReactJs, which is a Framework to help build User Interfaces more easily. You can find more information on react [here](https://reactjs.org/)

**Toolchain**

The code that you will find in the branch for this Task includes boilerplate setup for a React app. The setup is based on `create-react-app` toolchain. You can find more information about it [here](https://reactjs.org/docs/create-a-new-react-app.html). The toolchain internally uses webpack, which is a build systems to compile your React code into plain javascript. Its an advance topic but if you are interested, you can find more information on webpack [here](https://webpack.js.org/).

**Styling the UI**

There are various frameworks available to help your easily style your user interface. We would recommend having a look at [Material UI](https://material-ui.com/), which provides a good selection of ready to use React components.


