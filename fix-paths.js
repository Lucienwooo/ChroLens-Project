const fs = require('fs');
const path = require('path');

// Files to fix
const filesToFix = [
  {
    file: 'src/app/mimic/tutorial/page.tsx', replacements: [
      { from: /href="\/"/g, to: 'href="/mimic"' },
      { from: /href="\/tutorial/g, to: 'href="/mimic/tutorial' }
    ]
  },
  {
    file: 'src/app/mimic/tutorial/basic/page.tsx', replacements: [
      { from: /href="\/tutorial/g, to: 'href="/mimic/tutorial' }
    ]
  },
  {
    file: 'src/app/mimic/tutorial/advanced/page.tsx', replacements: [
      { from: /href="\/tutorial/g, to: 'href="/mimic/tutorial' }
    ]
  },
  {
    file: 'src/app/mimic/tutorial/examples/page.tsx', replacements: [
      { from: /href="\/tutorial/g, to: 'href="/mimic/tutorial' }
    ]
  },
  {
    file: 'src/app/mimic/page.tsx', replacements: [
      { from: /href="\/tutorial"/g, to: 'href="/mimic/tutorial"' }
    ]
  }
];

let successCount = 0;
let errorCount = 0;

filesToFix.forEach(({ file, replacements }) => {
  const filePath = path.join(__dirname, file);

  try {
    // Read file as buffer first to preserve encoding
    const buffer = fs.readFileSync(filePath);
    let content = buffer.toString('utf8');

    // Apply all replacements
    replacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });

    // Write back as UTF-8 with BOM
    const utf8BOM = Buffer.from([0xEF, 0xBB, 0xBF]);
    const contentBuffer = Buffer.from(content, 'utf8');
    fs.writeFileSync(filePath, Buffer.concat([utf8BOM, contentBuffer]));

    console.log(`✅ Fixed: ${file}`);
    successCount++;
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\n✅ Success: ${successCount} files`);
if (errorCount > 0) {
  console.log(`❌ Errors: ${errorCount} files`);
}
