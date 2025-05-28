// /schemas/video.ts
export default {
  name: 'video',
  title: 'Game Preview Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Title',
      type: 'string',
    },
    {
      name: 'videoFile',
      title: 'Upload Video',
      type: 'file',
      options: {
        accept: 'video/mp4, video/webm',
      },
    },
  ],
};
