export const insertNewUser = (req, res, error) => {
  try {
    //todo signUp process

    res.json({
      status: "success",
      message: "User signUp successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
