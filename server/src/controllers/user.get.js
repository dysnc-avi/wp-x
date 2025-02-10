import ApiError from "../handlers/apiError.js";
import ApiResponse from "../handlers/apiResponse.js";
import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";

const getUser = asyncHandler(async (req, res) => {
  let userId = req.params.id;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        fullName: true,
        memberRefs: true,
      },
    });
    let response = new ApiResponse(200, user);
    return res.json(response);
  } catch (error) {
    let response = new ApiError(500, error.message);
    return res.json(response);
  }
});

export default getUser;
