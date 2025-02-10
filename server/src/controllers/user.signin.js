import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";
import bcrypt from "bcrypt";
import ApiResponse from "../handlers/apiResponse.js";
import ApiError from "../handlers/apiError.js";

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({ where: { email: email } });
    let checkPass = await bcrypt.compare(password, user.password);
    if (user && checkPass) {
      const response = new ApiResponse(200, user.id);
      return res.json(response);
    } else if (user && !checkPass) {
      const response = new ApiError(403, "Invalid Password");
      return res.json(response);
    } else {
      const response = new ApiError(403, "User not found");
      return res.json(response);
    }
  } catch (error) {
    const response = new ApiError(500, error.message);
    return res.json(response);
  }
});

export default signin;
