import { Router } from "express"
import {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
} 
from "../controllers/Users.controller.js"

const router = Router()


router.route("/users").get(getUsers)

router.route('/insert').post(createUsers)

router.route('/update').patch(updateUsers)

router.route("/remove").delete(deleteUsers)


export default router