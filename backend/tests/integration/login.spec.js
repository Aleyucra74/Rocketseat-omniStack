const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('LOGIN', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
       await connection.destroy();
    });

    it('should be able to LOGIN', async () =>{
        const ongId = await connection('ongs').select('id').first();

        const response = await request(app).post('/sessions')
            //.set('Content-type', 'application/json')
            .send({
                id: ongId
            });

            console.log(response.body);
    });

    //`"${uniqueOngId}"`

});
