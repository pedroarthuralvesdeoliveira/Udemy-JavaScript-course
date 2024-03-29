const fs = require('fs').promises
const path = require('path')

/**
 * __dirname é o diretório atual
 */

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(err => console.log(err));

async function readdir(rootDir)
{
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir)
{
    for (let file of files) 
    {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        if (stats.isDirectory())
        {
            readdir(fileFullPath);
            continue;
        }
        console.log(file, stats.isDirectory());
    }
}

readdir('C:/Users/pa/Desktop/JavaScript-Course');