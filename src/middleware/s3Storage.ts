import S3 from 'aws-sdk/clients/s3.js'
import multer from 'multer'
import multerS3 from 'multer-s3'
import dotenv from 'dotenv'

dotenv.config({ path: '../config.env' })

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

const s3Storage = multerS3({
  // @ts-ignore
  s3,
  // @ts-ignore
  bucket: process.env.S3_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname })
  },
  key: function (req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}.png`)
  }
})

const uploadS3 = multer({ storage: s3Storage })

export default uploadS3
