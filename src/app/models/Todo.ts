export class Todo {
    public title: string
    public status: boolean
    public modificationDetails: {
        created_on: Date,
        modified_on: Date
    }
    public _id?: string
    public priority: number
}