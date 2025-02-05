const asyncHandler = (fn) => async (req, res, next) => {
  try {
    fn(req, res, next);
  } catch (error) {
    res.json({
      status: 500,
      message: "Internal server Error",
    });
  }
};

export default asyncHandler;
