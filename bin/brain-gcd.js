#!/usr/bin/env node

import playGameGcd from '../src/games/brain-gcd.js';
import { greetUser } from '../src/cli.js';

greetUser();
playGameGcd();
