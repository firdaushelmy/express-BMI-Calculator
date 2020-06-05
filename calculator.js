const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// bmi
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index');
});

app.post('/', function (req, res) {
  var weightCalculate = Number(req.body.weight)
  var weightUnit = req.body.weightMeasurement
  var heightCalculate = Number(req.body.height)
  var heightUnit = req.body.heightMeasurement

  if (weightUnit === 'kg' && heightUnit === 'cm') {
    var cmToM2Conversion = heightCalculate / 100
    heightCalculate = cmToM2Conversion * cmToM2Conversion
    var resultKgCm = weightCalculate / heightCalculate

    res.send("Your BMI is " + resultKgCm + "")
  }

  else if (weightUnit === 'kg' && heightUnit === 'ft') {
    var cmToM2Conversion = heightCalculate / 3.281
    heightCalculate = cmToM2Conversion * cmToM2Conversion
    var resultKgCm = weightCalculate / heightCalculate

    res.send("Your BMI is " + resultKgCm + "")
  }

  else if (weightUnit === 'lb' && heightUnit === 'cm') {
    var cmToM2Conversion = heightCalculate / 100
    heightCalculate = cmToM2Conversion * cmToM2Conversion
    var lbToKg = weightCalculate / 2.205
    var resultKgCm = lbToKg / heightCalculate

    res.send("Your BMI is " + resultKgCm + "")
  }

  else if (weightUnit === 'lb' && heightUnit === 'ft') {
    var cmToM2Conversion = heightCalculate / 3.281
    heightCalculate = cmToM2Conversion * cmToM2Conversion
    var lbToKg = weightCalculate / 2.205
    var resultKgCm = lbToKg / heightCalculate

    res.send("Your BMI is " + resultKgCm + "")
  }
})

const port = process.env.PORT || 3000
app.listen(port, function (req, res) {
  console.log(`server ${port} is running`);
});
