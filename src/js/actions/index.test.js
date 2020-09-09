import { addArticle } from './index'

describe('Add article action test', () => {
    it('should create an action to add article', () => {
        const payload = 'test';

        const expectedAction = {
            type: 'ADD_ARTICLE',
            payload
        }
        expect(addArticle(payload)).toEqual(expectedAction)
    })
})