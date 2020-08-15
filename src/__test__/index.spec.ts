import * as ax from "../axios"
import { isRight } from 'fp-ts/lib/Either'

describe('calls', () => {

    type Todo = {
        userId: number
        id: number
        title: string
        completed: boolean
    }

    let call: ax.Ret<Todo>

    beforeAll(async () => {
        call = await ax.request<Todo>({ url: "https://jsonplaceholder.typicode.com/todos/1", method: "GET" })
    });

    it('should be 200', async () => {
        if (isRight(call)) {
            expect(call.right.status).toEqual(200)
        }
    })

    it('userId should be 1', async () => {
        if (isRight(call)) {
            expect(call.right.data.userId).toEqual(1)
        }
    })

});
