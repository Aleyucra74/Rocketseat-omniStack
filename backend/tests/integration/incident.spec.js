const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
//const uniqueOngId = require('../../tests/unit/generateUniqueId.spec');

describe('INCIDENT', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
       await connection.destroy();
    });

    it('should be able to create a new INCIDENT', async () => {
        const ongId = await connection('ongs').select('id').first();


        const response = await request(app).post('/incidents')
            .set('Authorization', ongId)
            .send({
                title: "caso de teste do teste",
                description: "dog do mal",
                value: 120	
            });

            //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        //expect(response.body.id).toHaveLength(8);
    });
});

/**
 * .send.....
 * .set('authorization', 'id')
 */