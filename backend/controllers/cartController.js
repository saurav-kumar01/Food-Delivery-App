import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
  //find userData by userId
  //find cartData from userData
  //if cartData does not have item => add itemId = 1
  //else itemId +=1
  //find the userId from the userModel and update the cartData

  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error: while items are added to cart",
    });
  }
};

//remove items from user cart
const removeFromCart = async (req, res) => {
  //take the userData through userId
  //take the cartData from userData
  //if cartData have the item => remove the item by 1
  //update the cartData's item in the userModel

  try {
    let userData = await userModel.findById(req.body.userId); //userId take through the authMiddleware
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error: while remove the cart item" });
  }
};

//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId); //userId take by the middleware
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error: while get the cart data" });
  }
};

export { addToCart, removeFromCart, getCart };
