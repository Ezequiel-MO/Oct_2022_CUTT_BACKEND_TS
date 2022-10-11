import { S3 } from 'aws-sdk'

const s3Upload = async (file: Express.Multer.File) => {
  const s3 = new S3()

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${file.originalname}-${Date.now()}.png`,
    Body: file.buffer
  }
  // @ts-ignore
  return await s3.upload(param).promise()
}

export { s3Upload }
