const express = require("express");

const router = express.Router();

//회원가입
router.post("/", (req, res) => {
  res.json({});
});
//로그인
router.get("/", (req, res) => {
  res.send("로그인이랑께");
});
//유저 정보 수정
router.get("/", (req, res) => {
  res.send({});
});
//유저 탈퇴
router.delete("/", (req, res) => {
  res.send({});
});
module.exports = router;
