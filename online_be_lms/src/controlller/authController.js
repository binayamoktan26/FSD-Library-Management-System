export const insertNewUser = (req, res, error) => {
  try {
    console.log(req.body);
    const { password } = req.body;
    

    //todo signUp process
    // receive the user data

    // encrypt the password
    // insert user into DB

    res.json({
      status: "success",
      message: "User signUp successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
