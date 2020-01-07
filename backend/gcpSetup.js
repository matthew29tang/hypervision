var fs=require('fs');
fs.writeFile(process.env.GCP_KEY_FILE, process.env.GCP_CRED, (err) => {});
console.log("Google cloud credentials written to " + process.env.GCP_KEY_FILE);