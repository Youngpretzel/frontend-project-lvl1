#!/usr/bin/env node

import playGamePrime from '../src/games/brain-prime.js';
import { greetUser } from '../src/cli.js';

greetUser();
playGamePrime();
