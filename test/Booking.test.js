import { expect, vitest } from "vitest";
import { describe, it } from 'vitest'
import create from "../server/api/reservation/create.post";

describe('suite', () => {
    it('creates a reservation', () => {
        const test = create()
        expect(test).toBe('hello')
    })
})

