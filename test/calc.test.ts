import { calc } from "../src/calc";
import { faker } from '@faker-js/faker';
import Ride from "../src/Ride";

test('A normal ride with base distance can be calculated', () => {
    const distance: number = faker.datatype.number({ min: 5, max: 100 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-22T10:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(distance * 2.10);
});

test('An Overnight ride can be calculated', () => {
    const distance: number = faker.datatype.number({ min: 5, max: 100 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-22T01:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(distance * 3.90);
});

test('A Sunday and overnight ride can be calculated', () => {
    const distance: number = faker.datatype.number({ min: 5, max: 100 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-24T04:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(distance * 5);
});

test('A Sunday and normal ride can be calculated', () => {
    const distance: number = faker.datatype.number({ min: 5, max: 100 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-25T00:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(distance * 2.9);
});

test('An invalid date returns -2', () => {
    const distance: number = faker.datatype.number({ min: 5, max: 100 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('invalid'),
        }
    ];

    expect(calc(payload)).toBe(-2);
});

test('An invalid distance returns -1', () => {
    const distance: number = faker.datatype.number({ min: -100, max: -5 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-22T10:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(-1);
})

test('A ride has the minimum price of 10', () => {
    const distance: number = faker.datatype.number({ min: 1, max: 4 });
    const payload: Ride[] = [
        {
            dist: distance,
            ds: new Date('2022-07-22T10:00:00.000Z'),
        }
    ];

    expect(calc(payload)).toBe(10);
});
