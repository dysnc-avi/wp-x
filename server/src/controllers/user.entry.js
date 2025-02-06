import asyncHandler from "../handlers/asyncHandler.js";
const userEntry = asyncHandler(async (req, res) => {
  return res.json({ status: 200, message: "Working" });
});

export default userEntry;
