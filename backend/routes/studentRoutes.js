// const express = require('express');
// const router = express.Router();
// const studentController = require('../controllers/studentController');
// const multer = require('multer');
// const upload = multer();

// router.post('/upload/:category', upload.single('file'), studentController.uploadMarks);
// router.get('/results/:studentId', studentController.getResults);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Student = require('./models/Student');  // Assuming you have a Student model

// // Route to get student results by studentId
// router.get('/students/results/:studentId', async (req, res) => {
//     try {
//         const student = await Student.findOne({ studentId: req.params.studentId });
//         if (!student) {
//             return res.status(404).json({ message: 'Student not found' });
//         }
//         res.json(student);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const multer = require('multer');
const upload = multer();

router.post('/upload/:category', upload.single('file'), studentController.uploadMarks);
router.get('/results/:studentId', studentController.getResults);

module.exports = router;


