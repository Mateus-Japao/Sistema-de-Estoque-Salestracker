

import AWS from 'aws-sdk';
import { uuid } from "uuidv4";


const s3 = new AWS.S3({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region:process.env.AWS_REGION,
});

export const uploadToS3 = async (file) => {
  const fileKey = `${uuid()}-${file.name}`;

  // Convertendo Blob para Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
    Body: buffer, // Agora passando o Buffer ao invés do Blob
    ContentType: file.type,
    ACL: 'public-read',
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location; // URL pública da imagem no S3
  } catch (err) {
    console.error('Error uploading to S3:', err);
    throw new Error('Failed to upload image to S3!');
  }
};

