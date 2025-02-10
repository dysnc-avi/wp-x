import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";
import ApiResponse from "../handlers/apiResponse.js";

const createNewOrganisation = asyncHandler(async (req, res) => {
  const { name, logoUrl } = req.body;
  const userId = req.query.u;
  try {
    const organisation = await prisma.organisation.create({
      data: {
        name: name,
        logoURL: logoUrl,
      },
    });
    await prisma.member.create({
      data: {
        org: {
          connect: {
            id: organisation.id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
        role: "ADMIN",
      },
    });
    let response = new ApiResponse(200, organisation.id);
    return res.json(response);
  } catch (error) {
    let response = new ApiResponse(500, error.message);
    return res.json(response);
  }
});

export default createNewOrganisation;
