#!/usr/bin/env node

import playGameProgression from '../src/games/brain-progression.js';
import { greetUser } from '../src/cli.js';

greetUser();
playGameProgression();
