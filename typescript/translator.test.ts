import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

describe('translator.ts output', () => {
  it('should print the correct output to the console', async () => {
    const { stdout } = await execFileAsync('ts-node', [
      '--compiler-options',
      '{"module":"CommonJS"}',
      'translator.ts',
      'Abc',
      '123',
      'xYz',
    ]);

    const expected = '.....OO.....O.O...OO...........O.OOOO.....O.O...OO..........OO..OO.....OOO.OOOO..OOO';
    expect(stdout.trim()).toBe(expected);
  });
});
