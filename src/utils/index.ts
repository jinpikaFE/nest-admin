import * as fs from 'fs';

// base64转文件
export const base64ToFile = (imgData, path) => {
  const base64Data = imgData.replace(/^data:image\/\w+;base64,/, '');
  const dataBuffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(path, dataBuffer, ((err: any) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  }) as fs.WriteFileOptions);
  return true;
};

export const fs_delete = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
  return true;
};
