import CVForm from '../model/CVForm.js';

export const createCVForm = async (req, res) => {
  const newCVForm = new CVForm(req.body);
  try {
    const savedCvForm = await newCVForm.save();
    res.status(200).json(savedCvForm);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCVForm = async (req, res) => {
  try {
    await CVForm.findByIdAndDelete(req.params.id);
    res.status(200).json('CVForm has been deleted.');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteAllCVForms = async (req, res) => {
  try {
    const deletedCVForms = await CVForm.deleteMany({});
    res.status(200).json(`Deleted ${deletedCVForms.deletedCount} CVForms.`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCVForm = async (req, res) => {
  try {
    const cvForms = await CVForm.find();
    res.status(200).json(cvForms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const filterCVFormByType = async (req, res) => {
  const typeCV = req.body.typeCV;
  let query = {};

  if (typeCV !== '') {
    query = { typeCV: typeCV };
  }

  try {
    const cvForms = await CVForm.find(query);
    res.status(200).json(cvForms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
