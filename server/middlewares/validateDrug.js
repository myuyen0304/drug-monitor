function validateDrugInput(req, res, next) {
  const { name, dosage } = req.body;
  // Ép kiểu các trường số
  const card = Number(req.body.card);
  const pack = Number(req.body.pack);
  const perDay = Number(req.body.perDay);

  // a. Name phải dài hơn 5 ký tự
  if (!name || name.length <= 5) {
    return res.status(400).json({ message: "Tên thuốc phải dài hơn 5 ký tự." });
  }

  // b. Dosage phải đúng định dạng XX-morning,XX-afternoon,XX-night (X là số)
  const dosageRegex = /^\d+-morning,\d+-afternoon,\d+-night$/;
  if (!dosage || !dosageRegex.test(dosage)) {
    return res.status(400).json({
      message:
        "Dosage phải theo định dạng XX-morning,XX-afternoon,XX-night (X là số).",
    });
  }

  // c. Card phải lớn hơn 1000
  if (isNaN(card) || card <= 1000) {
    return res.status(400).json({ message: "Card phải lớn hơn 1000." });
  }

  // d. Pack phải lớn hơn 0
  if (isNaN(pack) || pack <= 0) {
    return res.status(400).json({ message: "Pack phải lớn hơn 0." });
  }

  // e. PerDay phải lớn hơn 0 và nhỏ hơn 90
  if (isNaN(perDay) || perDay <= 0 || perDay >= 90) {
    return res
      .status(400)
      .json({ message: "PerDay phải lớn hơn 0 và nhỏ hơn 90." });
  }

  next();
}

module.exports = validateDrugInput;
