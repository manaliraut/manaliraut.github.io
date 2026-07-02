const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");

const artifacts = [
  "index.html",
  "favicon.ico",
  "manifest.json",
  "robots.txt",
  "output.css",
  "asset-manifest.json",
  "static",
  "assets",
];

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }

  fs.copyFileSync(src, dest);
}

if (!fs.existsSync(buildDir)) {
  console.error("Build directory not found. Run `react-scripts build` first.");
  process.exit(1);
}

for (const artifact of artifacts) {
  const src = path.join(buildDir, artifact);
  const dest = path.join(rootDir, artifact);

  if (!fs.existsSync(src)) {
    console.warn(`Skipping missing artifact: ${artifact}`);
    continue;
  }

  if (fs.statSync(src).isDirectory()) {
    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { recursive: true, force: true });
    }
    copyRecursive(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }

  console.log(`Copied ${artifact}`);
}

console.log("Static site copied to repo root.");
