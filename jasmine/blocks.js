describe('Some', () => {
    beforeAll(() => {
        console.log("Im in b4 all");
    })
    beforeEach(() => {
        console.log("Im in b4 each all");
    })
    afterAll(() => {
        console.log("Im in after all");
    })
    afterEach(() => {
        console.log("Im in after each");
    })

    xit('Test2', () => {
        console.log('Test2');
    })
    xit('Test1', () => {
        console.log('Test1');
    })
    it('Test0', () => {
        let a = [9, 7, 6, 8, 6]
        let set = new Set(a)
        console.log(set);
        console.log('test0');

        // let a;
        // expect(a).toBeUndefined()
        // expect(a).toContain('ey')
        // expect(a).toMatch('\\s{0,3}')

        // expect(true).not.toBe(true)
        // try {
        // } catch (error) {
        //     console.log(error);

        // }

    })

})