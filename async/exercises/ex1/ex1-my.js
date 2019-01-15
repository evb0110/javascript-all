function fakeAjax(url, cb) {
  var fake_responses = {
    "file1": "The first text",
    "file2": "The second text",
    "file3": "The third text",
    "file4": "The fourth text",
    "file5": "The fifth text",
    "file6": "The sixth text"
  };
  var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text, style) {
  style = style || '';
  console.log(text, style);
}

// **************************************
// The old-n-busted callback way

const filenames = ["file1", "file2", "file3","file4", "file5", "file6"];
const responses = {};

function getFile(file) {
  fakeAjax(file, function (text) {
    output(`%c ...loaded ${file}`, 'color: green');
    if (!responses[file]) {
      responses[file] = text;
    }

    for (let i = 0; i < filenames.length; i++) {
      if (filenames[i] in responses) {
        if (typeof responses[filenames[i]] == "string") {
          output('%c ' + responses[filenames[i]], 'background: red; color: white; font-weight: bold; font-size: 14px; display: block');
          responses[filenames[i]] = false;
        }
      } else {
        break;
      }
    }
  });
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
getFile("file4");
getFile("file5");
getFile("file6");