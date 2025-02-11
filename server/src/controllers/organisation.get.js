import asyncHandler from "../handlers/asyncHandler.js";
import ApiError from "../handlers/apiError.js";
import ApiResponse from "../handlers/apiResponse.js";
import prisma from "../prisma.js";

const getOrganisation = asyncHandler(async (req, res) => {
  const orgId = req.params.id;
  try {
    let org = await prisma.organisation.findFirst({
      where: {
        id: orgId,
      },
    });
    let response = new ApiResponse(200, org);
    return res.json(response);
  } catch (error) {
    let response = new ApiError(500, error.message);
    return res.json(response);
  }
});

export default getOrganisation;
