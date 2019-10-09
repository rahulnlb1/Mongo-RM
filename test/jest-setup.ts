/* eslint-env jest */

import 'jest';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

// Global Jest Timeout
jest.setTimeout(60 * 1000);
jest.retryTimes(2);
