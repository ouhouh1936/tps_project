const HOME = "/";
const MY = "/h_post";
const FRIEND = "/friend";
const SIGNIN = "/signIn";
const SIGNUP = "/signUp";
const HEADER = "/header";
const PRIVACY = "/privacy";

//post_main
const H_POST = "/my";
const F_POST = "/f_post";

//post

const POST_DETAIL = `/detail/:id`;
const POST_WRITE = `/write/:type`;
const POST_WRITE_DB = `/write`;

export const routers = {
  HOME,
  MY,
  F_POST,
  FRIEND,
  SIGNIN,
  SIGNUP,
  HEADER,
  PRIVACY,

  H_POST,
  POST_DETAIL,
  POST_WRITE,
  POST_WRITE_DB,
};
