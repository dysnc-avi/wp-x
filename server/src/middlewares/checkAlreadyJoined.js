import ApiError from "../handlers/apiError.js";
import prisma from "../prisma.js";

let checkJoined = async (req, res, next) => {
  const userId = req.cookies.userId;
  const orgId = req.params.id;

  let findMember = await prisma.user.findFirst({
    where: {
      id: userId,
      memberRefs: {
        every: {
          orgId,
        },
      },
    },
  });

  if (findMember) {
    let response = new ApiError(403, "You are already joined");
    return res.json(response);
  } else {
    next();
  }
};

export default checkJoined;
