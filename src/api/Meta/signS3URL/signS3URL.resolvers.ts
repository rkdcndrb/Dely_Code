import aws from "aws-sdk";
import { SignS3URLResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const BUCKET_NAME = "dely-picture";

interface IArgs {
  fileName: string;
  fileType: string;
}

const resolvers: Resolvers = {
  Mutation: {
    signS3URL: async (_, args: IArgs, __): Promise<SignS3URLResponse> => {
      const s3 = new aws.S3({
        signatureVersion: "v4",
        region: "ap-southeast-1",
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_KEY || ""
      });

      const s3Params = {
        Bucket: BUCKET_NAME,
        Key: args.fileName,
        Expires: 60,
        ContentType: args.fileType,
        ACL: "public-read"
      };

      try {
        const signedUrl = await s3.getSignedUrl("putObject", s3Params);
        const fileUrl = `https://${BUCKET_NAME}.s3.amazonaws.com/${
          args.fileName
        }`;
        return {
          ok: true,
          error: null,
          signedUrl,
          fileUrl
        };
      } catch (error) {
        return {
          ok: false,
          error,
          signedUrl: null,
          fileUrl: null
        };
      }
    }
  }
};

export default resolvers;
