const fs = require('fs').promises;

fs.readdir(__dirname)
.then(files => {
    return Promise.all(
        files.map( async filemane =>{
            const stats =await fs.stat(filemane);
            return {
                Name: filemane,
                Size: stats.size,
                Date: stats.mtime,
            };
        }),
    );
})
.then(result => console.table(result))