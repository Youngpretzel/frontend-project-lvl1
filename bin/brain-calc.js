#!/usr/bin/env node

import playGameCalc from '../src/games/brain-calc.js';
import { greetUser } from '../src/cli.js';

greetUser();
playGameCalc();
