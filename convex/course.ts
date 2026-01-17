import {query} from "./_generated/server"


export const getAllCourses = query({
    args: {},
    handler: async(ctx,args)=>{
        const c = await ctx.db.query("courses").collect()
        if(!c) throw new Error("Courses not found")
        return c
    }
})