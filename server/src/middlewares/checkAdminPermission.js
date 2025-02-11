import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";
import ApiError from "../handlers/apiError.js";

const checkAdminPermission = asyncHandler(async (req, res, next) => {
  const userId = req.cookies.userId;
  const o = req.query.o;
  let memberRole = await prisma.member.findFirst({
    where: {
      orgId: o,
      userId: userId,
    },
  });

  if (memberRole.role == "MEMBER") {
    let response = new ApiError(403, "You are not an admin");
    return res.json(response);
  } else {
    next();
  }
});

export default checkAdminPermission;
