const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
       await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs')
            .send({
                name: "crianca esperanca1",
                email: "contato@gmail.com",
                whatsapp:"1234567892",
                city:"sao paulo",
                uf:"SP"	
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

/**
 * .send.....
 * .set('authorization', 'id')
 */