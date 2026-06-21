import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getRequestContext } from '@cloudflare/next-on-pages';

export async function uploadImageToR2(file: File): Promise<string> {
  const { env } = getRequestContext();
  
  const accountId = (env as any).CLOUDFLARE_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID;
  const accessKeyId = (env as any).R2_ACCESS_KEY_ID || process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = (env as any).R2_SECRET_ACCESS_KEY || process.env.R2_SECRET_ACCESS_KEY;
  const bucketName = (env as any).R2_BUCKET_NAME || process.env.R2_BUCKET_NAME;
  const publicUrl = (env as any).R2_PUBLIC_URL || process.env.R2_PUBLIC_URL;

  if (!accountId || !accessKeyId || !secretAccessKey || !bucketName || !publicUrl) {
    throw new Error('R2 credentials are not fully configured in environment variables.');
  }

  const s3Client = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const buffer = await file.arrayBuffer();
  
  // Safe extract extension
  const fileNameParts = file.name.split('.');
  const fileExtension = fileNameParts.length > 1 ? fileNameParts.pop() : 'bin';
  
  // Generate unique filename
  const fileName = `uploads/${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExtension}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: new Uint8Array(buffer),
      ContentType: file.type || 'application/octet-stream',
    })
  );

  const baseUrl = publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl;
  return `${baseUrl}/${fileName}`;
}