const path = require("path");
const os = require("os");
const core = require("@actions/core");
const tc = require("@actions/tool-cache");
const { getDownloadObject } = require("./lib/utils");

async function setup() {
  try {
    // Get version of tool to be installed
    const version = core.getInput("version");

    // install dir for sst
    const installDir = path.join(os.homedir(), ".sst", "bin");

    // Download the specific version of the tool, e.g. as a tarball/zipball
    const download = getDownloadObject(version);
    console.log(`Downloading ${download.url}`);
    const pathToTarball = await tc.downloadTool(download.url);
    console.log(`Downloaded tarball to ${pathToTarball}`);
    // Extract the tarball/zipball onto host runner
    const extract = tc.extractTar;
    const pathToCLI = await extract(pathToTarball, installDir, "xz");

    console.log(`Extracted tarball to ${pathToCLI}`);
    const sstPath = pathToCLI;
    // Expose the tool by adding it to the PATH
    core.addPath(sstPath);
    console.log(`Added ${sstPath} to PATH`);
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup;

if (require.main === module) {
  setup();
}
