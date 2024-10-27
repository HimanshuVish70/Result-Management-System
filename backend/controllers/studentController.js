// const Student = require('../models/Student');
// const ExcelJS = require('exceljs');

// // Upload marks from Excel
// exports.uploadMarks = async (req, res, next) => {
//   const { category } = req.params;
//   const file = req.file;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const workbook = new ExcelJS.Workbook();
//   await workbook.xlsx.load(file.buffer);
//   const worksheet = workbook.worksheets[0];

//   worksheet.eachRow(async (row, rowNumber) => {
//     if (rowNumber !== 1) {  // Skip the header row
//       const [studentId, marks] = row.values;

//       const student = await Student.findOne({ studentId });
//       if (student) {
//         student[category] = marks;
//         student.calculateTotal();
//         await student.save();
//       } else {
//         const newStudent = new Student({
//           studentId,
//           [category]: marks,
//         });
//         newStudent.calculateTotal();
//         await newStudent.save();
//       }
//     }
//   });

//   res.status(200).json({ message: 'Marks uploaded successfully' });
// };

// // Get student results
// exports.getResults = async (req, res) => {
//   const { studentId } = req.params;
//   const student = await Student.findOne({ studentId });

//   if (!student) {
//     return res.status(404).json({ message: 'Student not found' });
//   }

//   res.status(200).json(student);
// };

const Student = require('../models/Student');
const ExcelJS = require('exceljs');

// Upload marks from Excel
exports.uploadMarks = async (req, res, next) => {
  const { category } = req.params;
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(file.buffer);
  const worksheet = workbook.worksheets[0];

  worksheet.eachRow(async (row, rowNumber) => {
    if (rowNumber !== 1) { // Skip the header row
      const [studentId, marks] = row.values;
      console.log(`Processing row ${rowNumber}: ${studentId}, ${marks}`); // Log row data

      let student = await Student.findOne({ studentId });
      if (student) {
        student[category] = marks;
        student.calculateTotal();
        await student.save();
        console.log(`Updated student: ${studentId}`);
      } else {
        student = new Student({
          studentId,
          [category]: marks,
        });
        student.calculateTotal();
        await student.save();
        console.log(`Created new student: ${studentId}`);
      }
    }
  });

  res.status(200).json({ message: 'Marks uploaded successfully' });
};

// Get student results
exports.getResults = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    console.log('Fetching results for Student ID:', studentId);  // Add this to check if studentId is received
    const student = await Student.findOne({ studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.calculateTotal(); // Ensure the total is calculated if required
    res.json(student);
  } catch (error) {
    console.error('Error fetching student results:', error);
    res.status(500).json({ message: 'Server error' });
  }
};