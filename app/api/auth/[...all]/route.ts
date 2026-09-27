import { auth } from '../../../../src/lib/auth'; // অথবা "../../../lib/auth"

import { toNextJsHandler } from "better-auth/next-js";
export const { POST, GET } = toNextJsHandler(auth);