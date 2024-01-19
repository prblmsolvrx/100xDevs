const z = require("zod")

const todoSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    tag: z.string().min(1)
})
const updatedTodoSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    tag: z.string().min(1).optional(),
    completed: z.boolean().optional()
})
module.exports = {
    todoSchema,
    updatedTodoSchema
}