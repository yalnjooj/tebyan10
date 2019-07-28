const express = require('express');
const multer = require('multer');
const router = express.Router();
const NewInstitute = require('../models/newInsSchema');
const path = require('path');


const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "application/pdf": "pdf"
};

// const storage = multer({storage: multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     let error = new Error("Invalid mime type");

//     if (isValid) {
//       error = null;
//     }
//     cb(error, "uploadedFilse/newOpnInsImg");

//     if (req.files[1] == undefined) {
//       cb(new Error("لا توجد ملفات"), false);
//       console.log('لا توجد ملفاتdestination');
//     }
//   },
//   filename: (req, file, cb) => {
//     const name = file.originalname
//       .toLowerCase()
//       .split(" ")
//       .join("-");

//       if (req.files[1] == undefined) {
//         cb(new Error("لا توجد ملفات"), false);
//         console.log('لا توجد ملفاتfilename');
//       }else{
//         cb(null, Date.now() + "-" + name);

//       }

//     // const ext = MIME_TYPE_MAP[file.mimetype];
//   },
//   fileFilter: (req, file, cb)=> {
//     if (req.files[1] == undefined) {
//       cb(new Error("لا توجد ملفات"), false);
//       console.log('لا توجد ملفاتfileFilter');
//     }
// }
// })


// });

//var methodologyLetter = multer({ storage: storage }).single('methodologyLetter');
//var methodologyReport = multer({ storage: storage }).single('methodologyReport');
// multer({ storage: storage }).single('methodologyLetter')


router.post('/newInstitute', (req, res, next) => {
  const url = `${req.protocol}://${req.get('host')}`;

  function ReportPath(url, ReportPath) {
    if (ReportPath) {
      return ReportPath = `${url}/uploadedFilse/newOpnInsImg/${ReportPath.path.split(path.sep)[2]}`;
    } else {
      return ReportPath = 'لا توجد صورة!';
    }
  }



  const newInsSchema = new NewInstitute({
    instituteName: req.fields.instituteName,
    licensOfInstitute: req.fields.licensOfInstitute,
    emailOfInstitute: req.fields.emailOfInstitute,
    areas: req.fields.areas,
    cities: req.fields.cities,
    nameOfTheInstituteDirector: req.fields.nameOfTheInstituteDirector,
    numberOfTheInstituteDirector: req.fields.numberOfTheInstituteDirector,
    digitsOfTeachersInInstitute: req.fields.digitsOfTeachersInInstitute,
    digitsOfClassesInInstitute: req.fields.digitsOfClassesInInstitute,
    digitsOfWomensInstitutes: req.fields.digitsOfWomensInstitutes,
    methodologyLetter: `${url}/uploadedFilse/newOpnInsImg/${req.files.methodologyLetter.path.split(path.sep)[2]}`,
    // ما اسم المنهجية المطبقة؟
    isApplicableMethodology: req.fields.isApplicableMethodology,
    nameOfApplicableMethodology: req.fields.nameOfApplicableMethodology,
    digitsOfYearsOfApplication: req.fields.digitsOfYearsOfApplication,
    digitsOfBeneficiariesOfTheMethodology: req.fields.digitsOfBeneficiariesOfTheMethodology,
    digitsOfClassroomsForKids: req.fields.digitsOfClassroomsForKids,
    numberOfCustomClassroomsForKids: req.fields.numberOfCustomClassroomsForKids,
    methodologyReport: ReportPath(url, req.files.methodologyReport),

    // بنين
    isBoys: req.fields.isBoys,
    digitsOfTeachersOfboysForMethodology: req.fields.digitsOfTeachersOfboysForMethodology,
    digitsOfBoysStudentsInTheInstitute: req.fields.digitsOfBoysStudentsInTheInstitute,

    // بنات
    isGirls: req.fields.isGirls,
    digitsOfTeachersOfgirlsForMethodology: req.fields.digitsOfTeachersOfgirlsForMethodology,
    digitsOfGirlsStudentsInTheInstitute: req.fields.digitsOfGirlsStudentsInTheInstitute,

    // التاريخ الاسلامي
    creationDateAR: req.fields.creationDateAR

  });




 // console.log(newInsSchema);

  newInsSchema.save().then(resDB => {
    res.status(201).json({
      message: 'تم إرسال طلبك بنجاح'
    });
  });

});





module.exports = router;
