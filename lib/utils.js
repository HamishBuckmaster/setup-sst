const os = require("os");

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function getArch() {
  const arch = os.arch();
  const mappings = {
    x32: "386",
    x64: "x86_64",
  };
  return mappings[arch] || arch;
}

function getFilename() {
  let filename;
  const platform = os.platform();

  switch (platform) {
    case "linux":
      filename = `sst-linux-${getArch()}.tar.gz`;
      break;
    case "darwin":
      filename = `sst-mac-${getArch()}.tar.gz`;
      break;
    default:
      throw new Error(`Unsupported OS: ${platform}`);
  }

  return filename;
}

function getDownloadObject(version) {
  const filename = getFilename();
  let url = "";

  if (version === "latest") {
    url = `https://github.com/sst/sst/releases/latest/download/${filename}`;
  } else {
    url = `https://github.com/sst/sst/releases/download/v${version}/${filename}`;
  }

  return {
    url,
  };
}

module.exports = { getDownloadObject };
