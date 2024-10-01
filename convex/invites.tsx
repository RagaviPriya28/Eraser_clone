import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createInviteLink = mutation({
  args: {
      teamId: v.id('teams'),
      createdBy: v.string(),
      expiresAt: v.string(),
    },
    handler: async (ctx, args) => {
      // Check if the team exists in the 'teams' table (assuming you have a teams table)
      const team = await ctx.db.get(args.teamId);
  
      if (!team) {
        throw new Error('Invalid team ID');
      }
  
      const code = Math.random().toString(36).substring(2, 10); // Generate a unique code
      const result = await ctx.db.insert('inviteLinks', {
        ...args,
        code,
        usedBy: null,
        usedAt: null,
      });
  
      return { result, code };
    },
  });
  
export const getInviteLinks = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query('inviteLinks')
      .filter((q) => q.eq(q.field('teamId'), args.teamId))
      .order('desc')
      .collect();
    return result;
  },
});

export const getInviteLinkByCode = query({
  args: {
    code: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query('inviteLinks')
      .filter((q) => q.eq(q.field('code'), args.code))
      .first();
    return result;
  },
});

export const useInviteLink = mutation({
  args: {
    code: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const inviteLink = await ctx.db
      .query('inviteLinks')
      .filter((q) => q.eq(q.field('code'), args.code))
      .first();

    if (!inviteLink) {
      throw new Error('Invalid invite link');
    }

    if (inviteLink.usedBy) {
      throw new Error('Invite link already used');
    }

    if (inviteLink.expiresAt && new Date(inviteLink.expiresAt) < new Date()) {
      throw new Error('Invite link has expired');
    }

    const result = await ctx.db.patch(inviteLink._id, {
      usedBy: args.userId,
      usedAt: new Date().toISOString(),
    });

    // Add user to the team
    // Note: You might need to adjust this based on how your teams are structured
    const team = await ctx.db.get(inviteLink.teamId);
    if (team) {
      await ctx.db.patch(inviteLink.teamId, {
        members: [...(team.members || []), args.userId],
      });
    }

    return result;
  },
});

export const deleteInviteLink = mutation({
  args: {
    _id: v.id('inviteLinks'),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args._id);
    return { success: true, message: 'Invite link deleted successfully' };
  },
});

export const sendEmailInvite = mutation({
    args: { 
      teamId: v.string(), 
      inviterUserId: v.string(), 
      inviteeEmail: v.string() 
    },
    handler: async (ctx, args) => {
      console.log('Sending invite to:', args.inviteeEmail);
  
      // In a real implementation, you'd send an email and return some result
      return { success: true };
    },
  });