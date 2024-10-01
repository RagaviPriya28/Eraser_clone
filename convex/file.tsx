import {v} from 'convex/values';
import { mutation, query } from './_generated/server';

export const createFile=mutation({
    args:{
        fileName:v.string(),
        teamId:v.string(),
        createdBy:v.string(),
        archive:v.boolean(),
        document:v.string(),
        whiteboard:v.string()
    },
    handler:async(ctx, args) =>{
        const result=await ctx.db.insert('files',args);
        return result;
    },
})

export const getFiles=query({
    args:{
        teamId:v.string()
    },
    handler:async(ctx, args)=> {
        const result=ctx.db.query('files')
        .filter(q=>q.eq(q.field('teamId'),args.teamId))
        .order('desc')
        .collect();

        return result;
    }
})

export const updateDocument = mutation({
    args: {
      _id: v.id('files'),
      document: v.string()
    },
    handler: async (ctx, args) => {
      console.log('Updating document with id:', args._id); // Debugging log
      console.log('New document content:', args.document); // Debugging log
  
      const result = await ctx.db.patch(args._id, { document: args.document });
      console.log('Document updated:', result); // Debugging log
      return result;
    }
  });

  export const updateWhiteboard=mutation({
    args:{
        _id:v.id('files'),
        whiteboard:v.string()
    },
    handler:async(ctx, args) =>{
        const result =await ctx.db.patch(args._id,{whiteboard:args.whiteboard});
        return result;
    },
})

  export const getFileById=query({
    args:{
        _id:v.id('files')
    },
    handler:async(ctx, args)=> {
        const result=await ctx.db.get(args._id);
        return result;
    },
})

export const deleteFile = mutation({
    args: {
        _id: v.id('files')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.delete(args._id);
        return { success: true, message: 'File deleted successfully' }; // Structured response
    },
});

export const searchFiles = query({
  args: {
    fileName: v.string(),
  },
  handler: async (ctx, args) => {
    const {fileName } = args;

    // Fetch files that match the teamId and apply a secondary filter for fileName
    const result = await ctx.db.query("files")
      .filter(q => q.eq(q.field("fileName"), fileName)) // Filter by file name (using startsWith)
      .collect();

    return result;
  },
});
