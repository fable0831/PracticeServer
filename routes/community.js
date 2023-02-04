const express = require("express");

const router = express.Router();

//게시글 작성
router.post("/", (req, res) => {
  res.json({});
});
//게시글 조회
router.get("/", (req, res) => {
  res.send("게시글이랑께");
});
//게시글 수정
router.get("/", (req, res) => {
  res.send({});
});
//게시글 삭제
router.delete("/", (req, res) => {
  res.send({});
});

module.exports = router;
