import {
    describe,
    expect,
    it,
    test
} from 'vitest';
describe('测试1', () => {
    test('111', async () => {
        let comp = await import('../src/components/HelloWorld.vue');
        expect(comp).toBeDefined();
    });
    test('22', async () => {
        let comp = await import('../src/components/papa.vue');
        expect(comp).toBeUndefined();
    });
}, {

});
describe('测试2', () => {
    test('saasas', async () => {
        let comp = await import('../src/components/HelloWorld.vue');
        expect(comp).toBeDefined();
    });
    test('acascacs', async () => {
        let comp = await import('../src/components/papa.vue');
        expect(comp).toBeUndefined();
    });
}, {

});