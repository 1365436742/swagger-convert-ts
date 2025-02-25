const fs = require('fs');
const path = require('path');

// 获取 workspaces 目录
const workspacesDir = path.join(__dirname, '../packages');

// 读取 workspaces 目录下的所有子包
fs.readdirSync(workspacesDir).forEach((packageDir) => {
    const packagePath = path.join(workspacesDir, packageDir, 'package.json');
    if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const [major, minor, patch] = packageJson.version.split('.');
        // 增加 patch 版本号
        packageJson.version = `${major}.${minor}.${parseInt(patch) + 1}`;
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
    }
});