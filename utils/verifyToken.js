import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json('You are not authenticated!');
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(403).json('Token is not valid!');
    req.user = user;

    //sử dụng next để sau khi thực hiện trong code hàm này thì nhảy sang code của hàm tiếp theo
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    //Khi người dùng đã đăng nhập (đã có mã cookies) gửi yêu cầu đến bằng với :id params của họ
    //tức là tự bản thân họ muốn xoá tài khoản của họ thì duyệt
    //nếu là người quản trị muốn xoá tài khoản của user cũng duyệt luôn
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json('You are not authorized!');
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json('You are not authorized!');
    }
  });
};
