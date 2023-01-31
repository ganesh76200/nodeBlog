const { getAllBlogs, addBlogs, removeBlog } = require("../controllers/blogCOntroller")

const router = require("express").Router()

router.get("/", getAllBlogs)
router.post("/add", addBlogs)
router.delete("/:blogId", removeBlog)

module.exports = router