const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const filePath = "./data/wish.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

const qst = (enterQst) => {
  return new Promise((resolve, rejects) => {
    rl.question(enterQst, (answ) => {
      resolve(answ);
    });
  });
};

const SimpanContact = async (nama, email, noHp) => {
  const contact = { nama, email, noHp };

  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);
  contacts.push(contact);

  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
  console.log("terimakasih sudah memasukan data");
  rl.close();
};

module.exports = { qst, SimpanContact };
