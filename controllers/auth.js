import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    //mã hoá mật khẩu bằng hàm băm
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send('User has been created.');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    // tìm 1 lần và tìm theo email
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json('User not found!');

    // Sử dụng thư viện bcrypt so sánh mật khẩu nhập vào với mk trong db có giống nhau hay không
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) return res.status(400).json('Wrong password or email!');

    //nếu đúng là admin thì gửi mã token về, ở postman gọi là mã cookies
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie('access_token');
  res.status(200).send('User has been logged out.');
};
