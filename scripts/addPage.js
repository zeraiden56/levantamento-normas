// scripts/addPage.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Helper to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Boilerplate template for TSX pages
const pageTemplate = (name) => `
import React from "react";

const ${name}: React.FC = () => {
  return <div className="p-4 text-lg font-semibold">${name} Page</div>;
};

export default ${name};
`;

// Function to add route to routes.js
const updateRoutesFile = (name) => {
  const routesPath = path.join(__dirname, "../src/routes.js");
  const newRoute = `  { title: "${name}", url: "/${name.toLowerCase().replace(/\s+/g, "-")}", component: ${name} },`;

  let fileContent = fs.readFileSync(routesPath, "utf-8");

  // Check for duplicate import
  if (fileContent.includes(`import ${name} from "./pages/${name}";`)) {
    console.log(`⚠️ Route for ${name} already exists.`);
    return;
  }

  // Insert import
  const importStatement = `import ${name} from "./pages/${name}";\n`;
  fileContent = importStatement + fileContent;

  // Insert route
  const routesArrayIndex = fileContent.indexOf("export const routes = [");
  const routesArrayEndIndex = fileContent.indexOf("];", routesArrayIndex);
  fileContent = `${fileContent.slice(0, routesArrayEndIndex)}\n${newRoute}${fileContent.slice(routesArrayEndIndex)}`;

  fs.writeFileSync(routesPath, fileContent, "utf-8");
  console.log(`✅ Updated routes.js with ${name} route.`);
};

// Main function to create a new page
const createNewPage = (name) => {
  const pagesDir = path.join(__dirname, "../src/pages");
  const pagePath = path.join(pagesDir, `${name}.tsx`);

  if (fs.existsSync(pagePath)) {
    console.log(`❌ Page ${name} already exists.`);
    return;
  }

  // Create new .tsx file
  fs.writeFileSync(pagePath, pageTemplate(name), "utf-8");
  console.log(`✅ Created ${name}.tsx in pages folder.`);

  // Update routes.js
  updateRoutesFile(name);
};

// CLI usage: node scripts/addPage.js "Normas Compiladas"
const [, , ...args] = process.argv;
const pageName = args.join(" ");

if (!pageName) {
  console.log("❌ Please provide a page name.");
  process.exit(1);
}

createNewPage(pageName);
