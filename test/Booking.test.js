import { expect, vitest } from "vitest";
import { describe, it } from 'vitest'
import create from "../server/api/booking/create.post";

describe('suite', () => {
    it('creates a booking', () => {
        const test = create()
        expect(test).toBe('hello')
    })
})

