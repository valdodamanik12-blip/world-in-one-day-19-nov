// news-image-20261119 entry (Node 22, standard library only): the front page
// is the entry.png beside this file, rendered from page.html with render.mjs;
// the program copies it to /output/entry.png. Deterministic by construction:
// a byte-for-byte copy, so both grader runs write identical bytes. It reads
// nothing else and reaches no network: the image is already in the repo.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
