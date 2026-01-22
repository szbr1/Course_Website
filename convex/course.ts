import { v } from "convex/values"
import {query} from "./_generated/server"


export const getAllCourses = query({
    args: {},
    handler: async(ctx,args)=>{
        const c = await ctx.db.query("courses").collect()
        if(!c) throw new Error("Courses not found")
        return c
    }
})


export const getCourseById = query({
    args: {
        courseId: v.id("courses")
    },
    handler: async (ctx,args)=> {
        const course = await ctx.db.get(args.courseId)
        if(!course) {
            throw new Error("Course Not found")
        }
        return course
    }
})