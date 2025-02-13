import ApiError from "../handlers/apiError.js";
import ApiResponse from "../handlers/apiResponse.js";
import asyncHandler from "../handlers/asyncHandler.js";
import prisma from "../prisma.js";

const createTask = asyncHandler(async (req, res) => {
  const { name, endTime, startTime, type, memberId } = req.body;
  const workspace = req.query.w;
  try {
    let newTask = await prisma.task.create({
      data: {
        name,
        endTime,
        startDate: startTime,
        type,
        member: {
          connect: {
            id: memberId,
          },
        },
        workspace: {
          connect: {
            id: workspace,
          },
        },
      },
    });
    let response = new ApiResponse(200, newTask);
    return res.json(response);
  } catch (error) {
    console.log(error);
    let response = new ApiError(500, error.message);
    return res.json(response);
  }
});

export default createTask;
