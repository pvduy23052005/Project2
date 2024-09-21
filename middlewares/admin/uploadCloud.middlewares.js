// Nhung file can dung . 
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
// CAU HINH CHO cloudinary .

cloudinary.config({
   cloud_name: "djzxfopoi",
   api_key: "421895287111329",
   api_secret: "A6sbd5FZeT3DYBZwgymntbKBzmM"// Click 'View API Keys' above to copy your API secret
});

module.exports.uploadCloud = async (req, res, next) => {
   if (req.file) {// neu co up anh len . 
      let streamUpload = (req) => {
         return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
               (error, result) => {
                  if (result) {
                     resolve(result);
                  } else {
                     reject(error);
                  }
               }
            );
            streamifier.createReadStream(req.file.buffer).pipe(stream);
         });
      };
      async function upload(req) {
         let result = await streamUpload(req);
         // Cap nhat bien 'hinhAnh'
         req.body[req.file.fieldname] = result.url;
         console.log(result);
         next();
      }
      upload(req);
   } else {// con khong thi chat tiep . 
      next();
   }
}