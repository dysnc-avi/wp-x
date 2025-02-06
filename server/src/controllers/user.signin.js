import asyncHandler from "../handlers/asyncHandler";
import prisma from "../prisma";
import bcrypt from "bcrypt";
import ApiResponse from "../handlers/apiResponse";
import ApiError from "../handlers/apiError";

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
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
