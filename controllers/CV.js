import CV from '../model/CV.js';

export const uploadAvatarCV = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.data, {
      folder: 'cvUser' // Thay 'cvUser' bằng tên thư mục bạn muốn lưu trữ ảnh trong Cloudinary
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createCV = async (req, res) => {
  const newCV = new CV(req.body);
  try {
    const savedCv = await newCV.save();
    res.status(200).json(savedCv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatedCV = async (req, res) => {
  try {
    const updatedCV = await CV.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedCV);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCV = async (req, res) => {
  try {
    await CV.findByIdAndDelete(req.params.id);
    res.status(200).json('CV has been deleted.');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteAllCVs = async (req, res) => {
  try {
    const deletedCVs = await CV.deleteMany({});
    res.status(200).json(`Deleted ${deletedCVs.deletedCount} CVs.`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getByIDCV = async (req, res) => {
  try {
    const cv = await CV.findById(req.params.id);
    res.status(200).json(cv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getByEmailCV = async (req, res) => {
  try {
    const cv = await CV.findOne({ email: req.params.email });
    res.status(200).json(cv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCVsByAuthorMail = async (req, res) => {
  try {
    const authorMail = req.body.authorMail; // lấy giá trị authorMail từ body
    const cvs = await CV.find({ authorMail }); // tìm tất cả CV có authorMail như truyền vào
    res.status(200).json(cvs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCV = async (req, res) => {
  try {
    const cvs = await CV.find();
    res.status(200).json(cvs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
