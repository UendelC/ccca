import { calc } from "../src/calc";
import { faker } from '@faker-js/faker';
import Ride from "../src/Ride";

test('A normal ride with base distance can be calculated', () => {
    const distance: number = faker.datatype.number({ min: 1, max: 100 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-22T10:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(distance * 2.10);
});

test('An Overnight ride can be calculated', () => {
    const distance: number = faker.datatype.number({ min: 1, max: 100 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-22T00:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(distance * 3.90);
})