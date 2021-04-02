const homeController = (req, res) => {
  res.render("screens/home");
};
const myController = (req, res) => {
  res.render("screens/my");
};

const mainController = (req, res) => {
  res.render("./layouts/main");
};
const f_postController = (req, res) => {
  res.render("./screens/f_post");
};
const firendController = (req, res) => {
  res.render("screens/firend");
};
const singnInController = (req, res) => {
  res.render("./screens/signIn");
};
const signupController = (req, res) => {
  res.render("screens/signup");
};

export const globalController = {
  homeController,
  myController,
  mainController,
  f_postController,
  firendController,
  singnInController,
  signupController,
};
