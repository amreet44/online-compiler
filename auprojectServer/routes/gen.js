const express = require("express");
const generateFile = require("../generation/generateFile");
const executeCpp = require("../generation/executeCpp");

const router = express.Router();

router.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (!code) {
    res.status(404).json({ success: false, error: "Empty Code" });
  }

  try {
    const filePath = await generateFile(language, code);
    console.log("File generated at:", filePath);

    const output = await executeCpp(filePath);
    console.log("C++ code executed successfully.");

    res.json({ filePath, output });
  } catch (error) {
    console.error("Error:", error);

    let errorMessage = "An error occurred";

    if (error.code === "FILE_GENERATION_ERROR") {
      errorMessage = "Error generating the file.";
    } else if (error.code === "CPP_EXECUTION_ERROR") {
      errorMessage = "Error executing the C++ code.";
    }

    res.status(500).json({ error: errorMessage });
  }
});

module.exports = router;
