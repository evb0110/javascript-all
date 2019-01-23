const util = require("util");

const fakeAjax = (filename, cb) => {
  return new Promise((resolve, reject) => {
    delay = (Math.round(Math.random() * 1e4) % 8e3) + 1e3;
    setTimeout(() => {
      resolve(cb(`data from ${filename}`));
    }, delay);
  });
};

// const fakeAjaxP = util.promisify(fakeAjax);

const output = t => console.log(t);

fakeAjax("file1", output).then(() => console.log("done!"));
