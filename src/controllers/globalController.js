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
  res.render("screens/f_post");
};
const friendController = (req, res) => {
  res.render("screens/friend");
};
const singnInController = (req, res) => {
  res.render("./screens/signIn");
};
const signupController = (req, res) => {
  res.render("screens/signup");
};
const privacyController = (req, res) => {
  res.render("screens/privacy");
};

const h_postController = (req, res) => {
  res.render("screens/h_post");
};

export const globalController = {
  homeController,
  myController,
  f_postController,
  friendController,
  singnInController,
  signupController,
  mainController,
  privacyController,

  h_postController,
};
