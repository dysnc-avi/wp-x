import ApiError from "../handlers/apiError.js";
import ApiResponse from "../handlers/apiResponse.js";
import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";

const joinOrganisation = asyncHandler(async (req, res) => {
  const orgId = req.params.id;
  const userId = req.cookies.userId;
  try {
    let newMember = await prisma.member.create({
      data: {
        org: {
          connect: {
            id: orgId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    let response = new ApiResponse(200, {
      orgId,
      memberId: newMember.id,
    });
    return res.json(response);
  } catch (error) {
    let response = new ApiError(500, error.message);
    res.json(response);
  }
});

export default joinOrganisation;
