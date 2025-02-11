import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";
import ApiError from "../handlers/apiError.js";
import ApiResponse from "../handlers/apiResponse.js";

const createWorkspace = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const orgId = req.query.o;
  try {
    const workspace = await prisma.workspace.create({
      data: {
        name,
        org: {
          connect: {
            id: orgId,
          },
        },
      },
    });
    let response = new ApiResponse(200, workspace.id);
    return res.json(response);
  } catch (error) {
    let response = new ApiError(500, error.message);
    return res.json(response);
  }
});

export default createWorkspace;
