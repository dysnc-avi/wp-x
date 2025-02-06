import ApiError from "../handlers/apiError.js";
import ApiResponse from "../handlers/apiResponse.js";
import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";
import bcrypt from "bcrypt";

const userSignup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    const response = new ApiResponse(200, user.id);
    return res.json(response);
  } catch (error) {
    const response = new ApiError(403, error.message);
    return res.json(response);
  }
});

export default userSignup;
